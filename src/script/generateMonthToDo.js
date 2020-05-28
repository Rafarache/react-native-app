function  generateMonthToDo (id, toDo) {
    
    const monthsNames = ["January", "February", "March", "April", 
                  "May", "June", "July", "August", "September", "October", 
                  "November", "December"];
    const dayNames =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const nDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const initialDayMonth = [3, 5, 0, 3, 5, 1, 3, 5, 2, 4, 0, 2 ]

    // Inicializating object tha will be returned
    let month = { 
        // Array of days
        days:[],
        // Id of month ( ex: 0 = Jan , 1 = Feb , ...)
        id: id,
        // Name of month
        name: monthsNames[id]
    };

    // Initialize array of days
    let daysArray = [];
    var toDo_Day=  toDo;
    // Control the begining day of each month
    let counter = initialDayMonth[id];
    // Sort Array of ToDo
    // let new_ToDo = toDo
    // new_ToDo.sort(function(a, b) {
    //     return a.day - b.day;
    // });

    // Fills the month with its ToDo
    for (var x=0; x<nDays[id]; x++){
        toDo_Day = toDo.filter(function(item) {
            return item.day == x;
        });
        // Each day was an id , a vector of Todo's and a name
        daysArray=[...daysArray, {name:dayNames[counter], id:x, toDo_Array:toDo_Day}];

        // If the current name is Saturday, the next name must be Sunday
        if (counter === 6) {
            counter = 0;
        }
        else{
            counter++;  
        }
    }

    month.days = daysArray;
    return month;
}

export {generateMonthToDo}