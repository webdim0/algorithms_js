import {checkStr} from '../braketsTemplateCheck'

test('braketsTemplateCheck test valid', () => {
    const str = "{([{}]){}{}{}([{}])[{{{}}}]}";
    expect(checkStr(str)).toBe(true);
});

test('braketsTemplateCheck test not valid', () => {
    const str = "{([{}]){}{]{}([{}])[{{{}}})}";
    expect(checkStr(str)).toBe(false);
});