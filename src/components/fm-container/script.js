
/**
 * Created by r.dinca on 30/03/17.
 */

import Vue from 'vue'

import {postAsset, getAssets, deleteAsset} from "../api/script";


function openFile(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {

        var f = event.target.files[0];

        postAsset(f.name, 'Me', f.lastModifiedDate, new Date()).then((res)=>{
            this.refreshFiles();
        });
    }.bind(this);
    reader.readAsBinaryString(input.files[0]);
}

function onDelete(value) {
    deleteAsset(value.id).then(()=>{
        this.refreshFiles();
    })
}

function refreshFiles(){
    getAssets().then((res)=>{
        this['loading'] = false;
        this.filesList = res;
    }, (err)=>{
        this['loading'] = false;
        this.error = err;
    });
}

var FmContainer = Vue.component('fmContainer', {

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
        openFile: openFile,
        onDelete: onDelete,
        refreshFiles: refreshFiles
    },

    created: function () {
        setTimeout(()=> {
            this.refreshFiles();
        }, 5000);
    }
});

export default FmContainer;


