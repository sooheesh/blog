// your code goes here
var a = readline();
var b = readline();
var c = readline();

a = a.split(" ").map(e => parseInt(e));
b = b.split(" ").map(e => parseInt(e));
c = c.split(" ").map(e => parseInt(e));

// print(a);
// print(b);
// print(c);

var aa, ba, ca;
var result = [];
for (var y = 0; y <= 1000; y++) {
  for (var x = 0; x <= 1000; x++) {
    aa = Math.sqrt(Math.pow(a[0] - x, 2) + Math.pow(a[1] - y, 2)) / a[2];
    ba = Math.sqrt(Math.pow(b[0] - x, 2) + Math.pow(b[1] - y, 2)) / b[2];
    ca = Math.sqrt(Math.pow(c[0] - x, 2) + Math.pow(c[1] - y, 2)) / c[2];

    if (aa == ba && ba == ca) {
      result.push([x, y]);
      print(x, y);
      break;
    }
  }
}

// result.foreach(e => {
//
// })


// 기울기
// ab = (a[2] - b[2]) / (a[1] - b[1]);
// bc = (b[2] - c[2]) / (b[1] - c[1]);
// ca = (c[2] - a[2]) / (c[1] - a[1]);
// abn = a[2] - (ab * a[1]);
// bcn = b[2] - (bc * b[1]);
// can = c[2] - (ca * c[1]);
// 최대 최소 y 값
// maxY = Math.max(a[2], b[2], c[2]);
// minY = Math.min(a[2], b[2], c[2]);





