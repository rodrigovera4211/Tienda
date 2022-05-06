// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getDocs, collection, query, where, writeBatch, documentId, addDoc, Timestamp } from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)

export const createOrderAndUpdateStock = (cart, objOrder) => {
  return new Promise((resolve, reject) => {

      const objOrderWithTimestamp = {
          ...objOrder,
          date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(firestoreDb)
      const outOfStock = []

      const ids = cart.map(prod => prod.id)
      const collectionRef = collection(firestoreDb, 'products') 

      getDocs(query(collectionRef, where(documentId(), 'in', ids)))
          .then(response => {
              response.docs.forEach(doc => {
                  const dataDoc = doc.data()
                  const prodQuantity = objOrder.items.find(prod => prod.id === doc.id).quantity

                  if(dataDoc.stock >= prodQuantity) {
                      batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                  } else {
                      outOfStock.push({ id: doc.id, dataDoc})
                  }
              })
          }).then(() => {
              if(outOfStock.length === 0) {
                  const collectionRef = collection(firestoreDb, 'orders')
                  return addDoc(collectionRef, objOrderWithTimestamp)
              } else {
                  return Promise.reject({ name: 'outOfStockError', products: outOfStock})
              }
          }).then(({ id }) => {
              batch.commit()
              resolve(id)
          }).catch(error => {
              resolve(error)
          })
  })
}


const createAdaptedCategory = (doc) => {
    const data = doc.data()

    const formattedCategory = {
        id: doc.id,
        description: data.description,
        order: data.order
    }

    return formattedCategory
}
export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const collectionRef = collection(firestoreDb, 'categories')

      getDocs(collectionRef).then(querySnapshot => {
        const categories = querySnapshot.docs.map(doc => {
            return createAdaptedCategory(doc)
        })
        resolve(categories)
        }).catch(error => {
            reject(error)
        })
    })
}