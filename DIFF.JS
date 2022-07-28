class LinkNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}
var MyLinkedList = function (val, next) {
    this.size = 0
    this.tail = null
    this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
    if(index < 0 || index >= this._size) return null;
    // 创建虚拟头节点
    let cur = new LinkNode(0, this._head);
    // 0 -> head
    while(index-- >= 0) {
        cur = cur.next;
    }
    return cur;
};
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) return -1;
    // 获取当前节点
    return this.getNode(index).val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new LinkNode(val, this.head);
    this.head = node;
    this.size++;
    if (!this.tail) {
        this.tail = node;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const tail = new LinkNode(val, null)
    this.size++
    if (this.tail) {
        this.tail.next = tail
    } else {
        this.tail = tail
        this.head.next = this.tail
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) return;
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    if (index == this.size) {
        this.addAtTail(val);
        return;
    }
    const node = this.getNode(index - 1);
    node.next = new LinkNode(val, node.next);
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index > this.size || index <= 0) return;
    if (index == this.size) {
        this.addAtTail(val);
        return;
    }
    if (index == 0) {
        this.head = this.head.next
        if (index == this.size - 1) {
            this.tail = this.head
        }
        this.size--
        return
    }
    const node = this.getNode(index - 1)
    node.next = node.next.next

    if (index == this.size - 1) {
        this.tail = node
    }
    this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */