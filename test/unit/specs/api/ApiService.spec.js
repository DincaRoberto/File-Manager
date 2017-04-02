/**
 * Created by r.dinca on 29/03/17.
 */



import Vue from 'vue'
import VueResource from 'vue-resource'
import * as ApiService from '@/api/assetsApi';

Vue.use(VueResource);

describe('ApiService.vue', () => {

    it('should call http get', () => {


        var setNameSpy = sinon.spy(Vue.http, 'get');

        ApiService.getAssets();

        //console.log(setNameSpy.callCount); //output: 1

        assert(setNameSpy.calledOnce);

        setNameSpy.restore();
    });

    it('should call http post', () => {


        var setNameSpy = sinon.spy(Vue.http, 'post');

        ApiService.postAsset();
        sinon.assert.calledOnce(setNameSpy);

        setNameSpy.restore();
    });

    it('should call http delete', () => {


        var setNameSpy = sinon.spy(Vue.http, 'delete');

        ApiService.deleteAsset();
        sinon.assert.calledOnce(setNameSpy);

        setNameSpy.restore();
    })
});