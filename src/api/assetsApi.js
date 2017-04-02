/**
 * Created by:  Dinca Roberto
 * On:          29/03/17
 * For project: File-Manager
 * Description:
 */


import { get, post, remove } from './genericApi';


const RESOURCE_NAME = 'Assets';


function getAssets() {
    return get(RESOURCE_NAME);
}


function postAsset(name, author, modified, uploaded) {
    return post(RESOURCE_NAME, {
        "Name": name,
        "Author": author,
        "Created": uploaded,
        "Modified": modified
    });
}


function deleteAsset(id){
    return remove(RESOURCE_NAME, id);
}


export { getAssets , postAsset, deleteAsset };