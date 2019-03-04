// Greatest Common Divisor
// 최대공약수
export class GCD {

	// GCD of integer numbers
	static integer = (a, b) => {

		if (b === 0) {
			return a;
		}

		return this.integer(b, a % b);

	}

	// GCD of floating point numbers
	static float = (a, b) => {

		if (a < b) return this.float(b, a);

		if (Math.abs(b) < 0.01) {
			return a;
		}

		return this.float(b, a - Math.floor(a / b) * b);

	}

}
