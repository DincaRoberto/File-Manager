/**
 * Created by r.dinca on 31/03/17.
 */

import Vue from 'vue'

import * as translate from "./main";

export default Vue.filter('label', function (value, arr) {

    if (!translate[arr] || !translate[arr][value]){
        return value;
    }

    return translate[arr][value];
});