#include <iostream>
using namespace std;

//Restar sin restar
int subAlg(int a, int b) {
    int value = 0;
    while (a > b) {
    b++;
    value++;
    }
    return value;
}

//Multiplicar sin multiplicar
int mulAlg(int a, int b) {
    int value = 0;
    while (a) {
        a--;
        value+=b;
    }
    return value;
}
 
//Dividir sin dividir 
int divAlg(int a, int b){
    int value = 0;
    while (a >= b){
        value++;
        a -= b;
    }
    return value;
}

//Potencia 
int potAlg(int a, int b) {
    int value = a;
    while (b>1) {
        value *= a;
        b--;
    }
    return value;
}

//Factorial 
int facAlg(int a) {
    int value = 1;
    for (int i = 1; i <= a; i++){
        value *= i;
    }
    return value;
}

//Números perfectos
void perfAlg(int a) {

    int value = 0;
    int perfect = false;

    for (int i = 1; i <= (a/2); i++) {
        if (a % i == 0) {
            value += i;
        }
    }

    if (value == a) cout << a << " is perfect ";
    else cout << a << " is not perfect";
}

//Números primos
void verifyPrime(int number) {
    bool prime = true;
    for (int i = 2; i <= number/2 && prime; i++){
        if (number % i == 0) prime = false;
    }
    if (prime) cout << number << "is prime "<< endl;
    else cout << number << " is not prime " << endl;

}

//Números amigos

int main(){
   /* cout << "5 - 1 = " << subAlg(3, 2) <<endl;
    cout << "3 * 2 = " << mulAlg(3, 2) <<endl;
    cout << "7 / 2 = " << divAlg(7, 2) <<endl;
    cout << "4!: " << potAlg(4) << endl;*/
    //perfAlg(496);
    //verifyPrime(10);

}


