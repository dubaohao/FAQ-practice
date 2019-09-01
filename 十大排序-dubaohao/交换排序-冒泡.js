// 冒泡排序
// 时间复杂度         O（n^2)-O(n^2)
// 空间复杂度         O(1)
// 稳定性             稳定
//
// 从前往后，两两作对比，进行交换
// 进行n次全扫描遍历

function pao(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                var swap=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=swap;
            }
        }
    }
    return arr;
}

arr=[5,6,9,8,4,2,3,6,5,155,33,66,85,95,25,68,95,85,65,2,6,4,0,456,999]
console.log(pao(arr))
