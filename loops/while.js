var count = 0;
while (count < 10) {
    count = count + 1;
    console.log(count);
}

//drugi nacin
while (true) {
    if (count === 10) {
        break;
    }
    count = count + 1;
    console.log(count);
}