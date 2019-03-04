// C. Ancient Berland Circus
// time limit per test2 seconds
// memory limit per test64 megabytes
// inputstandard input
// outputstandard output
// Nowadays all circuses in Berland have a round arena with diameter 13 meters, but in the past things were different.
//
// In Ancient Berland arenas in circuses were shaped as a regular (equiangular) polygon, the size and the number of angles could vary from one circus to another. In each corner of the arena there was a special pillar, and the rope strung between the pillars marked the arena edges.
//
// Recently the scientists from Berland have discovered the remains of the ancient circus arena. They found only three pillars, the others were destroyed by the time.
//
// You are given the coordinates of these three pillars. Find out what is the smallest area that the arena could have.
//
// Input
// The input file consists of three lines, each of them contains a pair of numbers –– coordinates of the pillar. Any coordinate doesn't exceed 1000 by absolute value, and is given with at most six digits after decimal point.
//
// Output
// Output the smallest possible area of the ancient arena. This number should be accurate to at least 6 digits after the decimal point. It's guaranteed that the number of angles in the optimal polygon is not larger than 100.
//
// Examples
// inputCopy
// 0.000000 0.000000
// 1.000000 1.000000
// 0.000000 1.000000
// outputCopy
// 1.00000000

import { Coordinates } from 'Coordinates';
import { Triangle } from 'Triangle';
import { GCD } from 'GCD';

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
var ab = Coordinates.getDistance(a, b);
var bc = Coordinates.getDistance(b, c);
var ca = Coordinates.getDistance(c, a);

// 삼각형 내접원의 반지름
var p = Triangle.getIncircleRadius(ab, bc, ca);

// 삼각형 넓이
var s = Triangle.getAreaWithHeronFormula(p, ab, bc, ca);

// 삼각형 넓이 공식을 이용해 외접원의 반지름 구하기
var r = Triangle.getCircumcircleRadius(s, ab, bc, ca);

// 세 변의 길이를 알 때 사이각 구하기
var alpha = Triangle.getAngleWithDistance(a, b, c);
var beta = Triangle.getAngleWithDistance(b, c, a);

// 나머지 각 하나는 파이로부터 구한다.
var gamma = Math.PI - alpha - beta;

// 최대공약수를 구해서 다각형의 각의 수를 구한다.
var n = Math.round(Math.PI / GCD.float(beta, GCD.float(alpha, gamma)));

// 360도 = 3.14 * 2 (라디언) = Math.PI * 2
// 정다각형의 한 내각 = (2 * Math.PI) / n
// 한 내각의 삼각형 넓이를 구해서 각의 수만큼 곱해준다.
print(Math.pow(r / times, 2) * Math.sin( Math.PI * 2 / n) / 2 * n);
