import reducer from './reducer'
import {createStore, applyMiddleware} from 'redux'
import PromiseMiddleware from 'redux-promise-middleware'

export default createStore(reducer, applyMiddleware(PromiseMiddleware))