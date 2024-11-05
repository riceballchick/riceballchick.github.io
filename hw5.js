
function validate() {

    //let name = document.getElementById("name").value;
    let name = document.myForm.name.value.trim();
    let ages = document.myForm.ages; 
    let browsers = document.myForm.browsers;
    let movie = document.myForm.movie; 


    let ageChecked = false;
    let browserChecked = false; 
    let movieSelected = false; 
    // let ageValue = "";

    let errMsg = "";
    let successMsg = "Thanks, your data was submitted!";


    if (name == "" || name == null) {
        errMsg += "Error!  Please enter your full name.<br>"
    }

    // Validate one of the age range raido button has checked. If not, 
    // set error message
    for (let i = 0; i < ages.length; i++) {

        if (ages[i].checked) {
            ageChecked = true; 
            // ageValue = ages[i].value; 
            break; 
        }
    }
    
    if (!ageChecked) {
        errMsg += "Error! Please check an age rage.<br>";
    }

    // Validate at least one browser checkbox option has checked. If not,
    // set error message
    for (let j = 0; j < browsers.length; j++) {

        if (browsers[j].checked) {
            browserChecked = true;
            break;
        }
    }

    if (!browserChecked) {
        errMsg += "Error! Please select at least a browser you have used.<br>"
    }
/*
document.write("move.selectedIndex = ");
document.write(movie.selectedIndex);
document.write("<br>");
*/
    // Validate a movie type from dropdown list has selected.  If not,
    // set error message
    if (movie.selectedIndex != 0) {
        movieSelected = true; 
    }

    if (!movieSelected) {
        errMsg += "Error! Please select a movie type.<br>";
    }

    // Print either error messages or success message in the result area
    if (errMsg != "") {
        document.getElementById("successMsg").innerHTML = "";
        document.getElementById("errMsg").innerHTML = errMsg;
    } else {
        document.getElementById("errMsg").innerHTML = "";
        document.getElementById("successMsg").innerHTML = successMsg;
    }

} // function validate()

function goNewPage(thisForm, id) {
    
    let selectedIndex = thisForm.destList.selectedIndex; 
    let new_page = thisForm.destList.options[selectedIndex].value;

    if ((selectedIndex == 0) && (id == "destList1")) {
        return;
    } else {
        window.open(new_page);
    }


} //function goNewPage()

function getCensus() {
    const censuses = [
        ["AL", "Alabama", "Montgomery", "4,903,185"],
        ["AK", "Alaska", "Juneau", "731,545"],
        ["AZ", "Arizona", "Phoenix", "7,278,717"],
        ["AR", "Arkansas", "Little Rock", "3,017,825"],
        ["CA", "California", "Sacramento", "39,512,223"],
        ["CO", "Colorado", "Denver", "5,758,736"]
    ];

    let name = document.myForm.name.value.trim().toUpperCase();
    let errMsg = "";
    let successMsg = "Thanks fo your inquiry, here is the information you requested:<br><br>";
    let found = false; 

    if (name == "" || name == null) {
        errMsg += "Error!  Please enter the Full Name or Abbreviation of the state.<br>"
    } else {

        for (let i = 0; i < censuses.length; i++) {
            let state_abbr = censuses[i][0];
            let state_name = censuses[i][1];
            if ((state_abbr == name) || (state_name.toUpperCase() == name)) {
                successMsg += "State Abbreviation = " + state_abbr + "<br>" +
                    "State Name = " + state_name + "<br>" +  
                    "Capital = " + censuses[i][2] + "<br>" + 
                    "Population = " + censuses[i][3] + "<br>"; 
                found = true; 
                break;
            } // if 
        } // for

        if (!found) {
            errMsg += "Sorry, we do not have info about this state! We only have info about " +
                        censuses[0][1] + ", " + censuses[1][1] + ", " + censuses[2][1] + ", " +
                        censuses[3][1] + ", " + censuses[4][1] + ", " + censuses[5][1] + ".<br?";
        }
    } // if...else


    // Print either error messages or success message in the result area
    if (errMsg != "") {
        document.getElementById("successMsg").innerHTML = "";
        document.getElementById("errMsg").innerHTML = errMsg;
    } else {
        document.getElementById("errMsg").innerHTML = "";
        document.getElementById("successMsg").innerHTML = successMsg;
    }

}