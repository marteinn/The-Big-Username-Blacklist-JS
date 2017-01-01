var validate = window.theBigUsernameBlacklist.validate;

var app = new Vue({
    el: '#app',
    data: {
        search: '',
        message: '',
        valid: false,
        showStatus: false,
    },
    methods: {
        submit: function(value) {
            var status = validate(this.search);

            if (status) {
                this.message = 'Word "'+this.search+'" was not found in blacklist';
            } else {
                this.message = 'Word "'+this.search+'" was found in blacklist';
            }

            this.valid = status;
            this.showStatus = true;
        }
    }
})
