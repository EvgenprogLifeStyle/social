import { classNames } from './classNames';

describe('className', () => {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass add class2';
        expect(classNames('someClass', {}, ['add', 'class2'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass add hovered scroll';
        expect(classNames(
            'someClass',
            { hovered: true, scroll: true },
            ['add'],
        )).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass add hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scroll: false },
            ['add'],
        )).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass add hovered';
        expect(classNames(
            'someClass',
            { hovered: true, false: undefined },
            ['add'],
        )).toBe(expected);
    });
});
