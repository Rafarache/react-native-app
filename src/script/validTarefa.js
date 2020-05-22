function  validTarefa (props,have_alert) {
    
    const nDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (props.name.length === 0) {
        if(have_alert === true){
            alert("No tarefa my bro");
            console.log("entre")            
        }
        return false
    }
    else if(!(parseInt(props.day,10) <= nDays[parseInt(props.month,10)-1])){
        if(have_alert === true){
            alert("Invalid date my brother");
        }
        return false
    }
    else{
        return true
    }
}

export {validTarefa}