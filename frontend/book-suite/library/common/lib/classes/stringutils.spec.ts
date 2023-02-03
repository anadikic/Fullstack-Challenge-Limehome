import { StringUtils } from './stringutils';

describe('StringUtils', () => {
    it(`should have no spaces on the right side after rtrim`, () => {
        expect(StringUtils.rtrim('     Test     ', ' ')).toBe('     Test');
    });

    it(`should have no spaces on the left side after rtrim`, () => {
        expect(StringUtils.ltrim('     Test     ', ' ')).toBe('Test     ');
    });
});
