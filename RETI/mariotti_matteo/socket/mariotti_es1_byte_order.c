#include <stdio.h>
#include <arpa/inet.h>

int main(){
    int num[5] = {1000, 12890, 54163, 34012, 62984};
    int i;

    for (int i = 0; i < 5; i++) {
        int rete = htonl(num[i]);
        printf("%0x\n", rete);
    }

}

