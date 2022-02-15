<template>
    <div class="table_wrapper">
        <export-excel
            class='btn_excel'
            :data='tituls'
            :fields="json_fields"
            name="tituls_info.xls">
            <img src="../../assets/down_excel.png" alt="excel_download" class="down_logo">
        </export-excel>
        <table>
            <TableHeader ref="thead"/>
            <tbody>
                <TableBodyRows 
                    v-bind:tituls='tituls'
                    v-for="tituls in tituls" :key="tituls.id_adr"/>
            </tbody>
            <TableFooter
                v-bind:tituls='tituls'/>
        </table>
    </div>
</template>

<script>
    import TableHeader from '@/components/titulinfo/TableHeader';
    import TableBodyRows from '@/components/titulinfo/TableBodyRows';
    import TableFooter from '@/components/titulinfo/TableFooter';
    export default {
        props: ['tituls'],
        data() {
            return {
                json_fields: {
                'Номер титула': 'id_adr',
                'Год ввода': 'god_vvod',
                'Название титула': 'name_titul',
                'Всего розеток': 'all_socket',
                'Занято розеток': 'check_socket',
                'Всего квартир': 'kv_all',
                'Квартир на PON': 'kv_pon',
                'Всего ТА': 'ta_all',
                'ТА на PON': 'ta_pon',
                'Byfly PON': 'byfly_pon',
                'ZALA PON': 'zala_pon',
                'Byfly и ZALA PON': 'byfly_zala_pon',
                'Пакеты услуг PON': 'packet_pon',
                'Голая телефония': 'phone_null_pon',
                'VPN': 'vpn'
                }
            }
        },
        components: {
            TableHeader,
            TableBodyRows,
            TableFooter
        }
    }
</script>

<style>
    table{
        border-collapse: collapse;
        max-width: 91.5vw;
        width: 100%;
        margin-left: 1.5%;
        margin-bottom: 20px;
        font-size: .7rem;
    }
    table thead {
        position: sticky;
        position: -webkit-sticky;
        top: -1px;
    }
    table th:first-child{
        border-top-left-radius: 10%;
    }
    table th:last-child{
        border-top-right-radius: 10%;
    }
    table th {
        font-weight: 500;
        padding: 5px;
        background: #2f9ed1;
    }
    table td{
        padding: 3px 2px;
        text-align: left;
    }
    table tbody tr:nth-child(odd){
        background: #fff;
    }
    table tbody tr:nth-child(even){
        background: #c5f3fcfd
    }
    table tfoot {
        position: sticky;
        position: -webkit-sticky;
        bottom: 0;
    }
    table tfoot tr{
        font-weight: 500;
        padding: 5px;
        background: #2f9ed1;
    }
    .td-id {
        font-weight: bold;
    }
    .td-name {
        padding: .4% .4%;
        font-weight: 500;
    }
    .tdNum {
        text-align: center;
        font-size: .8rem;
    }
    .table_wrapper {
        flex: 1 1 87%;
        overflow-y: auto;
        width: 94vw;
        height: 88vh;
    }
    .btn_excel {
        margin-left: 1%;
        cursor: pointer;
        max-width: 1.1%;
        padding-left: .5%;
    }
    .btn_excel:hover {
        transform: scale(1.2);
        transition: .2s all ease;
    }
    .down_logo {
        width: 80%;
    }
    @media screen and (max-width:1850px){
        table {
            font-size: .6rem;
            margin-left: 0;
        }
        .table_wrapper {
            width: 91vw;
        }
        .tdNum {
            font-size: .6rem;
        }
        input {
            font-size: .5rem;
        }
    }
</style>
