//翻转链表

function reverseList(head){
    var pre=null;
    while(true){
        next=head.next;
        head.next=pre;
        pre=head;
        if(next!==null){
            head=next;
        }else{
            return pre
        }
    }
}
