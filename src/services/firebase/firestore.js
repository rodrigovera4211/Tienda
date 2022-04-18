
import { getDocs,collection,query,where,limit } from 'firebase/firestore'
import { firestoreDb } from '../index'



export const getProducts = (categoryId) => { 

    return new Promise(( resolve, reject)=>{
    
 const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId), limit(10))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot => {
            console.log(querySnapshot.size)
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            resolve(products)
        }).catch(error => {
            reject(error)
         })



    })


}