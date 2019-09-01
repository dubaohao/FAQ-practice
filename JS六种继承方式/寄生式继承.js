//六种继承方式之一：寄生式继承

function Person(){
    this.name="dubaohao";
    this.nametitle="xiaobao";
    this.age=function(){
        console.log("Person name:",this.name);
    };
    sex:"男";
}
Person.prototype.xing="du";  //原型属性


// 容器 --原型链继承
function content(obj){
    function F(){};
    F.prototype=obj;//继承了传入的参数
    return new F();
}
//给原型链继承再套一个壳子
function Subcontent(obj){
    var sub=content(obj);
    sub.name="new name";
    return sub;
}

var res0=new Person();
var res=new Subcontent(res0)

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

// 重点：就是给原型式继承外面套了个壳子。
//
// 　　　　优点：没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。
//
// 　　　　缺点：没用到原型，无法复用。
