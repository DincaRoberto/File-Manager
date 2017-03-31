
/**
 * Created by r.dinca on 30/03/17.
 */

import Vue from 'vue'

import * as ApiService from "../api/ApiService.vue";


function openFile(event) {
    var input = event.target;

    var self = this;

    var reader = new FileReader();
    reader.onload = function (r) {

        var f = event.target.files[0];

        var dataURL = reader;
        console.log(dataURL);
        console.log(f);

        ApiService.postAsset(f.name, 'Me', f.lastModifiedDate, (new Date())).then(function(res){
            res.json().then((res)=>{
                console.log(self.filesList.push(res));
            })
        });
    };
    reader.readAsBinaryString(input.files[0]);
};

var FmContainer = Vue.component('fmContainer', {

    name: "fmContainer",

    template: "#fm-container",

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
                    //console.log(res);
                    this.loading = false;
                    this.filesList = res;
                });
            }, (err)=>{
                //console.log(err);
                this.loading = false;
                this.error = true;
            });
        }, 5000);
    }
})

export default FmContainer;


