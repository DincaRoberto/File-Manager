/**
 * Created by r.dinca on 30/03/17.
 */


export default {
    name: 'fmContainer',

    components: {
        "fm-loading": require('../fm-loading/fm-loading.vue'),
        "fm-error": require('../fm-error/fm-error.vue'),
        "fm-list": require('../fm-list/fm-list.vue')
    },

    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            filesList: null,
            loading: true,
            error: false
        }
    },
    methods: {},

    created: function () {
        setTimeout(()=>{
            this.loading = false;

            this.filesList = [{a:"a1", b:"b1"}, {a:"a2", b:"b2"}, {a:"a3", b:"b3"}];
        }, 5000);
    }
}