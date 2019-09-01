//六种继承方式之一：组合寄生式继承

function Person(){
    this.name="dubaohao";
    this.nametitle="xiaobao";
    this.age=function(){
        console.log("Person name:",this.name);
    };
    sex:"男";
}
Person.prototype.xing="du";  //原型属性

// 容器
function content(obj){
    function F(){};
    F.prototype=obj;
    return new F();
}
// content就是F实例的一种表示法
var con=content(Person.prototype)
// con实例（F实例）的原型继承了父类函数的原型
// 上述更像是原型链继承，只不过只继承了原型属性

function Sub(){
    Person.call(this) //这个继承了父类的构造函数属性
}//解决了组合式两次调用构造函数属性的特点

// 重点
Sub.prototype=con; //继承了con实例
con.constructor=Sub; //一定要修复实例
var res=new Sub();  //Sub的实例就继承了构造函数属性，父类的实例，con的函数属性

console.log("实例Person:",new Person())
// console.log("实例Per   :",new Per())
console.log("实例res   :",res)
console.log("-----------------------")
console.log("父类的原型属性-res.xing   :",res.xing)
console.log("父类的构造函数属性res.name:",res.name)
console.log("父类的实例属性res.sex     :",res.sex)
console.log("-----------------------")
console.log("子类继承的父类原型属性-实例1 res.xing :",res.xing) //Per2修改原型属性，不会修改父类原型属性
// console.log("子类继承的父类原型属性-实例2 res1.xing:",res1.xing) //
console.log("-----------------------")
console.log("Person.prototype:",Person.prototype)     //父类的原型
// console.log("Per.prototype   :",Per.prototype)     //子类的原型
// console.log("Per2.prototype  :",Per2.prototype)     //子类的原型
console.log("res.prototype   :",res.prototype)     //实例的原型
console.log("-----------------------")
console.log("res.sex:",res.sex)     //父类实例属性


// 寄生：在函数内返回对象然后调用
//
// 组合：1、函数的原型等于另一个实例。2、在函数中用apply或者call引入另一个构造函数，可传参
// 重点：修复了组合继承的问题
