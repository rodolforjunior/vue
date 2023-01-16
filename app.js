

const app = Vue.createApp({
    data() {
        return {
            title: 'Variavel dinâmica',
            autor: 'Rodolfo',
            age: 45
        }
    },
    methods: {
        changeTitle() {
            console.log('passei');
            this.title = 'Mudando variavel dinâmica'
        }
    }
});

app.mount('#app');