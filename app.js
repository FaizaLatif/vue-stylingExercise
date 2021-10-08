const app = Vue.createApp({
    data(){
        return {
            userInput: '',
            visible: true,
            class: '',
            color: ''
        }
    },
    methods: {
        toggleVisibility() {
            this.visible = !this.visible
        },
        updateData() {
            this.class = this.userInput;
        }
    },
    computed: {
        paragraphClass() {
            if (this.class === 'user1') {
                return { user1: true };
            }
            if (this.class === 'user2') {
                return { user2: true }
            }
        },
        visibility() {
            if (this.visible == true) {
                return { visible: true };
            } else {
                return { hidden: true}
            }


        }
    }
})

app.mount('#assignment')
