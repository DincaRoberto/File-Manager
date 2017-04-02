/**
 * Created by:  Dinca Roberto
 * On:          31/03/17
 * For project: File-Manager
 * Description:
 */


import Vue from 'vue'


function getViableDate(str) {
    var parsedDate = Date.parse(str);
    var d = new Date(parsedDate);

    return (isNaN(str) && !isNaN(parsedDate)) ? d : null;
}


function zeroF(v) {
    return (v < 10) ? `0${v}` : v;
}


function getFormatDate(date) {
    return `${zeroF(date.getDate())}/${zeroF(date.getMonth())}/${date.getFullYear()} 
            ${zeroF(date.getHours())}:${zeroF(date.getMinutes())}:${zeroF(date.getSeconds())}`;
}


export default Vue.filter('displayDate', function (value) {
    var viableDate = getViableDate(value);

    return (viableDate) ? getFormatDate(viableDate) : value;
});