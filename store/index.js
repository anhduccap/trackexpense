import {createStore} from 'redux'
import TransactionReducer from './reducer/transactionApp'

const store = createStore(TransactionReducer)

export default  store;