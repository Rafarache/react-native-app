function findDayWeek (month) {

    const nDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let counter = 3;

    for (var i=0; i<12; i++) {

        if (i === month) {
            return counter
        }

        for (var y=0; y<nDays[i]; y++){

            if (counter === 6) {
                counter = 0;
            }
            else{
                counter++;
            }
        }
    }
}

export {findDayWeek}