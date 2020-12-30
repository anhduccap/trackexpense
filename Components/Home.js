import React from 'react'
import {Text,View,TouchableOpacity, CheckBox, FlatList, ScrollView, Alert} from 'react-native'
import  LinearGradient  from 'react-native-linear-gradient' 
import {useSelector, useDispatch} from 'react-redux'
import {deleteTransaction} from '../store/reducer/transactionApp'



const Home= ({navigation})=> {
    const  transactions = useSelector(state => state)
    const dispatch = useDispatch()
    const price=transactions.map((transactions)=>+transactions.transaction.price)
    const totalprice= price.reduce((prev, cur) => (prev+ cur),0)  
    const expense=
        price
            .filter((price)=> price <0 )
            .reduce((prev, cur) => (prev+ cur),0)*-1;
        
    function _renderItemExpense (item) {
        return (
                    <ScrollView>
                        <TouchableOpacity
                            style={{
                                flexDirection:'row',
                                backgroundColor:'#b0e0e6',
                                padding:18,
                                borderRadius: 10,
                                margin:10,
                                alignItems:"center",
                                justifyContent:"space-between"
                            }}

                            onPress={()=>dispatch(deleteTransaction(item.id))}
                            >
                                <View style={{
                                    flexDirection:'row',
                                    alignItems:'center'
                                }}>
                                    <Text style={{
                                        fontSize:15,
                                        marginLeft:5,
                                        fontWeight:"700"
                                    }}>{item.transaction.title}</Text>
                                </View>
                                <Text style={{
                                    fontSize:15,
                                    fontWeight:"700",
                                    color: item.transaction.price>0 ? '#009BFC':'#ff4500'
                                }}>  {item.transaction.price > 0 ? `$${item.transaction.price}` : `-$${Math.abs(item.transaction.price)}`} </Text>
                        </TouchableOpacity>
                    </ScrollView>
                    )
                }
    
        return(
            <View style={{
                flexDirection:"column"
            }}>
                <View style={{
                    flex:1,
                    alignItems:'center',
                    paddingVertical: 10,
                    paddingHorizontal:20,
                }}>
                    <LinearGradient 
                        colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
                        style={{
                                width: '100%',
                                height: 189,
                                borderRadius: 15,
                                flexDirection: 'row',
                                padding: 22,
                        }}
                        >
                        <View style={{width: '70%', alignItems: 'flex-start'}}>
                            <Text style={{
                                fontSize:18,
                                color:"white",
                                fontWeight:"bold"
                            }} >Current balance </Text>
                            <Text style={{
                                fontSize:32,
                                color:"white",
                                fontWeight:"bold"
                            }}> $ {totalprice} </Text>
                            <Text style={{
                                fontSize:20,
                                color:"white",
                                fontWeight:"bold",
                                marginTop: 56
                            }} > 1234 **** **** 5678 </Text>
                        </View>
                        <View style={{
                        alignItems:"flex-end",
                        width:"30%"
                    }}>
                        <Text style={{
                            fontSize:17, 
                            color:"white", 
                            fontWeight:"700"
                        }}> NGN </Text>
                        
                        <TouchableOpacity 
                            style={{
                                backgroundColor:'#00008b', 
                                borderRadius:20,
                                padding:10,
                                marginTop: 12,
                                alignItems:"center",
                                borderWidth: 3,
                                borderColor: '#fff',
                        }}
                        onPress={() => {
                            navigation.navigate('Add');
                          }} >
                            <Text style={{
                                color: '#fff',
                                fontSize: 15,
                                fontWeight: '700',
                            }}> Add</Text>
                        </TouchableOpacity>
                        <View style={{
                            alignItems:"center",
                            marginTop: 20,
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 15,
                                fontWeight: '700',
                            }}>
                                Expense
                            </Text>
                            <Text style={{
                                color: '#fff',
                                fontSize: 15,
                                fontWeight: '700',
                            }}>
                                ${expense}
                            </Text>
                        </View>     
                    </View>
                    </LinearGradient>
                </View> 
                <View style={{
                    height: "70%",
                    width: "100%",
                    marginTop: 220
                }}>
                    <FlatList
                    data={transactions}
                    renderItem={({item})=>_renderItemExpense(item)}
                    keyExtractor={item=> item.id.toString()}
                />     
                </View> 
            </View>
    )
}

export default  Home;