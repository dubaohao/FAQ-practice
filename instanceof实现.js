
function instnaceof(left,right){
    var prototype=right.prototype;
    var left=left._proto_;
    while(ture){
        if(left==null) return false;
        if(left===prototype) return ture;
        left=left._proto_
    }
}
