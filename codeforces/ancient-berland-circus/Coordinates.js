
export class Coordinates {

	static getDistance = (a, b) => {
		const [x1, x2, y1, y2] = [a[0], b[0], a[1], b[1]];
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	}
}