/**
 * Created by:  Dinca Roberto
 * On:          02/04/17
 * For project: File-Manager
 * Description:
 */


import Vue from 'vue';


const ROOT = 'http://0.0.0.0:3000/api/';


function get(objName){
    return Vue.http.get(ROOT + objName).then((res)=>{
        return res.json(null);
    });
}


function post(objName, body) {
    return Vue.http.post(ROOT + objName, body).then((res)=>{
        return res.json(null);
    });
}


function remove(objName, id) {
    return Vue.http.delete(ROOT + objName + "/" + id).then((res)=>{
        return res.json(null);
    });
}


export { get, post, remove }