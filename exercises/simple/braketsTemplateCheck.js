export const checkStr = (str, log=false) => {  
    const bracketsMap = {
        '{':'}',
        '(':')',
        '[':']'
    }       
    const openKeys = Object.keys(bracketsMap);
    const closeKeys = Object.values(bracketsMap);
    const list = str.split('');
    const stack = [];
    for (let i=0; i < list.length; i++) {
        if (openKeys.includes(list[i])) {
            stack.push(list[i]);
            if (log) {
                console.log('push', list[i]);
            }
        } else if (closeKeys.includes(list[i]) && bracketsMap[stack[stack.length-1]] === list[i]) {
            stack.pop(list[i]);
            if (log) {
                console.log('pop', list[i]);
            }
        } else {
            if (log) {
                console.log('exit', list[i]);
            }
            return false;
        }
    }

    return stack.length === 0;
}