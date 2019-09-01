
//方法1.不能使用，弃用
// var fs=new ActiveXObject("Scripting.FileSystemObject");
// var fs1=fs.createtextfile("C:/Users/dubaohao/Desktop/1.txt'",true);
// console.log("dubaohao")
// f1.write("dubaohao");
// f1.writeline("dubaohao");

//方法2.txt文件
console.log("文本文件")
// 加载文件操作模块：fs模块
var fs = require('fs');
var msg = "Hello World!您好 世界！";

// 调用fs.writeFile()进行文件写入,这是一个异步操作
fs.writeFile('C:/Users/dubaohao/Desktop/1.txt', msg, 'utf8', function (err) {
  // 在这个回调函数中只有一个参数，那就是err
  // 如果 err === null，表示文件写入成功，没有错误
  // 如果err不等于null，就表示文件写入失败了
  if (err) {
    console.log('文件写入错误，错误是：'+ err);
  } else {
    console.log('写入成功');
  }
});

//读出文件
// fs = require('fs');
// 调用fs.readFile()进行文件读取,这是一个异步操作
fs.readFile('C:/Users/dubaohao/Desktop/1.txt', function(err, data) {
    if(err) throw err;
    // data默认是一个Buffer对象，里面保存的就是一个一个的字节，(理解为字节数组)
    // 把Buffer对象转换为字符串，调用toString()方法
  //   console.log("读出的数据额为1:",data);
    console.log("读出的数据额为:",data.toString('utf8'));
    // 调用Buffer对象的toString()方法的时候，不传 utf8 参数，默认也是 utf8
  //   console.log("读出的数据额为3:",data.toString());
  });







//方法3.json文件
console.log("json文件")
var fs=require('fs');
var msg={"1":"dubaohao","2":"xieruleyigewenjian"}
var filename = "C:\\Users\\dubaohao\\Desktop\\1.json";
 fs.writeFileSync(filename, JSON.stringify(msg));

 var result=JSON.parse(fs.readFileSync(filename));
 console.log("读出json文件：",result);
 //对象嵌套
//  var fs = require('fs');
 
//     var filestr = JSON.parse(fs.readFileSync(filePath));
//     for (var item in filestr) {
//       var inter=filestr[item];
//        for(var m in inter)
//        {
//         inter[m]=parseFloat(inter[m]);
 
//        }
//       fs.writeFileSync(newfilepath, JSON.stringify(filestr));
//     }
