const products = [
    { 
        id: 1, 
        name: 'Zapatillas', 
        price: 1050, 
        category: 'zapatillas', 
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ruZax9SY-3c2e9b_hGGCkAHaIW%26pid%3DApi&f=1', 
        stock: 20, 
        description:'zapatillas deportivas'
    },

    { id: 2,
     name: 'Borcegos', 
     price: 850,
     category: 'borcego',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxd49_NbB8H62NsjfvfWBO8P1Kz7_GSLPWpQ1HilcPJCK7qGLfzDkOZ8-2FDBtExVcCM&usqp=CAU',
       stock: 16, 
       description:'borcego de cuero'},

    { id: 3,
     name: 'Botas',
     price: 1300, category: 'botas',
     img:'https://universoventura.vteximg.com.br/arquivos/ids/193456-500-500/Botas-Alaska-Llaima-Trekking-Waterproof-Hombre-Grey-Yellow-BB19206.jpg?v=637807077945070000', 
           stock: 10,
     description:'botas trekking'}
]


// products1[{

// id:4,
// name:'jean',
// price:'1200',
// img:'',
// stock:10,
// description:'pantalon azul',



// }
//  ]
export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(prod => prod.category === category)) : resolve(products)
        }, 500)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 500)
    })
}


