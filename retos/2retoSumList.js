function sumList(l1,l2) {
    
    long1 = l1.length;
    long2 = l2.length;
    if (long1 >= long2) {
        long = long1
    }
    else{
        long = long2
    }

    let sum = [];
    let arrastre = 0;
    for(i = 0; i < long; i++){

        sum[i] = l1[i] + l2[i] + arrastre;
        arrastre = 0;
        if (sum[i] >= 10) {
            sum[i] -=10;
            arrastre =1;
        }
      

    }
    return sum;

}

sumList([3,3,1],[3,7,2])