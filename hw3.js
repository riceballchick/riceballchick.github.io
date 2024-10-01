
const item1_$ = 20.99, item2_$ = 12.75, item3_$ = 9.95, item4_$ = 35.89;
let row1, row2, row3, row4, row5, row6; 

function popPrice() {

    row1 = document.getElementById("salesTable").rows[1].cells;
    row2 = document.getElementById("salesTable").rows[2].cells;
    row3 = document.getElementById("salesTable").rows[3].cells;
    row4 = document.getElementById("salesTable").rows[4].cells;
    row5 = document.getElementById("salesTable").rows[5].cells;
    row6 = document.getElementById("salesTable").rows[6].cells;

    row1[1].innerHTML = "$" + item1_$;
    row2[1].innerHTML = "$" + item2_$;
    row3[1].innerHTML = "$" + item3_$;
    row4[1].innerHTML = "$" + item4_$;

}

function calcSales() {

    let name = document.getElementById("seller").value;
    let i1 = parseInt(document.getElementById("item1").value);
    let i2 = parseInt(document.getElementById("item2").value);
    let i3 = parseInt(document.getElementById("item3").value);
    let i4 = parseInt(document.getElementById("item4").value);
    let total1 = 0, total2 = 0, total3 = 0, total4 = 0, totalamt = 0, total_earn = 0;
                

    if (isNaN(i1) || isNaN(i2) || isNaN(i3) || isNaN(i4) || 
        i1 < 0 || i2 < 0 || i3 < 0 || i4 < 0) {
        document.getElementById("errMsg").innerHTML = 
            '<br><strong style="color:red;">INVALID input! Please enter positive integers!</strong>';

        row1[2].innerHTML = "";
        row2[2].innerHTML = "";
        row3[2].innerHTML = "";
        row4[2].innerHTML = "";
                
        row1[3].innerHTML = "";
        row2[3].innerHTML = "";
        row3[3].innerHTML = "";
        row4[3].innerHTML = "";
        row5[1].innerHTML = "";
        row6[1].innerHTML = "";

    } else {

        document.getElementById("errMsg").innerHTML = "";
        total1 = item1_$ * i1;
        total2 = item2_$ * i2;
        total3 = item3_$ * i3;
        total4 = item4_$ * i4; 

        totalamt = total1 + total2 + total3 + total4;

        total_earn = (totalamt * .09) + 250;
                
        row1[2].innerHTML = i1;
        row2[2].innerHTML = i2;
        row3[2].innerHTML = i3;
        row4[2].innerHTML = i4;
                
        row1[3].innerHTML = total1.toFixed(2);
        row2[3].innerHTML = total2.toFixed(2);
        row3[3].innerHTML = total3.toFixed(2);
        row4[3].innerHTML = total4.toFixed(2);
        row5[1].innerHTML = totalamt.toFixed(2);
        row6[1].innerHTML = total_earn.toFixed(2);
    }
               
}

function calcGrades() {

    let hw = document.getElementById("hwAvg").value.trim();
    let midterm = document.getElementById("midExam").value.trim();
    let final = document.getElementById("finalExam").value.trim();
    let parti = document.getElementById("participation").value.trim();
    let finalAve;
    let resultMsg = "";

    let grade;
    let retake = false;

    if (isNaN(hw) || isNaN(midterm) || isNaN(final) || isNaN(parti) || 
        hw == "" || midterm == "" || final == "" || parti == "") {

        resultMsg = "INVALID input! Please enter integers between 0 and 100!";

    } else {

        let hwP = parseInt(hw);
        let midtermP = parseInt(midterm);
        let finalP = parseInt(final);
        let partiP = parseInt(parti);
        
        if ((hwP < 0 || hwP > 100) || (midtermP < 0 || midtermP > 100) ||
         (finalP < 0 || finalP > 100) || (partiP < 0 || partiP > 100)) {
        
            resultMsg = "INVALID score! Please enter integers between 0 and 100!";

         } else {

            finalAve = (.5 * hwP) + (.2 * midtermP) + (.2 * finalP) + (.1 * partiP);
            finalAve = finalAve.toFixed(0);

            switch(true) {
                case (finalAve >= 90):
                    grade = "A";
                    break;
                case (finalAve >= 80):
                    grade = "B";
                    break;
                case (finalAve >= 70):
                    grade = "C";
                    break;
                case (finalAve >= 60):
                    grade = "D";
                    retake = true; 
                    break;
                default:
                    grade = "F";
                    retake = true;
            } // end of switch

            resultMsg = "Final Average: " + finalAve + "<br>Final Letter Grade: " + grade + "<br>"; 

            if (retake) {
                resultMsg += "<h4>Student must retake the course!</h4>"
            }
    
         } // end of inner if-else

    } // end of outter if-else 


    document.getElementById("results").innerHTML = resultMsg;
   
}
