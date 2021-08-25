class Node {
    int data;
    Node next;
    Node prev;
    Node (int data) {
        this.data = data;
    }
}


int countNodes(Node head){

    int count = 1;
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


//STACK Add from top remove from top. pop means delete

//OOP

//Poly Morphism: performing functions in different ways
//Inheritance: properties come from pararents to chilren