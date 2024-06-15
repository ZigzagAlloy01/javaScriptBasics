/*

Coding Challenge #1
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for a minimum score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

const dolphinsScore = [96, 108, 89, 97, 112, 101, 97, 112, 101];
const koalasScore = [88, 91, 110, 109, 95, 123, 109, 95, 106];

let parentElement = document.body;
let resultBox = document.createElement("main");
resultBox.id = "result-box";
let title = document.createElement("h1");
let dolphinsBox = document.createElement("p");
dolphinsBox.classList.add("dolphins-score");
let koalasBox = document.createElement("p");
koalasBox.classList.add("koalas-score");
let higherBox = document.createElement("p");
higherBox.classList.add("higher-score");

function determineAverageScore(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    const average = sum/(a.length);
    return average;
}

function determineHigherScore(a, b) {
    if (a > b) {
        return "Dolphins' score is higher than Koalas' score";
    }
    else if (a < b) {
        return "Koalas' score is higher than Dolphins' score";
    }
    else if (a === b) {
        return "Both scores are equal";
    }
    else {
        return "Scores were successfully calculated";
    }
}

let dolphinsAverageScore = determineAverageScore(dolphinsScore);
let koalasAverageScore = determineAverageScore(koalasScore);

title.innerHTML = "JavaScript Fundamentals – Part 1";
dolphinsBox.innerHTML = "Dolphins' score: " + dolphinsAverageScore.toFixed(2);
koalasBox.innerHTML = "Koalas' score: " + koalasAverageScore.toFixed(2);
higherBox.innerHTML = determineHigherScore(dolphinsAverageScore, koalasAverageScore);
resultBox.appendChild(title);
resultBox.appendChild(dolphinsBox);
resultBox.appendChild(koalasBox);
resultBox.appendChild(higherBox);
parentElement.appendChild(resultBox);