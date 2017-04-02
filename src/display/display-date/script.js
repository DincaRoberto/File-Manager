/**
 * Created by r.dinca on 31/03/17.
 */

import Vue from 'vue'

function getDate(str) {
    var parsedDate = Date.parse(str);

    var d = new Date(parsedDate);

    if (isNaN(str) && !isNaN(parsedDate)) {

        return d
    }

    return null;
}

function zeroF(v) {
    if (v < 10){
        return '0' + v;
    }
    return v;
}

function getFormatDate(date) {

    return `${zeroF(date.getDate())}/${zeroF(date.getMonth())}/${date.getFullYear()} 
            ${zeroF(date.getHours())}:${zeroF(date.getMinutes())}:${zeroF(date.getSeconds())}`;
}

export default Vue.filter('displayDate', function (value, arr) {

    var date = getDate(value);

    if (date){
        return getFormatDate(date);
    }

    return value;

});