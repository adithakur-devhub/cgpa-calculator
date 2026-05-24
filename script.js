function addSubject(){

const container =
document.getElementById("subjects");

const div =
document.createElement("div");

div.className = "subject";

div.innerHTML = `
<input type="number" class="credit" placeholder="Credits">

<select class="grade">
<option value="10">O (10)</option>
<option value="9">A+ (9)</option>
<option value="8">A (8)</option>
<option value="7">B+ (7)</option>
<option value="6">B (6)</option>
<option value="5">C (5)</option>
<option value="0">F (0)</option>
</select>
`;

container.appendChild(div);
}

function calculateCGPA(){

let credits =
document.querySelectorAll(".credit");

let grades =
document.querySelectorAll(".grade");

let totalCredits = 0;
let totalPoints = 0;

for(let i=0;i<credits.length;i++){

let credit =
parseFloat(credits[i].value) || 0;

let grade =
parseFloat(grades[i].value);

totalCredits += credit;
totalPoints += credit * grade;
}

if(totalCredits === 0){

document.getElementById("result").innerHTML =
"Enter valid credits";

document.getElementById("percentage").innerHTML =
"Percentage: -";

return;
}

let cgpa =
totalPoints / totalCredits;

let percentage =
(cgpa - 0.75) * 10;

document.getElementById("result").innerHTML =
"Your CGPA: " + cgpa.toFixed(2);

document.getElementById("percentage").innerHTML =
"Percentage: " + percentage.toFixed(2) + "%";
}
