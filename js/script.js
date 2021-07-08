Vue.config.devtools = true


var app = new Vue({
    el: '#app',
    data: {
        emails: []
    },
    created() {

    },
    methods: {
        callEmail: function () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response)
                })
        },
    }
})