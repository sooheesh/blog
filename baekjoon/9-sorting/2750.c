#include <stdio.h>

void bubble (int n[], int N) {
    int tmp;
    for (int i = N - 1; i > 0; i--) {
        for (int k = 0; k < i; k++) {
            if (n[k] > n[k + 1]) {
                tmp = n[k];
                n[k] = n[k + 1];
                n[k + 1] = tmp;
            }
        }
    }
}

void selection (int n[], int N) {

    int tmp, minIdx;
    for (int k = 0; k < N - 1; k++) {
        minIdx = k;
        for (int i = k + 1; i < N; i++) {
            if (n[minIdx] > n[i]) {
            minIdx = i;
            }
        }
        tmp = n[k];
        n[k] = n[minIdx];
        n[minIdx] = tmp;
    }

}

void insertion (int n[], int N) {

    int item, position;
    for (int i = 1; i < N; i++) {
        item = n[i];
        position = i;
            while(position && item < n[--position]) {
                n[position+1] = n[position];
            }
        n[position] = item;
    }

}

void merge (int n[], int N) {



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

int main() {

    int N;
    scanf("%d", &N);

    int n[N];
    for (int i = 0; i < N; i++) {
        scanf("%d", &n[i]);
    }

//    bubble(n, N);
//    selection(n, N);
    insertion(n, N);


    for (int i = 0; i < N; i++) {
        printf("%d\n", n[i]);
    }

    return 0;
}