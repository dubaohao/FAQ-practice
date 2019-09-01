// 简单插入排序
// 时间复杂度         O（n^2)
// 稳定性             稳定
// 空间复杂度         O(nlog(n))

// 从左向右遍历，遍历到n的时候，n向前查找自己位置【n-1,n-2....0】

function insertSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                var swap=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=swap;
            }else{
                break;
            }
        }
    }
    return arr;
}

arr1=[5,6,9,8,4,2,3,6,5,155,33,664,0,456,999];
console.log(arr1)
console.log(insertSort(arr1));
