// Theres an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round-robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team with the most points. 

// Given an array or pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], and the results array contains information about which team won. A 1 in the results array means that the home team won, while a 0 means that the away team won. The tournament winner is the team with the most points. If there is a tie, return either team.

// its guaranteed that exactly one team will win the tournament and that each team will compete against each other exactly once. Its also guaranteed that the competitions and results arrays will be of equal length. The teams are represented by strings, and the results are represented by integers (0 or 1). The function should return the name of the winning team as a string.

// Example Input
// competitions = [["HTML", "C"], ["C", "Python"], ["Python", "HTML"]]
// results = [0, 0, 1]
// Output
// "Python"

function tournamentWinner(competitions, results) {
    // Write your code here.
    let winner = {
        points: 0,
        name: '',
    };

    let scoreboard = {};

    for (let i = 0; i < competitions.length; i++) {
        let homeTeam = competitions[i][0];
        let awayTeam = competitions[i][1];

        if (results[i] === 0) {
            scoreboard[awayTeam] = (scoreboard[awayTeam] || 0) + 3;
        } else {
            scoreboard[homeTeam] = (scoreboard[homeTeam] || 0) + 3
        };

        if (scoreboard[awayTeam] >= winner.points) {
            winner = { points: scoreboard[awayTeam], name: awayTeam };
        } else if (scoreboard[homeTeam] >= winner.points) {
            winner = { points: scoreboard[homeTeam], name: homeTeam };
        };
    }
    return winner.name;
}
