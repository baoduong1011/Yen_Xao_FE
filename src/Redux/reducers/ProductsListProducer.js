const stateDefault = {
    idProduct:"",
    listProducts:[
        
    ]
}

const ProductsListProducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'SELECT_PRODUCT': {
            let productChoose = {
                "name": action.name,
                "imgPro":action.imgPro,
                "price":action.price,
                "quantity": 1
            };

            console.log(action.imgPro);
            var arrayTemp = [...state.listProducts];

            let index = arrayTemp.findIndex(pro => pro.name === productChoose.name);

            if(index !== -1) {
                arrayTemp[index].quantity += 1;
            }
            else {
                arrayTemp.push(productChoose);
            }

            state.listProducts = arrayTemp;

            console.log(arrayTemp);

            localStorage.setItem("Array_Products",JSON.stringify(state.listProducts));


            return {...state};



        }
        default: return {...state} 
    }
}

export default ProductsListProducer;