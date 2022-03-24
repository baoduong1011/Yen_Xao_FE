import Axios from 'axios';
class getAllProduct {
    getProducts() {
        return Axios({
            method:'GET',
            url:'http://localhost:3000/api/v1/products/'
        })
    }
}

export default getAllProduct;