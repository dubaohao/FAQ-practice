// var http = require("http");

// var options = {
//     hostname: "localhost",
//     port: 8080,
//     path: "/user/select?id=1",
//     method: "GET",
// }
// var htmlData = ""
// var req = http.request(options, function(res) {
//     res.on("data", function(chunk) {
//         htmlData += chunk;
//         console.log(htmlData);
//     });
//     res.on("end", function() {
//         console.log("end");
//     });
// });
// req.end();