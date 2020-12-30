import {ADD_TRANSACTION, DELETE_TRANSACTION} from './type';
import remove from 'lodash.remove'

//action
let transactionID = 0

export function addTransaction(transaction){
    return{
        type: ADD_TRANSACTION,
        id: transactionID++,
        transaction
    }
}

export function deleteTransaction(id){
    return{
        type: DELETE_TRANSACTION,
        payload:id
    }
}

//reducers

const initialState=[]

function TransactionReducer(state=initialState, action){
    switch(action.type){
        case ADD_TRANSACTION:
            return [
                ...state,
                {
                   id: action.id,
                   transaction:action.transaction 
                }
            ]

        case DELETE_TRANSACTION:
            const deletenewArray= remove(state, obj => {
                return obj.id != action.payload
            })
            return deletenewArray

        default: 
            return state
    }
}

export default TransactionReducer;
