class Node {
    int data;
    Node next;
    Node prev;
    Node (int data) {
        this.data = data;
    }
}


int countNodes(Node head){

    int count = 0;
    Node current = head;
    while (current.next != null) {
        current = current.next;
        count += 1;
    }

}

//STACKS AND QUEUES

public static class Queue   {

private static class Node {
    private int data;
    private Node next;
    private Node (int data {
        this.data = data;
    }
}

private Node head; // remove from head
private Node tail; // add things here 
public boolean isEmpty() {
    return head == null;
}
public int peek() {
    return head.data;
}
public void add(int data) {
    Node node = new Node(data);
    if (tail != null) {
        tail.next = node;
    }
}
public int remove () {}
}



Function overloading
In some programming languages, function overloading or method overloading is the ability to create multiple functions of the same name with different implementations. Wikipedia
//Poly Morphism: performing functions in different ways

only certain parts are shwon to user, hiding implementation details
//Encapsulation: binding variables and methods together

//SQL & Tables

//Tuples is a single role of a table
//Table constraints to ensure the parameters of the table
//Check, foreign key, index, unit, not null, primary key

// Array is a fixed size data structure while ArrayList 
// is not. One need not to mention the size of Arraylist 
// while creating its object. Even if we specify some initial
//  capacity, we can add more elements.


// a linked list is a linear collection of data elements 
// whose order is not given by their physical placement in memory.
//  Instead, each element points to the next. It is a data structure 
//  consisting of a collection of nodes which together represent a sequence.

// Big O Notation is a mathematical function used in computer science to 
// describe an algorithm’s complexity. It is usually a measure of the runtime 
// required for an algorithm’s execution.