Business logic

function beepBoop(userInput) {
    let newArray = [];
    for (i = 0; i <= userInput; i++) {
        newArray.push(i);
    }
    console.log('counting up works');
    newArray.forEach(function (element) {
        if (newArray.includes(1)) {
            oneLocation = newArray.indexOf(1);
            newArray[oneLocation] = "beep";
        }
        else if (newArray.includes(2)) {
            twoLocation = newArray.indexOf(2);
            newArray[twoLocation] = "boop";
        }
        else if (newArray.includes(3)) {
            threeLocation = newArray.indexOf(3);
            newArray[threeLocation] = "Won't you be my neighbor?"
        }
    })
    return newArray;
}