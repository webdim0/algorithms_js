class Node {
    value = null;
    next = null;
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
export const buildList = (...values) => {
    let list = null;
    let prevNode = null;
    for (const value of values) {
        const nextNode = new Node(value);
        if (prevNode) {
            prevNode.next = nextNode;
        } else {
            list = nextNode;
        }
        prevNode = nextNode;
    }
    return list;
}

export const printList = (list) => {
    let node = list;
    while (node) {
        process.stdout.write(`${node.value} -> `);
        node = node.next;
    }
    process.stdout.write(`null`);
}

export const toArray = (list) => {
    const arr = [];
    let node = list;    
    while (node) {
        arr.push(node.value);        
        node = node.next;
    }    
    
    return arr;
}

export const reverseList = (list) => {    
    
    let node = list;    
    let prev = null;
    let next = null;
    while (node) {                        
        next = node.next;
        node.next = prev;
        prev = node;        
        node = next;
    }
    // console.log(prev);

    return prev;
}