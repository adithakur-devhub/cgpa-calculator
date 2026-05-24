function calculateCGPA(){

let c1=parseFloat(document.getElementById("credit1").value)||0;
let c2=parseFloat(document.getElementById("credit2").value)||0;
let c3=parseFloat(document.getElementById("credit3").value)||0;

let g1=parseFloat(document.getElementById("grade1").value);
let g2=parseFloat(document.getElementById("grade2").value);
let g3=parseFloat(document.getElementById("grade3").value);

let totalCredits=c1+c2+c3;

if(totalCredits===0){
document.getElementById("result").innerHTML="Enter credits";
return;
}

let cgpa=((c1*g1)+(c2*g2)+(c3*g3))/totalCredits;

document.getElementById("result").innerHTML=
"Your CGPA: "+cgpa.toFixed(2);
}
