import React from "react";

let scrollFunction = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("myTopNav").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("myTopNav").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}

export default {scrollFunction};