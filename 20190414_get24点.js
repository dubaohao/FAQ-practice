function get24(a,b,c,d){
    //组合问题
    //两两组合，组合结果再次组合看能不能求出24
    //所有组合 12和34 13和24 14和23 只有3个 穷举一下所有的加减乘除结果【数字代表是第几个】

    // 举例得到的12和34的组合
    // 因为顺序为： 加 减 反减 乘 除 反除
    // 1、2先组合 3、4再组合 最后组合12和34 一共可以得到216中组合
    // 分为6段，一段36个，每一段分别是1、2的 加 减 反减 乘 除 反除
    // 36再次分段，分6段，一段6个，每一段分别是分别是1、2的 加 减 反减 乘 除 反除
    // 6再次分段，分6段，一段一个，每一段代表12和34的 加 减 反减 乘 除 反除


    //12和34组合
    var res1=[];
    var arr11=all(a,b);
    var arr12=all(c,d);
    for(var i=0;i<arr11.length;i++){
        for(var j=0;j<arr12.length;j++){
            var y1=all(arr11[i],arr12[j])
            // res1.push(...y1)
            y1.map((item,index)=>res1.push(y1[index]))
        }
    }

    //13和24组合
    var res2=[];
    var arr21=all(a,c);
    var arr22=all(b,d);
    for(var i=0;i<arr21.length;i++){
        for(var j=0;j<arr22.length;j++){
            var y2=all(arr21[i],arr22[j])
            // res2.push(...y2)
            y2.map((item,index)=>res2.push(y2[index]))
        }
    }

    //14和23组合
    var res3=[];
    var arr31=all(a,d);
    var arr32=all(b,c);
    for(var i=0;i<arr31.length;i++){
        for(var j=0;j<arr32.length;j++){
            var y3=all(arr31[i],arr32[j])
            // res3.push(...y3)
            y3.map((item,index)=>res3.push(y3[index]))
        }
    }
    // console.log("res1",res1.join(","))
    // console.log("res2",res2)
    // console.log("res3",res3)
    var result1=res1.indexOf(24);
    // console.log("result1",result1)
    var result2=res2.indexOf(24);
    // console.log("result2",result2)
    var result3=res3.indexOf(24);
    // console.log("result3",result3)
    if(result1!==-1||result2!==-1||result3!==-1){
        //0代表a+b；1代表a-b；2代表b-a；3代表a*b；4代表a/b；5代表b/a；
        if(result1!==-1){
            var x=Math.floor(result1/36);           //代表选取的哪一个ab的组合操作
            var y=result1%36;
            var z=Math.floor(y/6);                  //代表选取的哪一个bc的组合操作
            var w=y%6;                                  //代表选取的哪一个ab和cd的组合组合
            // console.log("result1:",result1,"res1",x,z,w)
            return concatSign(a,b,c,d,x,w,z)
        }else if(result2!==-1){                         //同理，可得！
            var x=Math.floor(result2/36);
            var y=result2%36;
            var z=Math.floor(y/6);
            var w=y%6;
            // console.log("result2:",result2,"res2",x,z,w)
            return concatSign(a,c,b,d,x,w,z)
        }else if(result3!==-1){                                           //同理，可得！
            var x=Math.floor(result3/36);
            var y=result3%36;
            var z=Math.floor(y/6);
            var w=y%6;
            // console.log("result3:",result3,"res3",x,z,w)
            return concatSign(a,d,b,c,x,w,z)
        }
    }
    return null;
}
function all(x,y){
    var res=[]
    //运算顺序，后面十分重要
    res.push(x+y,x-y,y-x,x*y,x/y,y/x);
    return res;
}
function concatSign(a,b,c,d,x,y,z){
    var string=['(',a,'x',b,')','y','(',c,'z',d,')'];
    switch(y){
        case 0:string[5]='+';break;
        case 1:string[5]='-';break;
        case 2:string[5]='-';
                var kk=string[1];string[1]=string[7];string[7]=kk;
                var kk=string[3];string[3]=string[9];string[9]=kk;
                break;
        case 3:string[5]='*';break;
        case 4:string[5]='/';break;
        case 5:string[5]='/';
                var kk=string[1];string[1]=string[7];string[7]=kk;
                var kk=string[3];string[3]=string[9];string[9]=kk;
                break;
    }
    switch(x){
        case 0:string[2]='+';break;
        case 1:string[2]='-';break;
        case 2:string[2]='-';var kk=string[1];string[1]=string[3];string[3]=kk;break;
        case 3:string[2]='*';break;
        case 4:string[2]='/';break;
        case 5:string[2]='/';var kk=string[1];string[1]=string[3];string[3]=kk;break;
    }
    switch(z){
        case 0:string[8]='+';break;
        case 1:string[8]='-';break;
        case 2:string[8]='-';var kk=string[7];string[7]=string[9];string[9]=kk;break;
        case 3:string[8]='*';break;
        case 4:string[8]='/';break;
        case 5:string[8]='/';var kk=string[7];string[7]=string[9];string[9]=kk;break;
    }
    if(y<=2&&z>2){}
    return string.join("");
}
// console.log("24点：", get24(8,1,4,2))

var fff = function(...numbers) {
    var number=arguments;
    console.log("24点：", get24(number[0], number[1], number[2], number[3]))
}
fff(7,4,2,2)