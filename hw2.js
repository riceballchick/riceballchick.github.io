const euro_rate = 0.92, can_rate = 1.38, hk_rate = 7.81, 
        yen_rate = 156.73, peso_rate = 18.41;

let row1, row2, row3, row4, row5; 
    

function popRates() {

    row1 = document.getElementById("FXtable").rows[1].cells;
    row2 = document.getElementById("FXtable").rows[2].cells;
    row3 = document.getElementById("FXtable").rows[3].cells;
    row4 = document.getElementById("FXtable").rows[4].cells;
    row5 = document.getElementById("FXtable").rows[5].cells;
    
    row1[1].innerHTML = euro_rate;
    row2[1].innerHTML = can_rate;
    row3[1].innerHTML = hk_rate;
    row4[1].innerHTML = yen_rate;
    row5[1].innerHTML = peso_rate;

}

function FXconversion() {

    let dollars, euro, can, hk, yen, peso;

    dollars = parseFloat(document.getElementById("USdollars").value);
        
    euro = dollars * euro_rate;
    euro = euro.toFixed(2);
    can = dollars * can_rate;
    can = can.toFixed(2);
    hk = dollars * hk_rate;
    hk = hk.toFixed(2);
    yen = dollars * yen_rate;
    yen = yen.toFixed(2);
    peso = dollars * peso_rate;
    peso = peso.toFixed(2);

    row1[2].innerHTML = euro;
    row2[2].innerHTML = can;
    row3[2].innerHTML = hk;
    row4[2].innerHTML = yen;
    row5[2].innerHTML = peso;

}

function process() {

    let n1, n2, n3, sum, ave, prod, min, max;

    n1 = parseInt(document.getElementById("num1").value);
    n2 = parseInt(document.getElementById("num2").value);
    n3 = parseInt(document.getElementById("num3").value);
    sum = n1 + n2 + n3;
    ave = sum / 3;
    ave = ave.toFixed(2);
    prod = n1 * n2 * n3;
    min = Math.min(n1, n2, n3);
    max = Math.max(n1, n2, n3);

    document.getElementById("result").innerHTML= 
    ("The sum of the integers is: " + sum +
     "<br>The average of the integers is: " + ave +
     "<br>The product of the integers is: " + prod + 
     "<br>The smallest integer is: " + min +
     "<br>The largest integer is: " + max);
}
