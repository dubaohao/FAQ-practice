function get(url){
    return new Promise((resolve,reject)=>{
        var Xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXobject('Microsoft.XMLHTTP');
        function checkTimeout(){
            if(Xhr.readyState!==4){
                aborted=true;
                Xhr.abort();
            }
        }
        setTimeout(checkTimeout(),5*1000);
        Xhr.onreadystatechange=function() {
            if (Xhr.readyState == 4) {
                if (Xhr.status == 200) {
                    try {
                        var response = Xhr.responseText;
                        resolve(response)
                    } catch (e) {
                        reject(e)
                    }
                } else {
                    reject(Xhr.status)
                }
            }
        }
        Xhr.open("GET",url,true);
        Xhr.send();
    })
}
get("http://www.baidu.com").then()
