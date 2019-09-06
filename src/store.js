import {createStore, combineReducers} from 'redux'
import  reducer  from './reducer'

const store = createStore(combineReducers({storeData:reducer}));

store.subscribe(() => {
    console.log("Update Store:", store.getState())
})

export default store