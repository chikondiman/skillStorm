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



//OOP
-Object
real world entity
have properties and tasks
-class 
Abstraction
abstraction is the process of hiding implementation details from users to make it more user friendly
encapsulation is binding variables and data types together but is also used to hide sensative information from users or to promoted heightened security in the case of a breach
inheritance inhertance is one class working with another to distrubute properties and functions. typically you'll have a parent class that passes on properties to child class
polymorphism is a function that can be executed in multiple ways for example a function called run() could be excuted run slowly, quickly, leisurely and the outcome could be diffenrent 

Function overloading
In some programming languages, function overloading or method overloading is the ability to create multiple functions of the same name with different implementations. Wikipedia
//Poly Morphism: performing functions in different ways

only certain parts are shwon to user, hiding implementation details
//Encapsulation: binding variables and methods together

//SQL & Tables

//Tuples is a single role of a table
//Table constraints to ensure the parameters of the table
//Check, foreign key, index, unit, not null, primary key


