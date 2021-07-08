Vue.config.devtools = true


var app = new Vue({
    el: '#app',
    data: {
        emails: [],
        taEmail: []
    },
    created() {
        this.genEmail()
    },
    methods: {
        genEmail: function () {
            for (var x = 0; x < 5; x++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.taEmail.push(response.data.response)
                });
            };
        },
        stampEmail: function () {
            if (this.taEmail.length == 5) {
                this.emails = this.taEmail
            }
        }

    }
})
