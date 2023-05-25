class LinkedList{
    constructor(){
        this.head = null;
    }

    add(value) {
        let node = { data: value, next: null };
        
        if (this.head == null) this.head = node;
        else {
            let tempNode = this.head;
            while (tempNode.next) tempNode = tempNode.next;
            tempNode.next = node;
        }
    }

    remove(value){
        if (this.head == null) return;

        while (this.head.data == value) {
            this.head = this.head.next;
        }

        let tempNode = this.head.next;
        let prev = this.head;
        while (tempNode) {
            if (tempNode.data == value) {
                prev.next = tempNode.next;
            }
            else prev = prev.next;
            tempNode = tempNode.next;
        }
    }

    contains(value) {
        let tempNode = this.head;
        while (tempNode) {
            if (tempNode.data == value) return true;
            tempNode = tempNode.next;
        }
        return false;
    }

    clear() {
        this.head = null;
    }

    
    [Symbol.iterator] = function* () {
        let current = this.head;
        while (current){
            yield current.data;
            current = current.next;
        }
    }

    count() {
        let cnt = 0;
        let tempNode = this.head;
        while (tempNode) {
            cnt++;
            tempNode = tempNode.next;
        }
        return cnt;
    }

    log() {
        let tempNode = this.head;
        const values = [];
        while (tempNode) {
          values.push(tempNode.data);
          tempNode = tempNode.next;
        }
        console.log(values.join(", "));
    }
}

function createLinkedList(arr) {
    list = new LinkedList();
    for (let val of arr) {
        list.add(val);
    }
    return list;
}

/*
const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();// "100, 100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));// "true"
let sum = 0;for(const n of ll) {sum += n;}
console.log(sum);// "25"
ll.clear();
ll.log();// ""
*/