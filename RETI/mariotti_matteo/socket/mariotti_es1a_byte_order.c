#include <stdio.h>
#include <arpa/inet.h>

int main(){
    int num[5] = {19875, 5499, 59821, 43120, 26489};
    int i;

    for (int i = 0; i < 5; i++) {
        int rete = ntohs(num[i]);
        printf("%0x\n", rete);
    }

}

