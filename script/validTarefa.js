function  validTarefa (props) {
    
    const nDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (props.name.length === 0) {
        alert("No tarefa my bro");
        return false
    }
    else if(!(parseInt(props.day,10) < nDays[parseInt(props.month,10)-1])){
        alert("Invalid date my brother");
        return false
    }

    else{
        return true
    }
}

export {validTarefa}