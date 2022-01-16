import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";


export async function SendOrder(tablenum, drink){
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyBFJlBW38qj1lXCszTVxa6lGjqNuDTIPW0",
        authDomain: "restaurant-order-ba3db.firebaseapp.com",
        projectId: "restaurant-order-ba3db"
      });
      
    const db = getFirestore(firebaseApp);

    await addDoc(collection(db, "Drinks"), {
    Table: tablenum,
    Drink: drink
        });
}