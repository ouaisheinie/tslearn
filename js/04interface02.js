"use strict";
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("成功");
            if (config.dataType === "json") {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                return xhr.responseText;
            }
        }
    };
}
ajax({
    type: "get",
    url: "http://a.itying.com/api/productlist",
    data: "name=zhangsan",
    dataType: "json"
});
