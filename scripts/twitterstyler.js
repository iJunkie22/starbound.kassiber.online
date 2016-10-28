// (C) DECEMBER 2014 ETHAN RANDALL

function init(){
        var virt_doc = document.getElementById("twitter-widget-0").contentDocument;
        var head_el = virt_doc.getElementsByTagName("head")[0];
        var head_el2 = virt_doc.head;
        var head_last_index = ((head_el2.children.length) - 1);
        var new_link = virt_doc.createElement("link");
        new_link.rel = "stylesheet";
        new_link.type = "text/css";
        new_link.href = "css/style.css";
        var last_el = head_el2.children[head_last_index];
        virt_doc.head.insertBefore(new_link, null);
      };
      
window.onload = function test() {
  console.log("hi");
  var blah = window.setTimeout(init, 300);  
  };