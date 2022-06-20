import {checkStr} from './braketsTemplateCheck.js';

const str0 = "()[]{}";
const str1 = "([)]";
const str2 = "([{}]){}{}{}([{}]){{{}}}";
const str3 = "{([{}]){}{}{}([{}])[{{{}}}]}";

const str = str3;
console.log('*braketsTemplateCheck');
console.log(str);
const res = checkStr(str, true);
console.log(res);
console.log('---');