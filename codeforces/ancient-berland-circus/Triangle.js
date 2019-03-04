export class Triangle {

	// Radius of the inscribed circle of the three sides of the triangle.
	// 삼각형의 세 변의 길이로 내접원의 반지름 구하기
	static getIncircleRadius = (a, b, c) => {
		return (a + b + c) / 2;
	}


	static getAreaWithHeronFormula = (p, a, b, c) => {
		return Math.sqrt(p * (p - a) * (p - b) * (p - c));
	}

	static getCircumcircleRadius = (s, a, b, c) => {
		return a * b * c / (4 * s);
	}

	static getAngleWithDistance = (a, b, c) => {
		Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c));
	}
}
