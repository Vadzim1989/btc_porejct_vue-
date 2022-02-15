<template>
    <tr :key="tituls.id_adr">
        <td class="tdNum td-id">{{tituls.id_adr}}</td>
        <td><router-link :to="CITY.get(tituls.zues)" class="hot">{{tituls.zues}}</router-link></td>
        <td class="td-name">{{tituls.name_titul}}</td>
        <td class="tdNum tdYear" 
            @click="$parent.$parent.$emit('set-year', tituls.god_vvod)">
                {{tituls.god_vvod}}
        </td>
        <td class="tdNum">{{tituls.all_socket}}</td>
        <td class="tdNum">{{tituls.check_socket}}</td>
        <td class="tdNum">{{tituls.kv_all}}</td>
        <td class="tdNum">{{tituls.kv_pon}}</td>
        <td class="tdNum">{{tituls.ta_all}}</td>
        <td class="tdNum">{{tituls.ta_pon}}</td>
        <td class="tdNum">{{tituls.byfly_pon}}</td>
        <td class="tdNum">{{tituls.zala_pon}}</td>
        <td class="tdNum">{{tituls.byfly_zala_pon}}</td>
        <td class="tdNum">{{tituls.packet_pon}}</td>
        <td class="tdNum">{{tituls.phone_null_pon}}</td>
        <td class="tdNum">{{tituls.vpn}}</td>
    </tr>
</template>

<script>
export default {
    props: {
        tituls: {
            type: Object
        }
    },
    data() {
        return {
            CITY: new Map(
                [
                    ["ГОМЕЛЬ",           '/gomel'],
                    ["ВЕТКОВСКИЙ",       '/vetka'],
                    ["ЧЕЧЕРСКИЙ",        '/chechersk'],
                    ["ДОБРУШСКИЙ",       '/dobrush'],
                    ["ЖЛОБИНСКИЙ",       '/jlobin'],
                    ["КОРМЯНСКИЙ",       '/korma'],
                    ["РОГАЧЕВСКИЙ",      '/rogachev'],
                    ["РЕЧИЦКИЙ",         '/rechica'],
                    ["СВЕТЛОГОРСКИЙ",    '/svetlogorsk'],
                    ["БРАГИНСКИЙ",       '/bragin'],
                    ["КАЛИНКОВИЧСКИЙ",   '/kalinkovichi'],
                    ["ХОЙНИКСКИЙ",       '/hoiniki'],
                    ["ЛОЕВСКИЙ",         '/loev'],
                    ["ПЕТРИКОВСКИЙ",     '/petrikov'],
                    ["МОЗЫРСКИЙ",        '/mozir'],
                    ["ЖИТКОВИЧСКИЙ",     '/jitkovichi'],
                    ["ЕЛЬСКИЙ",          '/elsk'],
                    ["НАРОВЛЯНСКИЙ",     '/narovlya'],
                    ["ЛЕЛЬЧИЦКИЙ",       '/lelchici'],
                    ["ОКТЯБРЬСКИЙ",      '/october'],
                    ["ГОМЕЛЬСКИЙ",       '/gomelzues'],
                    ["БУДА-КОШЕЛЕВСКИ",  '/buda']
                ]
            )
        }
    },

}
</script>

<style>
    .tdNum {
        width: 3%;
    }
    .tdYear:hover {
        cursor: pointer;
        background-color: #00eeff;
        font-weight: bold;
    }
    .hot:hover {
        cursor: pointer;
        background-color: #00eeff;
    }
    .hot {
        text-decoration: none;
        color: black;
    }
</style>