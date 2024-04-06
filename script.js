function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
        document.getElementById("cookie-value").innerText = "Welcome again " + username;
    } else {
        username = prompt("Please enter your name to set the cookie:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
            document.getElementById("cookie-value").innerText = "Cookie set: " + username;
        } else {
            document.getElementById("cookie-value").innerText = "Cookie not set.";
        }
    }
}