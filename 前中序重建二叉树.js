//前序
F = ["A", "B", "D", "E", "H", "I", "C", "F", "G"];
// 中序
L = ["D", "B", "H", "E", "I", "A", "F", "C", "G"];
// 后序
B = ["D", "H", "I", "E", "B", "F", "G", "C", "A"]

// 二叉树结构
function TreeNode(){
    this.val=null;
    this.left=null;
    this.right=null;
}
//前中序重建二叉树，利用后序验证
// @root 根节点
// @L 左边节点数组
// @R 右节点数组
function reCreate(F,L,res) {
    if(F.length==1){var res=new TreeNode();res.val=F[0];return res}

    var index=L.indexOf(F[0]);
    // console.log("F[0]",F[0],index)

    var F_left=F.slice(1,index+1);
    var L_left=L.slice(0,index);

    var F_right=F.slice(index+1);
    var L_right=L.slice(index+1);

    // console.log(F_left,L_left,F_right,L_right)

    var res=new TreeNode()
    res.val=L[index];
    if(F_left.length>0){
        res.left=reCreate(F_left,L_left,res.left);
    }
    if(F_right.length>0){
        res.right=reCreate(F_right,L_right,res.right);
    }
    return res;
}
// var root=new TreeNode();
var treeres=reCreate(F,L)
// console.log(treeres)

//后序遍历treeres
function backfind(root,result){
    // console.log(root.val)
    if(!root){ return result;}
    if(root.left){
        backfind(root.left,result)
    }
    if(root.right){
        backfind(root.right,result)
    }


    result.push(root.val)
    return result;
}
var backresult=backfind(treeres,[])
console.log("正确的后序遍历 B",B)
console.log("重建的树后序遍历",backresult)

