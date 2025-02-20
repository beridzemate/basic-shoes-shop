let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];

const initApp = () => {

    products = [
        {
            id: '1',
            name: 'Nike Air Max',
            price: 199.99,
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c954b24-6e82-4a28-8665-a089892f6134/NIKE+AIR+MAX+PLUS+PRM+QS+OLY.png'
        },
        {
            id: '2',
            name: 'Adidas Ultraboost',
            price: 179.99,
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Ultraboost_Light_Shoes_Black_GX3062_01_standard.jpg'
        },
        {
            id: '3',
            name: 'Puma RS-X',
            price: 129.99,
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/368499/02/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Shoes'
        },
        {
            id: '4',
            name: 'New Balance 574',
            price: 89.99,
            image: 'https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i?$pdpflexf2$&wid=440&hei=440'
        },
        {
            id: '1',
            name: 'Nike Air Max',
            price: 199.99,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1a4e9f46-b2c3-4356-9857-bc402be14465/air-max-90-shoes-kRsBnD.png'
        },
        {
            id: '2',
            name: 'Adidas Ultraboost',
            price: 179.99,
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Ultraboost_Light_Shoes_Black_GX3062_01_standard.jpg'
        },
        {
            id: '3',
            name: 'Puma RS-X',
            price: 129.99,
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/368499/02/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Shoes'
        },
        {
            id: '4',
            name: 'New Balance 574',
            price: 89.99,
            image: 'https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i?$pdpflexf2$&wid=440&hei=440'
        },
        {
            id: '5',
            name: 'Nike Air Jordan 1',
            price: 249.99,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c5654c4-ff20-4531-b076-e4cf3bde5a5a/air-jordan-1-mid-shoes-SQf7DM.png'
        },
        {
            id: '6',
            name: 'Adidas Yeezy Boost',
            price: 299.99,
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a3d3266cb244210a503af1f00b6f7d0_9366/YEEZY_BOOST_350_V2_Grey_HP7870_01_standard.jpg'
        },
        {
            id: '7',
            name: 'Converse Chuck Taylor',
            price: 59.99,
            image: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw9db6134a/images/a_107/M9160_A_107X1.jpg'
        },
        {
            id: '8',
            name: 'Vans Old Skool',
            price: 69.99,
            image: 'https://images.vans.com/is/image/VansEU/VD3HY28-HERO?$583x583$'
        },
        {
            id: '9',
            name: 'Reebok Classic',
            price: 79.99,
            image: 'https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00ad9f4df48d45c49e14aae70169b20f_9366/Classic_Leather_Shoes_White_49797_01_standard.jpg'
        },
        {
            id: '10',
            name: 'Nike Air Force 1',
            price: 109.99,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png'
        },
        {
            id: '11',
            name: 'Adidas Stan Smith',
            price: 89.99,
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg'
        },
        {
            id: '12',
            name: 'Nike Dunk Low',
            price: 119.99,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-low-shoes-RzX3Rf.png'
        },
        {
            id: '13',
            name: 'ASICS Gel-Kayano',
            price: 159.99,
            image: 'https://images.asics.com/is/image/asics/1011B885_002_SR_RT_GLB'
        },
        {
            id: '14',
            name: 'Under Armour HOVR',
            price: 129.99,
            image: 'https://underarmour.scene7.com/is/image/Underarmour/3024271-002_PAIR?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=566,708'
        }
    ];


 
    addDataToHTML();
    

    getCartFromMemory();
}

const getCartFromMemory = () => {
    const memoryCart = localStorage.getItem('cart');
    if (memoryCart) {
        cart = JSON.parse(memoryCart);
        addCartToHTML();
    }
}


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

const addDataToHTML = () => {

    listProductHTML.innerHTML = '';

    
    if(products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity + item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            if (positionProduct !== -1) {
                let info = products[positionProduct];
                newItem.innerHTML = `
                    <div class="image">
                        <img src="${info.image}" alt="${info.name}">
                    </div>
                    <div class="name">
                        ${info.name}
                    </div>
                    <div class="totalPrice">$${(info.price * item.quantity).toFixed(2)}</div>
                    <div class="quantity">
                        <span class="minus">&minus;</span>
                        <span>${item.quantity}</span>
                        <span class="plus">&plus;</span>
                    </div>
                `;
                listCartHTML.appendChild(newItem);
            }
        });
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantityCart(product_id, type);
    }
})

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity += 1;
                break;
            case 'minus':
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}


initApp();