import { AsyncStorage } from 'react-native';

async function _storeData(value, key) {

  let valueSaved

  //  Check if the value is not a string
  if (typeof value !== 'string') {
    //  If is not an string, stringify the variable
    valueSaved = JSON.stringify(value)
  }
  else {
    //  Else,  keep it as it is
    valueSaved = value
  }

  try {
    await AsyncStorage.setItem(key, valueSaved);
      console.log("Data stored")
  } catch (error) {
      console.log("Erro storing data")
  }
  
};

export default 
{
  _storeData
}