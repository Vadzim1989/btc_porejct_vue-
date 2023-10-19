const express = require('express');
const db = require('odbc');
const cs = require('config').get('informixURL');

const router = express.Router();

async function querySelect(req, res) {
    if(req.method === 'GET') {
        const connection = await db.connect(cs);
        console.log(req.body);
        const statement = await connection.createStatement();
        await statement.prepare(`select distinct ab_code, nphone, wastup:getabname(ab_code) name, b.name address, spr_isfull id_titul
                                from   ratsg:phone_volume a,
                                       ratsg:taddress b,
                                       wastup:adr_house_service c
                                where  a.current_ph not in (6,60)
                                and    a.id_address = b.id_address
                                and    b.house_code = c.id_house
                                and    c.spr_isfull = ${req.query.titulid}`);
        const result = await statement.execute();
        await statement.close();
        await connection.close();
        return result;
    }
}

async function getResult(req, res) {
    let queryResult = await querySelect(req, res);
    return queryResult;
}

router.get('/moreinfo', async (req, res) => {
    const result = await getResult(req, res);  
    res.json(result);
})


module.exports = router;