/**
 * Created by:  Dinca Roberto
 * On:          30/03/17
 * For project: File-Manager
 * Description:
 */


import Vue from 'vue'


import { postAsset, getAssets, deleteAsset } from "../api/assetsApi";


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


export default Vue.component('fmContainer', {

    template: "#fm-container",

    components: {
        "display-loading": require('../display/display-loading/display-loading.vue'),
        "display-error": require('../display/display-error/display-error.vue'),
        "display-list": require('../display/display-list/display-list.vue')
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


