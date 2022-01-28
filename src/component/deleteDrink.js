import {doc, deleteDoc} from 'firebase/firestore'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export async function deleteDrink(drinkid){
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyBFJlBW38qj1lXCszTVxa6lGjqNuDTIPW0",
        authDomain: "restaurant-order-ba3db.firebaseapp.com",
        projectId: "restaurant-order-ba3db"
      });
      
    const db = getFirestore(firebaseApp);

    await deleteDoc(doc(db, "Drinks", drinkid))
    document.location.reload()
}