<template>
    <div class="table_wrapper">
        <export-excel
            class='btn_excel'
            :data='users'
            :fields="json_fields"
            name="tituls_abons.xls">
            <img src="../../assets/down_excel.png" alt="excel_download" class="down_logo">
        </export-excel>
        <table>
            <thead>
                <tr>
                    <th>Код абонента</th>
                    <th>Телефон</th>
                    <th><input  type="text"
                                placeholder="ФИО/Название организации"
                                v-afocus
                                v-mfocus
                                v-model="$parent.filterName"
                                @keydown.esc="$parent.filterName=''">
                    </th>
                    <th><input  type="text"
                                placeholder="Адрес"
                                v-mfocus
                                v-model="$parent.filterAddress"
                                @keydown.esc="$parent.filterAddress=''">
                    </th>
                    <th>Номер титула</th>
                </tr>
            </thead>
            <tbody>
                <TableBody  v-bind:users='users'
                            v-for="(users, index) in users" :key="index"/>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">{{this.users.map(({ab_code}) => ab_code).length}} абонентов</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import TableBody from '@/components/moretitulinfo/MoreInfoTableBody'
export default {
    props: ['users'],
    components: {
        TableBody
    },
    data() {
        return {
            json_fields: {
                'Код абонента': 'ab_code',
                'Телефон': 'nphone',
                'ФИО/Название организации': 'name',
                'Адрес': 'address',
                'Номер титула': 'id_titul'
            }
        }
    },
}
</script>

<style scoped>
    input {
        width: 85%;
    }
</style>
