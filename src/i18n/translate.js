/**
 * Created by:  Dinca Roberto
 * On:          31/03/17
 * For project: File-Manager
 * Description:
 */


import Vue from 'vue'


import * as translate from "./main";


export default Vue.filter('label', function (value, arr) {
    return (!translate[arr] || !translate[arr][value]) ? value : translate[arr][value];
});