// 快速排序
// 时间复杂度        O(nlog(n)) - O(n^2)
// 空间复杂度         O(nlog(n))
// 稳定性             不稳点

// 两种方法
// 1.简单写法，但是浪费了一定的空间【思路更简单】
// 2.稍微复杂的写法

function quickSort1(arr){
    if(arr.length==0) return arr
    var left=[],right=[],base=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<=base){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort1(left).concat(arr[0],quickSort1(right));
}

function quickSort2(arr,i,j){
    if(i>=j){return arr;}
    var left=i;
    var right=j;
    var base=arr[left];
    while(left!=right){
        while(left<right && arr[right]>=base){right--;}
        while(left<right && arr[left]<=base){left++;}

        if(left<right){
            var swap=arr[left];
            arr[left]=arr[right];
            arr[right]=swap;
        }

    }
    // console.log(left,right,arr[left],arr[right])
    arr[i]=arr[left];
    arr[left]=base;

    quickSort2(arr,i,left-1);//左侧递归排序
    quickSort2(arr,left+1,j);//右侧递归排序
    return arr;
}

arr1=[5,6,9,8,4,2,3,6,5,155,33,664,0,456,999];
arr2=[9,8,7,4,5,6,3,2,1,11,25,69,85,26,97]
console.log(quickSort1(arr1))
console.log(quickSort2(arr1,0,arr1.length-1));
// console.log(arr2)
// console.log(quickSort2(arr2,0,arr2.length-1));
