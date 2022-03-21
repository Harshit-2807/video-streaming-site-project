function mySelectfunction() {
    getValue = document.getElementById("mySelect").value;
    if (getValue == "season4-s") {
        document.getElementById("season4-s").style.display = "block";
        document.getElementById("season4").style.display = "none";
        document.getElementById("season3").style.display = "none";
        document.getElementById("season2-s").style.display = "none";
        document.getElementById("season2").style.display = "none";
        document.getElementById("season1-s").style.display = "none";
        document.getElementById("season1").style.display = "none";
    }
    if (getValue == "season4") {
        document.getElementById("season4-s").style.display = "none";
        document.getElementById("season4").style.display = "block";
        document.getElementById("season3").style.display = "none";
        document.getElementById("season2-s").style.display = "none";
        document.getElementById("season2").style.display = "none";
        document.getElementById("season1-s").style.display = "none";
        document.getElementById("season1").style.display = "none";
    }
    if (getValue == "season3") {
        document.getElementById("season4-s").style.display = "none";
        document.getElementById("season4").style.display = "none";
        document.getElementById("season3").style.display = "block";
        document.getElementById("season2-s").style.display = "none";
        document.getElementById("season2").style.display = "none";
        document.getElementById("season1-s").style.display = "none";
        document.getElementById("season1").style.display = "none";
    }
    if (getValue == "season2-s") {
        document.getElementById("season4-s").style.display = "none";
        document.getElementById("season4").style.display = "none";
        document.getElementById("season3").style.display = "none";
        document.getElementById("season2-s").style.display = "block";
        document.getElementById("season2").style.display = "none";
        document.getElementById("season1-s").style.display = "none";
        document.getElementById("season1").style.display = "none";
    }
    if (getValue == "season2") {
        document.getElementById("season4-s").style.display = "none";
        document.getElementById("season4").style.display = "none";
        document.getElementById("season3").style.display = "none";
        document.getElementById("season2-s").style.display = "none";
        document.getElementById("season2").style.display = "block";
        document.getElementById("season1-s").style.display = "none";
        document.getElementById("season1").style.display = "none";
    }
    if (getValue == "season1-s") {
        document.getElementById("season4-s").style.display = "none";
        document.getElementById("season4").style.display = "none";
        document.getElementById("season3").style.display = "none";
        document.getElementById("season2-s").style.display = "none";
        document.getElementById("season2").style.display = "none";
        document.getElementById("season1-s").style.display = "block";
        document.getElementById("season1").style.display = "none";
    }
    if (getValue == "season1") {
        document.getElementById("season4-s").style.display = "none";
        document.getElementById("season4").style.display = "none";
        document.getElementById("season3").style.display = "none";
        document.getElementById("season2-s").style.display = "none";
        document.getElementById("season2").style.display = "none";
        document.getElementById("season1-s").style.display = "none";
        document.getElementById("season1").style.display = "block";
    }
}