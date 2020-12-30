import React, {useState } from 'react'
import {View, Text, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {addTransaction} from '../store/reducer/transactionApp';
import {useDispatch} from 'react-redux';

const AddTransaction =({navigation})=>{
  const dispatch = useDispatch();
  const [title,setTitle] = useState('');
  const [price,setPrice] = useState('');
  
  const onSubmit=()=>{
    if (!title || !price) {
      return alert('Fill all fields')
    }
    dispatch(addTransaction({title,price}))
    navigation.goBack()
  }

  return(
    <View style={{flex:1, flexDirection:"column" }}>
      <TextInput
      style={{ height: 50, borderColor: 'blue', borderWidth: 2, margin:10 }}
      onChangeText={(title)=> setTitle(title)}
      placeholder="Title"
      value={title}
    />
    <TextInput
      style={{ height: 50, borderColor: 'blue', borderWidth: 2, margin:10 }}
      onChangeText={(price)=> setPrice(price)}
      value={price}
      placeholder="Price"
      keyboardType="number-pad"
    />
    <TouchableOpacity
    style={{
       backgroundColor: "blue",
       height: 50,
       borderRadius: 10,
       margin: 8,
       alignItems:'center',
       justifyContent:"center"
    }}
    onPress={()=>{onSubmit()}}
    >
      <Text style={{
        fontSize: 18,
        color:'white',
      }}> Add Transaction </Text>
    </TouchableOpacity>
    </View> 
  )
}
export default AddTransaction;