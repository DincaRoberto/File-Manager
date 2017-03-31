
/**
 * Created by r.dinca on 30/03/17.
 */

import Vue from 'vue'

import * as ApiService from "../api/ApiService.vue";


var openFile = function (event) {
    var input = event.target;


    var reader = new FileReader();
    reader.onload = function (r) {

        var f = event.target.files[0];

        var dataURL = reader;
        console.log(dataURL);
        console.log(f);
    };
    reader.readAsBinaryString(input.files[0]);
};

export default Vue.component('fmContainer', {

    components: {
        "fm-loading": require('../fm-loading/fm-loading.vue'),
        "fm-error": require('../fm-error/fm-error.vue'),
        "fm-list": require('../fm-list/fm-list.vue')
    },

    data () {
        return {
            title: 'Title',
            filesList: null,
            loading: true,
            error: false
        }
    },
    methods: {
        openFile: openFile
    },



    created: function () {
        setTimeout(()=> {
            ApiService.getAssets().then((res)=>{
                res.json().then((res) => {
                    console.log(res);
                    this.loading = false;
                    this.filesList = res;
                });
            }, (err)=>{
                console.log(err);
                this.loading = false;
                this.error = true;
            });
        }, 5000);
    }
})


