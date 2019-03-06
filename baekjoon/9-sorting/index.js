// Ascending
export class Sorting {

	static bubble = list => {

		let unFixed = list.length - 1;
		let tmp;

		for (let i = unFixed; i > 0; i--) {
			for (let k = 0; k < i; k++) {
				if (list[k] > list[k+1]) {
					tmp = list[k];
					list[k] = list[k+1];
					list[k+1] = tmp;
				}
			}
		}

		return list;
	}

	static selection = list => {

		let tmp, minIdx;
		for (let k = 0; k < list.length - 1; k++) {
			minIdx = k;
			for (let i = k + 1; i < list.length; i++) {
				if (list[minIdx] > list[i]) {
					minIdx = i;
				}
			}
			tmp = list[k];
			list[k] = list[minIdx];
			list[minIdx] = tmp;
		}

		return list;
	}

	static insertion = list => {

		let item, position;
		for (let i = 1; i < list.length; i++) {
			item = list[i];
			position = i;
			while(position && item < list[position-1]) {
				list[position] = list[--position];
			}
			list[position] = item;
		}

		return list;

	}

	static merge = n => {

	}

	static quick = n => {

	}

	static heap = n => {

	}
}