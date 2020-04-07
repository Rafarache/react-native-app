function  initCalendar () {
    
    const months = ["January", "February", "March", "April", 
                  "May", "June", "July", "August", "September", "October", 
                  "November", "December"];
 
    const weekDays =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let counter = 0;
    var newCalendario = [];

    for (var i=0; i<12; i++) {
        
        newCalendario = [...newCalendario, {}];
        var daysArray = [];

        for (var y=0; y<nDays[i]; y++){
            daysArray=[...daysArray, {day:weekDays[counter], tarefas:{}, id:{y}} ];

            if (counter === 7) {
                counter = 0;
            }
            else{
                counter++;  
            }
        }
        newCalendario[i] = {name:months[i], days:{daysArray}}
    }
    
    return newCalendario;
}

export {initCalendar}

