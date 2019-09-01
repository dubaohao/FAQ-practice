// function test (){}

// var lineCount=0;
// while(line=readline()){
//     lines=line.split(' ');
//     var a=lines[0]
//     var b=lines[1]
//
//
//     lineCount++;
// }
// let a="fsafdf asdfsa";
// let b=a.split('');
// console.log(a)
// console.log(b)
// b=8;
// b=b.toString(2).toString()
// console.log(b)
function dubaohao(a,b){
    var num=0;

    if(a==b){return 0;}
    if(a>0&&b>0&&a>b){return b-a;}
    if(a<0&&b<0&&a<b){return b-a;}
    if(a<0&&b>0){
        num=-a+1;
        b=b.toString(2).toString();
        var flag=[];
        for(var i=0;i<b.length;i++){
            if(b[i]==1){num++;}
        }
        return num;
    }
    if(a>0&&b<0){
        num=a+1;
        b=-b;
        b=b.toString(2).toString();
        var flag=[];
        for(var i=0;i<b.length;i++){
            if(b[i]==1){num++;}
        }
        return num;
    }
    if( (a>0&&b>0&&a<b) || (a<0&&b<0&&a>b)){
        cha=Math.abs(b-a).toString(2).split("");
        // console.log(cha)
        var cha1num=[];
        for(var i=0;i<cha.length;i++){
            if (cha[i]==1){cha1num++}
        }
        // console.log(cha1num)
        // return (b-a)>Math.abs(b-k1)+k1/a*0.5 ? Math.abs(b-k1)+k1/a*0.5 : b-a ;
        return (b-a)>cha1num ? cha1num : b-a ;

    }
}
console.log(dubaohao(3,11))