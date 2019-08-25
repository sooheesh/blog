var num = Number(readline());

var round, player, score;
var scores = {};
var log = [];
for(var i = 0; i < num; i++) {
    round= readline().split(" ");
    player = round[0];
    score = parseInt(round[1]);
    if (player in scores) scores[player] += score;
    else scores[player] = score;
    log.push([player, scores[player]]);
}

var playerList = Object.keys(scores).slice(0);

var winnerScore = playerList.sort((a, b) => {
    // print(`a: ${a}, score: ${scores[a]}`);
    // print(`b: ${b}, score: ${scores[b]}`);
    return scores[b] - scores[a];
})[0];
winnerScore = scores[winnerScore];

// print(winnerScore)

var winnerList = playerList.filter(player => {
    return scores[player] === winnerScore;
})

log.some(e => {
    if (winnerList.includes(e[0]) && e[1] >= winnerScore) {
        print(e[0]);
        return true;
    }
})