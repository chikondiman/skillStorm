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