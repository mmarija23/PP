var count = 10;

do {
    count++;
    console.log(count);
} while (count < 10);

//1:count =10 => count++ => count =11 =>log(11)=>11< 10(false)=>end
//drugi korak nema jer smo vec izvrsili uslov


while (count < 10) {
    count++;
    console.log('while', count);
}