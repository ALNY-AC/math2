import Subject from "../modular/Subject";
export default {
    name: 'index',
    data() {
        return {
            number: 10,
            range: 10,
            type: ['+', '-'],
            subjectList: [],
            time: null,
            frame: 0,
            isDisabled: false,
            success: 0,
            error: 0,
        };
    },
    methods: {
        init() {
            // this.build();
        },
        getValue() {
            return Math.round(Math.random() * this.range)
        },
        getType() {
            let random = Math.round(Math.random() * (this.type.length - 1));
            return this.type[random];
        },
        build() {
            let list = [];
            for (let i = 1; i <= this.number; i++) {
                let x = this.getValue();
                let y = this.getValue();
                let type = this.getType();
                let subject = new Subject(x, y, type);
                list.push(subject);
            }
            this.subjectList = list;
            this.startTime();
        },
        startTime() {
            this.frame = 0;
            this.success = 0;
            this.error = 0;
            this.closeTime();
            this.time = setInterval(() => {
                this.frame++;
            }, 1000);
        },
        closeTime() {
            clearInterval(this.time);
        },
        submit() {
            this.closeTime();
            this.subjectList.forEach(item => {
                let is = item.test()
                is ? this.success++ : this.error++;
            });
        }
    },
    computed: {
        h() {
            let m = parseInt(this.frame / 60);
            return m >= 60 ? parseInt(m / 60) : 0
        },
        m() {
            let m = parseInt(this.frame / 60);
            return m > 60 ? parseInt(m % 60) : m;
        },
        s() {
            return parseInt(this.frame % 60);
        },
    },
    filters: {
        time(v) {
            return ('' + v).length == 1 ? `0${v}` : v;
        }
    },
    mounted() {
        this.init();
        this.$nextTick(() => { });
    },
    watch: {},
    components: {},
};