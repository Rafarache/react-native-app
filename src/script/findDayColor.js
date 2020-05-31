//  CONSTANTS
import COLORS from '../themes/colors'

function findDayColor (toDo) {

    if (toDo === undefined){
        return COLORS.TRANSPARENT
    }
    if (toDo.length === 0){
        return COLORS.TRANSPARENT
    }
    else {
        const size = toDo.length
        
        let counter = 0;
        for (let i = size; i--; i!==0){
            if (toDo[i].status === true){
                counter ++;
            }
        }
        if ( counter === 0) {
            return COLORS.CALENDAR_STATUS_1;
        }
        else if (counter === size){
            return COLORS.CALENDAR_STATUS_3;
        }
        else {
            return COLORS.CALENDAR_STATUS_2;
        }
    }

}

export {findDayColor}