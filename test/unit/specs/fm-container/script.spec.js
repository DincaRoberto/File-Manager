/**
 * Created by r.dinca on 02/04/17.
 */

import Vue from 'vue'

import FmContainer from '@/fm-container/fm-container.vue';

Vue.component('icon', {template:'<div></div>'});

describe('FmContainer', () => {

    it('shout have methods', () => {

        const vm = new FmContainer();

        expect(typeof vm.openFile).to.equal('function');
        expect(typeof vm.onDelete).to.equal('function');
        expect(typeof vm.refreshFiles).to.equal('function');

    });

    it('shout have data', () => {

        const vm = new FmContainer();

        const vm1 = vm.$mount();

        expect(vm1.title).to.equal('Title')
    });
    
});