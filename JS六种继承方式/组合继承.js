//六种继承方式之一：组合继承

function Person(){
    this.name="dubaohao";
    this.nametitle="xiaobao";
    this.age=function(){
        console.log("Person name:",this.name);
    };
    sex:"男";
}
Person.prototype.xing="du";  //原型属性


function Per(){
    Person.call(this,{name:"jar"})
    this.name1="name1";
}

Per.prototype=new Person();

function Per2(){
    Person.call(this,{name:"jar"})
    this.name1="name1";
}
Per2.prototype.xing="第二个子类实例修改了原型属性"

var res=new Per();
var res1=new Per2();

console.log("实例Person:",new Person())
console.log("实例Per   :",new Per())
console.log("实例res   :",res)
console.log("-----------------------")
console.log("父类的原型属性-res.xing   :",res.xing)
console.log("父类的构造函数属性res.name:",res.name)
console.log("父类的实例属性res.sex     :",res.sex)
console.log("-----------------------")
console.log("子类继承的父类原型属性-实例1:",res.xing) //Per2修改原型属性，不会修改父类原型属性
console.log("子类继承的父类原型属性-实例2:",res1.xing) //
console.log("-----------------------")
console.log("Person.prototype:",Person.prototype)     //父类的原型
console.log("Per.prototype   :",Per.prototype)     //子类的原型
console.log("Per2.prototype  :",Per2.prototype)     //子类的原型
console.log("res.prototype   :",res.prototype)     //实例的原型
console.log("-----------------------")
console.log("res.sex:",res.sex)     //父类实例属性

// 重点：结合了两种模式的优点，传参和复用
//
// 特点：1、可以继承父类原型上的属性，可以传参，可复用。
//
// 　　　2、每个新实例引入的构造函数属性是私有的。
//
// 　　　　缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。
