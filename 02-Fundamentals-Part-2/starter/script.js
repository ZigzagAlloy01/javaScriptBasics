/*

Coding Challenge #2
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI;
let resultBox = document.createElement("div");
resultBox.id = "result-box";
let title = document.createElement("h1");
let markBMIBox = document.createElement("p");
markBMIBox.classList.add("mark-bmi");
let johnBMIBox = document.createElement("p");
johnBMIBox.classList.add("john-bmi");
let higherBox = document.createElement("p");
higherBox.classList.add("higher-bmi");
let parentElement = document.body;

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

markBMI = markMass/(markHeight**2);
johnBMI = johnMass/(johnHeight**2);

function determineHigherBMI(a, b) {
    if (a > b) {
        return "Mark's BMI is higher than John's BMI";
    }
    else if (a < b) {
        return "John's BMI is higher than Mark's BMI";
    }
    else if (a == b) {
        return "Both BMIs are equal";
    }
    else {
        return "BMIs were successfully calculated";
    }
}

title.innerHTML = "JavaScript Fundamentals – Part 2";
markBMIBox.innerHTML = "Mark's BMI: " + markBMI.toFixed(2);
johnBMIBox.innerHTML = "John's BMI: " + johnBMI.toFixed(2);
higherBox.innerHTML = determineHigherBMI(markBMI,johnBMI);
resultBox.appendChild(title);
resultBox.appendChild(markBMIBox);
resultBox.appendChild(johnBMIBox);
resultBox.appendChild(higherBox);
parentElement.appendChild(resultBox);
