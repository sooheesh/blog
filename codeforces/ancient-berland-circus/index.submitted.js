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

// 세 변의 길이
var ab = Math.sqrt((b[0] - c[0]) * (b[0] - c[0]) + (b[1] - c[1]) * (b[1] - c[1]));
var bc = Math.sqrt((a[0] - c[0]) * (a[0] - c[0]) + (a[1] - c[1]) * (a[1] - c[1]));
var ca = Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));

// 삼각형 내접원의 반지름
var p = (ab + bc + ca) / 2;

// 삼각형 넓이
var s = Math.sqrt(p * (p - ab) * (p - bc) * (p - ca));

// 삼각형 넓이 공식을 이용해 외접원의 반지름 구하기
var r = ab * bc * ca / (4 * s);

// 세 변의 길이를 알 때 사이각 구하기
var alpha = Math.acos((bc * bc + ca * ca - ab * ab) / (2 * bc * ca));
var beta = Math.acos((ab * ab + ca * ca - bc * bc) / (2 * ab * ca));

// 나머지 각 하나는 파이로부터 구한다.
var gamma = Math.PI - alpha - beta;

// 최대공약수를 구한다. (정다각형의 한 내각)
var n = Math.round(Math.PI / gcd(beta, gcd(alpha, gamma)));

// 360도 = 3.14 * 2 (라디언) = Math.PI * 2
// 정다각형의 한 내각 = (2 * Math.PI) / n
print(Math.pow(r / times, 2) * Math.sin( Math.PI * 2 / n) / 2 * n);

// 최대공약수
function gcd(a, b) {
    if (a < b) return gcd(b, a);
    if (Math.abs(b) < 0.01) {
        return a;
    } else {
        return (gcd(b, a - Math.floor(a / b) * b));
    }
}
