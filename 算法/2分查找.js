//arr:数组;key:查找的元素;start:开始索引;end:结束索引
function search2(arr,key,start,end){
    //首先判断当前起始索引是否大于结束索引,如果大于说明没有找到元素返回-1
    if(start > end) {
        return -1;
    }
    //如果手动调用不写start和end参数会当做第一次运行默认值
    //三元表达式:如果不写end参数则为undefined说明第一次调用所以结束索引为arr.length-1
    //如果是递归调用则使用传进来的参数end值
    var end= end===undefined ? arr.length-1 : end;
    //如果 || 前面的为真则赋值start,如果为假则赋值后面的0
    //所以end变量没有写var end = end || arr.length-1;这样如果递归调用时候传参end为0时会被转化为false,导致赋值给arr.length-1造成无限循环溢出;
    var start=start || 0;
    //取中间的索引
    var mid=parseInt((start+end)/2);
    if(key==arr[mid]){
        //如果找到则直接返回
        return mid;
    }else if(key<arr[mid]){
        //如果key小于则递归调用自身,将结束索引设置为中间索引-1
        return search2(arr,key,start,mid-1);
    }else{
        //如果key大于则递归调用自身,将起始索引设置为中间索引+1
        return search2(arr,key,mid+1,end);
    }
}
var arr = [0,13,21,35,46,52,68,77,89,94];
console.log(
search2(arr, 68) //6
);
console.log(
search2(arr, 1) //-1
);