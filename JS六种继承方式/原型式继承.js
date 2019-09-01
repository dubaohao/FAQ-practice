//六种继承方式之一：原型式继承

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
function Sub(){
    function F(){};
    F.prototype=new Person();
    return new F();
}
var sub=new Person();
var res = new Sub(sub)

var sub1=new Person();
var res1 = new Sub(sub1)
res1.xing="第二个子类实例修改了原型属性"

console.log("实例Person:",new Person())
// console.log("实例Per   :",new Per())
console.log("实例res   :",res)
console.log("-----------------------")
console.log("父类的原型属性-res.xing   :",res.xing)
console.log("父类的构造函数属性res.name:",res.name)
console.log("父类的实例属性res.sex     :",res.sex)
console.log("-----------------------")
console.log("子类继承的父类原型属性-实例1 res.xing :",res.xing) //Per2修改原型属性，不会修改父类原型属性
console.log("子类继承的父类原型属性-实例2 res1.xing:",res1.xing) //
console.log("-----------------------")
console.log("Person.prototype:",Person.prototype)     //父类的原型
// console.log("Per.prototype   :",Per.prototype)     //子类的原型
// console.log("Per2.prototype  :",Per2.prototype)     //子类的原型
console.log("res.prototype   :",res.prototype)     //实例的原型
console.log("-----------------------")
console.log("res.sex:",res.sex)     //父类实例属性

// 重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。
//
// 　　　　特点：类似于复制一个对象，用函数来包装。
//
// 　　　　缺点：1、所有实例都会继承原型上的属性。
//
// 　　　　　　　2、无法实现复用。（新实例属性都是后面添加的）

　　
