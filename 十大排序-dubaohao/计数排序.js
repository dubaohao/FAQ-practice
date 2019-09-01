// 计数排序
// 时间复杂度         O（n+k)
// 稳定性             稳定
// 空间复杂度         O(n+k)
//两种方法
// 第一种
// 第二种 【比较容易理解思路，写起来简单】

function jishu(arr){
    var max=Math.max(...arr);
    var min=Math.min(...arr);
    var res=[];
    for(var i=min;i<=max;i++){
        if(!res[arr[i]]){
            res[arr[i]]=1;
        }else{
            res[arr[i]]++;
        }
    }
    var result=[];
    for(var i=0;i<res.length;i++){
        for(var j=0;j<res[i];j++){
            result.push(i)
        }
    }
    return result
}

arr1=[5,6,9,8,4,2,3,6,5,15,3,3,0,0,1,2];
console.log(arr1)
console.log(jishu(arr1))
