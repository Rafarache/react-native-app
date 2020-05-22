import { AsyncStorage } from 'react-native';

async function _storeData(value, key) {

  let valueSaved

  if (typeof value === 'object') {
    valueSaved = JSON.stringify(value)
  }
  else {
  valueSaved = value
  }

  try {
    await AsyncStorage.setItem(key, valueSaved);
    console.log(valueSaved)
    console.log("Data stored")
  } catch (error) {
    console.log("Erro storing data")
  }
  
};

export default 
{
    _storeData
}