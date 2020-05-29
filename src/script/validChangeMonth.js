function  validChangeMonth (number) {

    if ( number < 0 || number > 11) {
        return false
    }
    return true
}

export {validChangeMonth}