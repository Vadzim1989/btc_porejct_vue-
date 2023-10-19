<template>
    <thead ref="thead">
        <tr>
            <th>№ титула</th>
            <th>Район</th>
            <th><input  type="text" 
                        placeholder="Имя титула"
                        v-afocus
                        v-mfocus                        
                        v-model="$parent.$parent.filterName"
                        @keydown.esc="$parent.$parent.filterName=''"></th>
            <th><input  type="number"
                        class="input_number"
                        placeholder="Год"
                        min="2000"
                        v-mfocus
                        v-model.number="$parent.$parent.filterYear"
                        @keydown.esc="$parent.$parent.filterYear=''"
                        ></th>
            <th>Кол-во домов</th>
            <th>Кол-во розеток</th>
            <th>Занято розеток</th>
            <th>Кол-во квартир</th>
            <th>Квартиры PON</th>
            <th>Кол-во ТА</th>
            <th>ТА PON</th>
            <th>Byfly PON</th>
            <th>Zala PON</th>
            <th>Byfly_Zala PON</th>
            <th>Пакеты PON</th>
            <th>Голая телефония</th>
            <th>VPN</th>
            <th>Начисления за {{date}} мес., руб</th>
            <th>Прирост за {{month[date-1]}} мес., руб</th>
        </tr>
    </thead>
</template>

<script>
export default {
    data() {
        return {
            month: ['январь', "февраль", 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
            date: new Date().getMonth()
        }
    },
}
</script>


<style scoped>
    input {
        width: 90%;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input::placeholder {
        font-size: 85%;
    }
</style>
