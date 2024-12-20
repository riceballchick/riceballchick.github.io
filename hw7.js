
function radioStyle(style) {

    let main = document.getElementById('main');

    main.className = style; 
    
}

function checkboxStyle(element) {

    let thisDiv = document.getElementById('fontStyleDiv');

    if (element.checked) {
        thisDiv.className = element.value; 
    } else {
        thisDiv.className = element.value + "_unset";
    }

}

function dropdownFontSize() {

    let thisDiv = document.getElementById("fontSizeDiv"); 
    let fontSize = document.getElementById("fontSize").value;

    thisDiv.className = fontSize; 

}

function createCookies() {

    let name = document.getElementById("name").value.trim();
    let username = document.getElementById("username").value.trim();
    let errMsg = ""; 

    if ((name) && (username)) {
        setCookie("name", name);
        setCookie("username", username); 
    } else {
        errMsg = "Both name and username are REQUIRED fields";
    }

    document.getElementById("errMsg").innerHTML = errMsg; 
}

function setCookie(cName, value) {
    document.cookie = cName + "=" + value + "; path=/"; 
}
  
function getCookie(cName) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {

        while (element.charAt(0) == ' ') {
            element = element.substring(1); 
        }

        if(element.indexOf(cName) == 0){
            result = element.substring(cName.length + 1)
        }
    })

    return result;
}
  
function checkCookie() {
    let name = getCookie("name");
    let username = getCookie("username");
    document.getElementById("errMsg").innerHTML = "";

    if ((name) && (username)) {
      console.log("name=" + name);
      console.log("username=" + username);
      document.getElementById("result").innerHTML = "Welcome back " + name + "!";
      document.getElementById("myform").style.display = "none";
    } else {
      document.getElementById("myform").style.display = "block";
    }
}