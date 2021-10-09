function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (user === "test" && password === "test") {
        let actualURL = window.location.href;
        newURL = actualURL.replace("login.html?", "index.html");
        window.location.href = newURL;
    }

}