/**
 * Created by r.dinca on 02/04/17.
 */


import label from '@/i18n/translate';

describe('translate', () => {

    it('should return the value string if it s not in the translation files', () => {
        expect(label("p", 'notATranslatedComponent')).to.equal('p');
    });

    it('should return the label if it s in files', () => {
        expect(label('Title', 'fmContainer')).to.equal("File Manager");
    });
});