//  Kill right mouse

var message = "NoRightClicking";

function defeatIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function defeatNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = defeatNS;
}
else {
    document.onmouseup = defeatNS;
    document.oncontextmenu = defeatIE;
}

document.oncontextmenu = new Function("return false")

// Kill Ctrl + U and F12

checkCtrl = false('*').keydown(function (e) {
    if (e.keyCode == '17') {
        checkCtrl = false
    }
}).keyup(function (ev) {
    if (ev.keyCode == '17') {
        checkCtrl = false
    }
}).keydown(function (event) {
    if (checkCtrl) {
        if (event.keyCode == '85') {
            return false;
        }
    }
})

