// this class is used to be stored inside LinkedList
class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null // this will always store the first node
    this.length = 0 // stores the number of nodes
  }

  insertAtHead(value) {
    // newNode will have its "next" property set as the current head's reference
    const newNode = new Node(value, this.head)
    this.head = newNode // the head of this linked list will be "newNode" so it will be first
    this.length++ // adding a new node to the linked list add 1 to length property
  }

  getByIndex(index) {
    // need to return null if index is negative or more than the linked lists's length
    if (index < 0 || index >= this.length) return null

    let current = this.head // variable to store the head and used to access the next node 
    for (let i = 0; i < index; i++) {
      current = current.next // will keep reassigning "current" with the next node until i < index is no longer true
    }
    return current;
  }

  insertAtIndex(index, value) {
    // make use of the previously defined insertAtHead() method
    if (index === 0) return this.insertAtHead(value)

    // "prev" will be the node before the node you are inserting to set up the insertion
    const prev = this.getByIndex(index - 1)
    if (prev == null) return null  // make sure index is not negative or more than the linked list's length

    // since prev is the node before insertion, prev's next property will be the new node
    prev.next = new Node(value, prev.next) // the new node's next property will be prev's next value

    this.length++
  }

  removeHead() {
    // the current head's reference to the next node (this.head.next) is set as the current head
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    // make use of the previously defined removeHead() method
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next;
    this.length--;
  }

  print() {
    let output = ''
    let current = this.head // used to store and traverse through the nodes
    while (current) { // keeps the loop going until the node's next value is null
      output = `${output}${current.value} -> ` // records the node's value into "output"
      current = current.next // assigns the next node to get the value of
    }
    console.log(`${output}null`)
  }
}

let myLinkedList = new LinkedList();

myLinkedList.insertAtHead("C")
myLinkedList.insertAtHead("B")
myLinkedList.insertAtHead("A")
myLinkedList.insertAtHead("VALUE")

console.log("Outputting myLinkedList object:")
console.log("")
console.log(myLinkedList)
console.log("")

console.log("Outputting myLinkedList head:")
console.log("")
console.log(myLinkedList.head)
console.log("")

console.log("Getting the linked list's value at index 2:")
console.log("")
console.log(myLinkedList.getByIndex(2))
console.log("")

console.log("Insert node at index 1 and output myLinkedList object:")
console.log("")
myLinkedList.print();
myLinkedList.insertAtIndex(1, "inserted value");
myLinkedList.print();
console.log("")