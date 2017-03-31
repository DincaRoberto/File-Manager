/**
 * Created by r.dinca on 29/03/17.
 */

import Vue from 'vue';

var root = 'http://0.0.0.0:3000/api/';

export function getAssets() {
    return Vue.http.get(root + 'Assets').then((res)=>{
        return res.json(null);
    });
}


export function postAsset(name, author, modified, uploaded) {
    return Vue.http.post(root + 'Assets', {
        "Name": name,
        "Author": author,
        "Created": uploaded,
        "Modified": modified
    }).then((res)=>{
        return res.json(null);
    });
}

export function deleteAsset(id){
    return Vue.http.delete(root + 'Assets' + "/" + id).then((res)=>{
        return res.json(null);
    });
}

//export {getAssets , postAsset};