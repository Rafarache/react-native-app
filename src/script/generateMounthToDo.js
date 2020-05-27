function  generateMounthToDo (id, toDo) {
    
    const monthsNames = ["January", "February", "March", "April", 
                  "May", "June", "July", "August", "September", "October", 
                  "November", "December"];
    const dayNames =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const nDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const initialDayMonth = [3, 5, 0, 3, 5, 1, 3, 5, 2, 4, 0, 2 ]

    // Inicializating object tha will be returned
    let mounth = { 
        // Array of days
        days:[],
        // Id of mounth ( ex: 0 = Jan , 1 = Feb , ...)
        id: id,
        // Name of month
        name: monthsNames[id]
    };

    // Initialize array of days
    let daysArray = [];
    // Control the begining day of each month
    let counter = initialDayMonth[id];

    // Fills the month with its ToDo
    for (var x=0; x<nDays[id]; x++){
        // Each day was an id , a vector of Todo's and a name
        daysArray=[...daysArray, {name:dayNames[counter], id:x, toDo_Array:[]}];

        // If the current name is Saturday, the next name must be Sunday
        if (counter === 6) {
            counter = 0;
        }
        else{
            counter++;  
        }
    }

    mounth.days = daysArray;
    
    return mounth;
}

export {generateMounthToDo}