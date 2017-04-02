/**
 * Created by r.dinca on 02/04/17.
 */

import displayDate from '@/display/display-date/script';

describe('display date', () => {

    it('should return a string if the input is a string', () => {
       expect(displayDate("myString")).to.equal('myString');
    });

    it('should return a number if the input is a number', () => {
        expect(displayDate("42")).to.equal('42');
    });

    it('should return a date if the input is a date', () => {
        expect(displayDate("2017-04-02T18:37:00.904Z").replace(/\s/g, "")).to.equal('02/03/201720:37:00');
    });
});