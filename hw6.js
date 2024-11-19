
function roundNumber() {

    let re = new RegExp("^[0-9]{1,11}\.[0-9]{4,}$");
    let errMsg = successMsg = "";
    let num = document.getElementById("number").value.trim();


    if ( isNaN(num) || (!(re.test(num))) ) {
        errMsg = "Invalid input - type a number with at least 4 decimals";
    } else {
        num = parseFloat(num);

        successMsg = 
            "You typed number: " + num +
            "<br>Rounded to the nearest integer = " + 
                Math.round(num) +
            "<br>Square root rounded to the nearest integer = " + 
                Math.round(Math.sqrt(num)) +
            "<br>Rounded to the nearest 10th position = " + 
                num.toFixed(1) +
            "<br>Rounded to the nearest 100th position =  " + 
                num.toFixed(2) +
            "<br>Rounded to the nearest 1000th position =  " + 
                num.toFixed(3);
    }

    document.getElementById("successMsg").innerHTML = successMsg;
    document.getElementById("errMsg").innerHTML = errMsg;
} //  function roundNumber()


function charSearch() {
    let count = 0;
    let inputString = document.getElementById("urInput").value.toLowerCase();
    let char = document.getElementById("char").value.charAt(0).toLowerCase(); 
    /*
    let re = new RegExp(char, "gi")
    let matchList = [];
    let winText = errMsg = successMsg = "";
    
    matchList = urInput.match(re); 
     */

    if (inputString == "" || char == "" ) {
        errMsg = "Both fields REQUIRE entries. Pleaes enter your inputs"
        document.getElementById("errMsg").innerHTML = errMsg;
        document.getElementById("successMsg").innerHTML = "";
        return; 
    }
    
    for (let i=0; i < inputString.length; i++) {
        if (inputString.charAt(i) == char) 
            count++; 
    }
    
   //  if (matchList != null) {

    if (count > 0) {
        successMsg = count + " occurance(s) of '" + char + "' found"
        document.getElementById("successMsg").innerHTML = successMsg;
        document.getElementById("errMsg").innerHTML = ""; 
    } else {

        // assemble HTML to pump into new window:

        winText = "<html>\n";
        winText += "<head>\n";
        winText += "<title>SEARCH NOT FOUND</title>\n";
        winText += "</head>\n";
        winText += "<body>\n";
        winText += "<div align='center'>\n";
        winText += "<h4>Search character " + char + " not found in the text you typed</h4>\n";
        winText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
        winText += "</div>\n";
        winText += "</body>\n";
        winText += "</html>";

        // open window on the upper left of the screen

        let errWindow = window.open("", "new_window", "top=220,left=50,width=300,height=100");
 
        errWindow.focus();

        // pump html into to this new opened window

        errWindow.document.write(winText);

        // tell browser that errWindow document is finished loading

        errWindow.document.close();

        // Put or clear msg in message area of original page

        document.getElementById("successMsg").innerHTML = "";
        document.getElementById("errMsg").innerHTML = "Please see popup windown"; 
    
    }
} // function charSearch()
    
function checkPhone() {
    let phone = document.getElementById("phone").value;
    let phoneRegex = /^\(\d{3}\)\s?\d{3}-\d{4}$/; 
    let errMsg = successMsg = "";

    if (phoneRegex.test(phone)) {
        successMsg = "Thank you for submitting your phone number in<br>the requested format.<br>" + 
                    "<br>One of our agents will be in contact soon."
        document.getElementById("successMsg").innerHTML = successMsg;
        document.getElementById("errMsg").innerHTML = ""; 
    } else {
        errMsg = "Please enter the phone number exactly in <br>(999)999-9999 or (999) 999-9999 format<br>" + 
                "where 9 represents a number."
        document.getElementById("errMsg").innerHTML = errMsg;
        document.getElementById("successMsg").innerHTML = "";
    }

} // function checkPhone()



// NOT USED 
function res() {    
    document.getElementById("errMsg").innerHTML="";
    document.getElementById("number").focus();
}

