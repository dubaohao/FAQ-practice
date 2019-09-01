// 希尔排序
// 时间复杂度         O（n^2)
// 稳定性             不稳定
// 空间复杂度         O(1)


function shellSort(arr){
    var len = arr.length;
    for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // https://www.cnblogs.com/onepixel/articles/7674659.html//
        // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
        for (var i = gap; i < len; i++) {
            var j = i;
            var current = arr[i];
            while (j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}

arr1=[5,6,9,8,4,2,3,6,5,155,33,664,0,456,999];
console.log(arr1)
console.log(shellSort(arr1));
