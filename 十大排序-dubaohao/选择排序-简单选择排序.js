// 简单插入排序
// 时间复杂度         O（n^2)
// 稳定性             不稳定
// 空间复杂度         O(n^2)

function selectsort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
            if(arr[j]<arr[i]){
                var swap=arr[j];
                arr[j]=arr[i];
                arr[i]=swap;
            }
        }
    }
    return arr;
}
arr1=[5,6,9,8,4,2,3,6,5,155,33,664,0,456,999];
console.log(arr1)
console.log(selectsort(arr1));
