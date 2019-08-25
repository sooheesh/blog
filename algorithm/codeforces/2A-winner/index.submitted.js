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

var playerList = Object.keys(scores);

var max = scores[playerList.sort((a, b) => scores[b] - scores[a])[0]];

var winners = playerList.filter(player => scores[player] === max)

log.some(e => {
    player = e[0]; score = e[1];
    if (winners.includes(player) && score >= max) {
        print(player); return true;
    }
})