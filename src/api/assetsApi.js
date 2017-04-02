/**
 * Created by r.dinca on 29/03/17.
 */

import { get, post, remove } from './genericApi';

const objName = 'Assets';

function getAssets() {

    return get(objName);
}


function postAsset(name, author, modified, uploaded) {

    return post(objName, {
        "Name": name,
        "Author": author,
        "Created": uploaded,
        "Modified": modified
    });
}

function deleteAsset(id){

    return remove(objName, id);
}

export { getAssets , postAsset, deleteAsset };