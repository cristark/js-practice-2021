/* Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde. 
Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari. */

let app = new Vue({
    el: '#app',
    data: {
        numList: [],
        sentinel: true,
    },
    methods: {
        generaRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },
        genArr() {
            if (this.sentinel) {
                let arrNum = this.generaRandom(5, 30);
    
                for (let i = 0; i < arrNum; i++) {
    
                    let num = this.generaRandom(1, 100);
                
                    if (this.numList.includes(num) == false) {
                        this.numList.push(num);
                    }
                }

                this.sentinel = false;
            }
        },
        cleanArr() {
            this.numList = [];
            this.sentinel = true;
        },
        genNum() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/int')
                .then(result => {
                    let num = result.data.response;
                    if (this.numList.includes(num) == false && this.sentinel == false) {
                        this.numList.push(num);
                    }
                })
        }
    }
});