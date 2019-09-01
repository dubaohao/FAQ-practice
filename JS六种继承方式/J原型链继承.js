//六种继承方式之一：原型链继承

// 父类-实例
function Person(){
    this.name="dubaohao";  //构造函数属性
    this.nametitle="xiaobao";
    this.age=function(){
        console.log("Person name:",this.name);
    };
    sex:"男"; //实例属性
}
Person.prototype.xing="du";  //原型属性

// 子类-实例
function Per(){
    this.name1="name1";
}
Per.prototype=new Person();

// function Per2(){
//     this.name1="name1";
// }
// Per2.prototype=new Person();
//
// Per2.prototype.xing="第二个子类实例修改了原型属性"

var res=new Per();
var res1=new Per();


console.log("实例Person:",new Person())
console.log("实例Per   :",new Per())
console.log("实例res   :",res)
console.log("-----------------------")
console.log("父类的原型属性-res.xing   :",res.xing)
console.log("父类的构造函数属性res.name:",res.name)
console.log("父类的实例属性res.sex     :",res.sex)
console.log("-----------------------")
console.log("子类的原型属性-res.xing   :",Per.xing)
// res1.prototype._proto_.xing="实例2 res1修改原型属性";
console.log("子类继承的父类原型属性-实例1 res.xing :",res.xing) //子类的新属性覆盖父类属性
console.log("子类继承的父类原型属性-实例2 res1.xing:",res1.xing) //第二个继承子类的新属性 也被改变了
console.log("-----------------------")
console.log("Person.prototype:",Person.prototype)     //父类的原型
console.log("Per.prototype   :",Per.prototype)     //子类的原型
console.log("res.prototype   :",res.prototype)     //实例的原型
console.log("-----------------------")
console.log("res.sex:",res.sex)     //父类实例属性

// Person是父类; Per() Per2()是子类;res是实例
// 重点：让新实例的原型等于父类实例
// 特点：实现可继承的属性有：实例的构造参数，父类构造参数的属性,父类原型的属性【新实例不会继承父类原型的属性】
// 确点：1.新实例无法向父类传参
// 2.继承单一
// 3.所有实例都会共享父类的属性【原型上的属性共享，一个实例改变了原型属性，另一个实例的原型属性也会被修改


