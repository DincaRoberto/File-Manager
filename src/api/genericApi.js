/**
 * Created by r.dinca on 02/04/17.
 */

import Vue from 'vue';

var root = 'http://0.0.0.0:3000/api/';

function get(objName){
    return Vue.http.get(root + objName).then((res)=>{
        return res.json(null);
    });
}

function post(objName, body) {
    return Vue.http.post(root + objName, body).then((res)=>{
        return res.json(null);
    });
}

function remove(objName, id) {
    return Vue.http.delete(root + objName + "/" + id).then((res)=>{
        return res.json(null);
    });
}

export { get, post, remove }