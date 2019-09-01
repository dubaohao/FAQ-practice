function render(str){
    return function(obj){
        str.replace("${year}",obj,year)
        str.replace("{{month}}",obj,month)
        str.replace("day",obj,day)
        return str;
    }
}

str="今天是${year}年-{{month}}-day";
obj={
    year:2017,
    month:5,
    day:24
}
render(str)(obj)
