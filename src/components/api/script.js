/**
 * Created by r.dinca on 29/03/17.
 */

import Vue from 'vue';

var root = 'http://0.0.0.0:3000/api/';

function getAssets() {
    return Vue.http.get(root + 'Assets');
}


function postAsset(name, author, modified, uploaded) {
    return Vue.http.post(root + 'Assets', {
        "Name": name,
        "Author": author,
        "Created": uploaded,
        "Modified": modified
    });
}

export {getAssets , postAsset};