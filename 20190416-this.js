//1、函数有所属对象，则指向所属对象
var myObject={value:100};
myObject.getValue=function(){
        console.log(this.value);
        console.log(this);
        return this.value;
}     
console.log(myObject.getValue());

//2、函数没有所属对象时，就指向全局对象（window或global）
var myObject={value:100};
myObject.getValue=function(){
        var foo=function(){
                console.log(this.value);
                console.log(this);
            }        
    foo();    
    return this.value;
}
console.log(myObject.getValue());

//setTimeout和setInterval方法也是属于全局对象的
var myObject={value:100};
myObject.getValue=function(){
    // let self=this;//因为用了箭头函数，所以这句不需要了
    setTimeout(()=>{
        console.log("1",this.value);
        console.log("2",this);
        },0);
    return "3"+this.value;
}
console.log(myObject.getValue());  //结果如上

//3、使用构造器new一个对象时，this就指向新对象：
var oneObject = function(){
    this.value=100;
};
var myObj = new oneObject();
console.log(myObj.value); //100


//4.apply，call，bind改变了this的指向
var myObject={ value:100}
var foo=function(){
    console.log(this); 
    console.log(this.value); 
    console.log("...............");
}
    foo();
    foo.apply(myObject);
    foo.call(myObject);
    var newFoo=foo.bind(myObject);
    newFoo();
