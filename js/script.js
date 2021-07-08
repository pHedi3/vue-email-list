Vue.config.devtools = true


var app = new Vue({
    el: '#app',
    data: {
        emails: [],
    },
    created() {
        this.genEmail()
    },
    methods: {
        genEmail: function () {
            for (var x = 0; x < 10; x++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.emails.push(response.data.response)
                });
            };
        },
        stampEmail: function () {
            this.emails = []
            this.genEmail()
        }

    }
})
