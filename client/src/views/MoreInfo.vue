<template>
    <div class="more_info">
        <input  type="number" 
                v-model="filterID"
                placeholder="Введите номер титула"
                v-afocus
                v-mfocus
                @keydown.esc="filterID=''"
                @keydown.enter="keyDownEnter"
                required=''/>
        <button type="sumbit" 
                @click="fetchData">Поиск</button>
        <Loader v-if="loading"/>  
            <MoreInfoTable  v-else-if="users.length"
                            v-bind:users='filteredUsers'/>
        <p v-else>Данных нету!</p>
    </div>
</template>

<script>
    import MoreInfoTable from '@/components/moretitulinfo/MoreInfo';
    import Loader from '@/components/Loader';

    export default {
        name: 'MoreInfo',
        components: {
            MoreInfoTable,
            Loader
        },
        data() {
            return {
                users: [],
                loading: false,
                filterID: null,
                filterAddress: '',
                filterName: ''
            }                
        },
        methods: {
            fetchData() {
                if(this.filterID) {   
                    this.loading = true;
                    fetch(`http://10.245.3.132:99/api/titulinfo/moreinfo?titulid=${this.filterID}`)
                    .then(response => response.json())
                    .then(json => {
                            setTimeout(() => {
                                this.users = json
                                this.loading = false
                        },100);
                    })
                } else {
                    this.users = [];
                }
            },
            keyDownEnter(){
                this.fetchData();              
            },
            en2ru: str => {  //qwerty => йцукенг encoding en to rus
                if(!str) return str;
                let conv = {
                    ru: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
                    en: `F<DULT~:PBQRKVYJGHCNEA{WXIO}SM">Z`+"f,dult`;pbqrkvyjghcnea[wxio]sm'.z"
                }, res = "";
                // if(!String(str).match(RegExp(`[${conv.en.replace(/[\[\]]/g,"\$&")}]`))) return str;  //строка не содержит англ.
                for(let c of String(str)) res += conv.ru[conv.en.indexOf(c)]||c;
                return res;
                }//fu
        },
        computed: {
            filteredUsers() {
                if(!this.users.length) return this.users;
                let fn = RegExp(`${this.filterName}|${this.en2ru(this.filterName)}`, 'i');
                let fa = RegExp(`${this.filterAddress}|${this.en2ru(this.filterAddress)}`, 'i');
                return this.users.filter(u => {
                    return (!fn || u.name.match(fn)) && (!fa || u.address.match(fa));
                })
            } // filtered our data
        }
    }
</script>

<style scoped>
    p {
        text-align: center;
    }    
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input {
        margin-bottom: .1%;
        margin-left: 44%;
        width: 10%;
    }
    .more_info {
        width: 90vw;
        height: 90vh;
    }
</style>    

