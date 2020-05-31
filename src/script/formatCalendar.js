import {findDayWeek} from '../script/findDayWeek'

function formatCalendar (monthNum,monthData) {

    let dayWeek = findDayWeek(monthNum)
    let auxArray = []
    for (let i = dayWeek; i--; i!== 1){
        auxArray.push({id:false})
    }
    auxArray = auxArray.concat(monthData);

    return auxArray
}

export {formatCalendar}