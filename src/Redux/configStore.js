import {combineReducers,createStore} from 'redux';
import ProductsListProducer from './reducers/ProductsListProducer';


const rootReducer = combineReducers({
    ProductsListProducer: ProductsListProducer
})

const store = createStore(rootReducer);
export default store;