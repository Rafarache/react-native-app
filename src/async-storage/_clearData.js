import StoreData from '../async-storage/_storeData'

function _clearData() {
    StoreData._storeData([],'@DailyToDo')
    StoreData._storeData([],'@ToDo')
    StoreData._storeData(0,'@ToDo_Counter')
}

export default 
{
  _clearData
}