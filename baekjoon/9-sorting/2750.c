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

void merge (int n[], int N) {

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