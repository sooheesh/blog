var a = readline();
var b = readline();
var c = readline();

a = a.split(" ");
b = b.split(" ");
c = c.split(" ");
var times = 1000000;
a[0] = parseFloat(a[0]) * times;
a[1] = parseFloat(a[1]) * times;
b[0] = parseFloat(b[0]) * times;
b[1] = parseFloat(b[1]) * times;
c[0] = parseFloat(c[0]) * times;
c[1] = parseFloat(c[1]) * times;

var ad = Math.sqrt((b[0] - c[0]) * (b[0] - c[0]) + (b[1] - c[1]) * (b[1] - c[1]));
var bd = Math.sqrt((a[0] - c[0]) * (a[0] - c[0]) + (a[1] - c[1]) * (a[1] - c[1]));
var cd = Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));

var p = (ad + bd + cd) / 2;
var S = Math.sqrt(p * (p - ad) * (p - bd) * (p - cd));
var R = ad * bd * cd / (4 * S);

var alpha = Math.acos((bd * bd + cd * cd - ad * ad) / (2 * bd * cd));
var beta = Math.acos((ad * ad + cd * cd - bd * bd) / (2 * ad * cd));
var gamma = Math.PI - alpha - beta;

var n = Math.round(Math.PI / gcd(beta, gcd(alpha, gamma)));

print(R * R * Math.sin(2 * Math.PI / n) * n / 2 / times / times);

function gcd(a, b) {
    if (a < b) return gcd(b, a);
    if (Math.abs(b) < 0.01) {
        return a;
    } else {
        return (gcd(b, a - Math.floor(a / b) * b));
    }
}
