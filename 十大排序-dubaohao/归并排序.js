// 归并排序
// 时间复杂度         O（nlog(n))
// 稳定性             稳定
// 空间复杂度         O(n)
//两种方法
// 第一种
// 第二种 【比较容易理解思路，写起来简单】
//
// 1,2,3,4,5,6,7,8
// 1,2,3,4     5,6,7,8
// 1,2   3,4   5,6   7,8
// 第一种
function guibingSort1(arr,left,right){
    if(left>=right) return arr;
    var mid=Math.floor((left+right)/2);

    guibingSort1(arr,left,mid);
    guibingSort1(arr,mid+1,right);

    var help=[];
    var i=left;
    var j=mid+1;
    while(i<=mid&&j<=right){
        if(arr[i]<=arr[j]){
            help.push(arr[i]);
            i++
        }else{
            help.push(arr[j]);
            j++
        }
    }
    while(i<=mid){
        help.push(arr[i])
        i++;
    }
    while(j<=right){
        help.push(arr[j])
        j++;
    }
    var num=0;
    for(var x=left;x<=right;x++){
        arr[x]=help[num++]
    }
    return arr;
}


// 第二种
function guibingSort2(arr){
    if(arr.length<=1) return arr;
    var mid=Math.floor(arr.length/2);
    var left=arr.slice(0,mid);
    var right=arr.slice(mid);
    return merge(guibingSort2(left),guibingSort2(right));
}
function merge(left,right){
    var len1=left.length;
    var len2=right.length;
    var i=0;j=0,res=[];
    while(i<len1&&j<len2){
        if(left[i]<=right[j]){
            res.push(left[i])
            i++;
        } else if(left[i]>right[j]){
            res.push(right[j])
            j++;
        }
    }
    while(i<len1){
        res.push(left[i])
        i++;
    }
    while(j<len2){
        res.push(right[j])
        j++;
    }
    return res;
}

arr1=[5,6,9,8,4,2,3,6,5,155,33,664,0,456,999];
console.log(arr1)
console.log(guibingSort1(arr1,0,arr1.length-1))
// console.log(guibingSort2(arr1));

