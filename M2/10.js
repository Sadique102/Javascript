let candidates = [];
let totalVoters = 0;
let currentVoter = 1;

function setCandidates() {
    const numCandidates = document.getElementById('numCandidates').value;
    const candidatesForm = document.getElementById('candidatesForm');
    candidatesForm.innerHTML = '';
    for (let i = 1; i <= numCandidates; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Name for candidate ${i}`;
        input.required = true;
        candidatesForm.appendChild(input);
        candidatesForm.appendChild(document.createElement('br'));
    }
    document.getElementById('candidatesDiv').style.display = 'block';
}

function setVoters() {
    candidates = Array.from(document.querySelectorAll('#candidatesForm input')).map(input => ({ name: input.value, votes: 0 }));
    totalVoters = prompt("Enter number of voters:");
    document.getElementById('votingDiv').style.display = 'block';
    document.getElementById('votingPrompt').textContent = `Voter ${currentVoter}, who do you vote for?`;
}

function submitVote() {
    const vote = document.getElementById('voteInput').value;
    const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
    if (candidate) {
        candidate.votes++;
    }
    document.getElementById('voteInput').value = ''; // Clear input field
    if (currentVoter < totalVoters) {
        currentVoter++;
        document.getElementById('votingPrompt').textContent = `Voter ${currentVoter}, who do you vote for?`;
    } else {
        announceResults();
    }
}

function announceResults() {
    const winner = candidates.reduce((a, b) => a.votes > b.votes ? a : b);
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log('results:');
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

