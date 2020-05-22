function findDayColor (tarefas) {

    if (tarefas === undefined){
        return 0
    }
    if (tarefas.length === 0){
        return 0
    }
    else {
        const size = tarefas.length
        
        let counter = 0;
        for (let i = size; i--; i!==0){
            if (tarefas[i].isActive === true){
                counter ++;
            }
        }
        if ( counter === 0) {
            return 1;
        }
        else if (counter === size){
            return 3;
        }
        else {
            return 2;
        }
    }

}

export {findDayColor}