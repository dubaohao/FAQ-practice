function TreeNode(){
    this.val=null;
    this.left=null;
    this.right=null;
}
function create(num){
    if(num<=1){return null;}
    var root=new TreeNode();
        root.val=Math.floor(Math.random()*10);
        root.left=create(Math.floor(num/2))
        root.right=create(Math.floor(num/2))
    return root;
}
var tree=create(20);
//find path sum=20;
global.result=[];
function findPath(tree,res){
    if(tree==null){return null}
    res.push(tree.val)
    var mid=res.reduce(
        (resu,item)=>resu+=item
    );
    // if(mid!==15){
        console.log(res,"sum=",mid)
    // }else{
    //     result.push([...res])
        // console.log("这才是和为15的路径：",res)
    // }
    if(tree.left==null&&tree.right==null&&mid==15){result.push([...res])}

    if(tree.left){
        findPath(tree.left,res);
    }
    if(tree.right){
        findPath(tree.right,res);
    }
    res.splice(res.lastIndexOf(tree.val),1);
    return res;
}
//执行遍历每一条路径
findPath(tree,[],[])

if(result.length==0){
    console.log("不存在这么一条路径")
}else{
    console.log("存在",result.length,"条路径：")
    console.log("result:",result)
}

