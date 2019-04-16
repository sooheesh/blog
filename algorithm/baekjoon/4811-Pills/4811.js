
function pickOne(type, w, h) {

  // print('type w h ; ' + type+w+h);

  if (type === 'W') {
    w--;
    h++;
  } else {
    h--;
  }

  if (w > 0) {
    pickOne('W', w, h);
  }
  if (h > 0) {
    pickOne('H', w, h);
  }

  if (w === 0 && h === 0) {
    // print('G ' + G);
    G++;
  }
}


var W, H, G;

while(1) {
  W = readline();

  // print('W ' + W);
  if (W == 0) {
    break;
  }
  H = 0;
  G = 0;

  pickOne('W', W, H);

  print(G + '\n');

}
