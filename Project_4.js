function myFunction() {
    var min = document.getElementById("m1").value;
    var max = document.getElementById("m2").value;
    var mul = document.getElementById("m3").value;
    min = parseFloat(min);
    max = parseFloat(max);
    mul = parseFloat(mul);

    if (!(min < max)) {
        document.getElementById('m1').style.borderColor = "red";
    } else {
        document.getElementById('m1').style.borderColor = "";
    }
    if (!(max > mul)) {
        document.getElementById('m2').style.borderColor = "red";
    } else {
        document.getElementById('m2').style.borderColor = "";
    }
    if (!(mul <= min)) {
        document.getElementById('m3').style.borderColor = "red";
    } else {
        document.getElementById('m3').style.borderColor = "";
    }
    if (!(max % min == 0)) {
        document.getElementById('m1').style.borderColor = "red";
    } else {
        document.getElementById('m1').style.borderColor = "";
    }
    if (!(max % mul == 0)) {
        document.getElementById('m3').style.borderColor = "red";
    } else {
        document.getElementById('m3').style.borderColor = "";
    }
}