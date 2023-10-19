const express = require('express');
const db = require('odbc');
const cs = require('config').get('informixURL');
const name = require('config').get('tableName');
const tableNachAll = require('config').get('tableNachAll');
const tableNachMonth = require('config').get('tableNachMonth');


const router = express.Router();

async function querySelect() {
    const connection = await db.connect(cs);
    const statement = await connection.createStatement();
    await statement.prepare(`select a.*, b.summa, c.summa_month 
                            from gomel:${name} a, outer gomel:${tableNachAll} b, outer gomel:${tableNachMonth} c  
                            where a.id_adr = b.id
                            and a.id_adr = c.id
                            and zues = "БРАГИНСКИЙ"         
                            order by id_adr`);
    const result = await statement.execute();
    await statement.close();
    await connection.close();
    return result;
}

async function getResult() {
    let queryResult = await querySelect();
    return queryResult;
}


router.get('/bragin', async (req, res) => {
    const result = await getResult();
    res.json(result);
})

module.exports = router;