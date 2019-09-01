var input2=document.getElementById("input2")
var input4=document.getElementById("input4")
var menu1=document.getElementById("menu1")
var menu2=document.getElementById("menu2")
function show1() {
    var menu1=document.getElementById("menu1")
    if(!menu1.style.display||menu1.style.display=="none"){
        menucreate();
        menu1.style.display="block"
    }else{
        menu1.style.display="none"
    }
}

function show2() {
    var menu2=document.getElementById("menu2")
    if(!menu2.style.display||menu2.style.display=="none"){
        menu2.style.overflow="auto"
        menu2.style.display="block"
    }else{
        menu2.style.display="none"
    }
}

function menucreate(){
    var pro=["北京","天津","山东","河北"]
    var city=[["海淀","朝阳","昌平"],["天津1号","天津1号","天津1号"],["聊城","济南","青岛","东营","烟台","威海","临沂"],["河北1号","河北1号","河北1号"]]
    var menu1=document.getElementById("menu1")
    var len=menu1.children.length;
    for(let i=0;i<len;i++){
        menu1.removeChild(menu1.children[0])
    }
    console.log("menu1",menu1.children)
    for(let i=0;i<pro.length;i++){
        var li=document.createElement('li')
        li.textContent=pro[i]
        menu1.appendChild(li)
    }
    console.log(lis)
    var lis=document.getElementById('menu1').getElementsByTagName("li")
    console.log("lis",lis)

    for(let i=0;i<lis.length;i++){
        lis[i].addEventListener("click",function(){
            var input4=document.getElementById("input4");
            input4.value=pro[i];
            var menu2=document.getElementById("menu2");
            var len=menu2.children.length;
            for(let i=0;i<len;i++){
                menu2.removeChild(menu2.children[0])
            }
            for(let j=0;j<pro.length;j++){
                var li2=document.createElement('li')
                li2.textContent=city[i][j]
                li2.onclick=function(){
                    var input4=document.getElementById("input4");
                    input4.value=city[i][j];
                }
                menu2.appendChild(li2)
            }
        },true)
    }
}
