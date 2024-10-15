
// For each interest rate in rates array, create a table and its header, then call 
// buildRows(principle, years, rate) to calculate compound total per rate for every 
// year per row
function buildTable() {

    const rates = [0.05, 0.06, 0.07];
    const principal = 1000;
    const years = 5;    
    let tables = "";

    for (let rate of rates) {

        tables += "<p><table><caption>" + parseInt(rate * 100) + "% Compound Interest</caption><tr><th scope='col'>Year</th><th scope='col'>Amount on deposit</th><th scope='col'>Interest Rate</th></tr>"; 

        tables += buildRows(principal, years, rate); 

        tables += "</table>";
    }

    // document.write(tables);
    document.getElementById("tables").innerHTML = tables;

}

// For each year, calcuate compound total and generate row per year
function buildRows(principal, years, rate) {

    let rows = ""; 
    let annual_total = 0;

    for (let y = 1; y <= years; y++) {
        
        annual_total = principal * Math.pow((1 + rate), y);
        annual_total = annual_total.toFixed(2); 
        rows += "<tr><td>" + y + "</td><td>" + annual_total + "</td><td>" + rate + "</td></tr>";
    
    }

    return rows; 
}

/*
function calcProductSum(min, max, step, loopType) {
    let sum = 0, product = 1;
    let sumMsg = "The result of ";
    let productMsg = "The result of ";

    if (loopType == "for") {

        for (let i = min; i <= max; i += step)
        { 
            sum += i;
            product *= i; 
            if (i == min) {
                sumMsg +=  i ;
                productMsg +=  i ;
            } else {
                sumMsg += " + " + i ;
                productMsg += " * " + i ;
            }
        }
    } 

    if (loopType == "while") {

        let i = min; 

        while (i <= max) {
            sum += i;
            product *= i;
    
            if (i == min) {
                sumMsg +=  i ;
                productMsg +=  i ;
            } else {
                sumMsg += " + " + i ;
                productMsg += " * " + i ;
            }
            
            i += step;
        } // end of while
    }

    sumMsg += " is " + sum.toLocaleString() + "\n";
    productMsg += " is " + product.toLocaleString() + "\n"; 

    document.write("<pre>");
    document.writeln(sumMsg); 
    document.writeln(productMsg);
    document.write("</pre>");
}
*/