'use strict';

let participants = [];
const numOfParticipants = parseInt(prompt('How many participants?'));
let i = 0;

while (i < numOfParticipants) {
    const name = prompt('Enter name.');
    participants.push(name);
    i++;
}

participants.sort;

for (i of participants) {
    document.getElementById("list").innerHTML += `<li>${i}</li>`;
}

