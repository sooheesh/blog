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

var max = -1;
var winners = [];
for (player in scores) {
    if (scores[player] > max) {
        max = scores[player];
        winners = [player];
    } else if (scores[player] === max) {
        winners.push(player);
    }
}

log.some(e => {
    player = e[0];
    score = e[1];
    if (winners.indexOf(player) > -1 && score >= max) {
        print(player);
        return true;
    }
})
