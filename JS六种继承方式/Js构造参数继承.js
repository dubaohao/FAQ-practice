//六种继承方式之一：构造参数继承


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
console.log("子类继承的父类原型属性-实例1:",res.xing) //没有继承父类原型的属性，所以Per2修改原型属性，不会修改父类原型属性
console.log("子类继承的父类原型属性-实例2:",res1.xing) //只继承了父类构造函数的属性，没有继承父类原型的属性,
console.log("-----------------------")
console.log("Person.prototype:",Person.prototype)     //父类的原型
console.log("Per.prototype   :",Per.prototype)     //子类的原型
console.log("res.prototype   :",res.prototype)     //实例的原型
console.log("-----------------------")
console.log("res.sex:",res.sex)     //父类实例属性

// 重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
// 特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
// 　　　2、解决了原型链继承缺点1、2、3。
// 　　　3、可以继承多个构造函数属性（call多个）。
// 　　　4、在子实例中可向父实例传参。
// 缺点：1、只能继承父类构造函数的属性。
// 　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）
// 　　　3、每个新实例都有父类构造函数的副本，臃肿。


