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
        while(position && item < n[position-1]) {
            n[position] = n[position-1];
            --position;
        }
        n[position] = item;
    }

}

void mergeCore (int n[], int left, int mid, int right, int sorted[]) {

    int leftItem = left, rightItem = mid + 1, sortedIdx = left;

    while(leftItem <= mid && rightItem <= right) {
        if (n[leftItem] < n[rightItem]) {
            sorted[sortedIdx++] = n[leftItem++];
        } else {
            sorted[sortedIdx++] = n[rightItem++];
        }
    }

    while(leftItem <= mid) {
        sorted[sortedIdx++] = n[leftItem++];
    }

    while(rightItem <= right) {
        sorted[sortedIdx++] = n[rightItem++];
    }

    for (int i = left; i <= right; i++) {
        n[i] = sorted[i];
    }

}

void divide (int n[], int left, int right, int sorted[]) {

    if (left < right) {
        int mid = (left + right) / 2;
        divide(n, left, mid, sorted);
        divide(n, mid+1, right, sorted);
        mergeCore(n, left, mid, right, sorted);
    }
}

void merge (int n[], int N, int sorted[]) {
    int left = 0, right = N;

    divide(n, left, right, sorted);
}

int main() {

    int N;
    scanf("%d", &N);

    int n[N], sorted[N];
    for (int i = 0; i < N; i++) {
        scanf("%d", &n[i]);
    }

//    bubble(n, N);
//    selection(n, N);
//    insertion(n, N);
    merge(n, N, sorted);


    for (int i = 0; i < N; i++) {
        printf("%d\n", n[i]);
    }

    return 0;
}