/**
 * Created by r.dinca on 02/04/17.
 */

import List from '@/display/display-list/display-list.vue';

describe('list', () => {


    it('shout have an onDelete function', () => {

        const vm = new List();

        expect(typeof vm.onDelete).to.equal('function');
    });

    it('should emit an event', () => {

        const vm = new List();

        var setNameSpy = sinon.spy(vm, '$emit');

        vm.onDelete('ev', 'val');

        assert(setNameSpy.calledWith('delete', 'val'));

        setNameSpy.restore();
    });

});