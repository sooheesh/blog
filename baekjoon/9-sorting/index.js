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
			while(position && item < list[--position]) {
				list[position+1] = list[position];
			}
			list[position] = item;
		}

		return list;

	}

	static merge = list => {

		let [left, right, sorted] = [0, list.length-1, []];

		divide(list, left, right);

		function divide (list, left, right) {

			if (left < right) {
				let mid = Math.floor((left + right) / 2);
				// console.log('mid',  mid);
				// console.log('divide(list, left, mid)', left, mid);
				divide(list, left, mid);
				// console.log('divide(list, mid+1, right)', mid+1, right);
				divide(list, mid+1, right);
				// console.log('mergeCore left, mid, right', left, mid, right);
				mergeCore(list, left, mid, right);
			}
		}

		function mergeCore (list, left, mid, right) {

			let [leftItem, rightItem, sortedIdx] = [left, mid+1, left];

			while(leftItem <= mid && rightItem <= right) {
				if (list[leftItem] < list[rightItem]) {
					sorted[sortedIdx++] = list[leftItem++];
				} else {
					sorted[sortedIdx++] = list[rightItem++];
				}
			}

			while(leftItem <= mid) {
				sorted[sortedIdx++] = list[leftItem++];
			}

			while(rightItem <= right) {
				sorted[sortedIdx++] = list[rightItem++];
			}
			// console.log(list, sorted);

			for (let i = left; i <= right; i++) {
				list[i] = sorted[i];
			}
			// console.log(list, sorted);

		}

		return list;

	}

	static quick = list => {

	}

	static heap = list => {

	}
}