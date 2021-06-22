class SLL {
    constructor(value) {
        this.head
    }
    removeFront(value) {
        newNode = new Node([value])
        removeHead = newNode.pop
    }
}

class SLL2 {
    constructor(value) {
        this.head
    }
    addFront(value) {
        newNode = new Node(value);

        newNode.next = this.head;

        this.head = newNode;
        return this;
    }


}
    