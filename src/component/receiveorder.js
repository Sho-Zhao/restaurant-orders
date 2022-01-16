import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";

export async function ReceiveOrder(){
    let readlist =[]

    const firebaseApp = initializeApp({
        apiKey: "AIzaSyBFJlBW38qj1lXCszTVxa6lGjqNuDTIPW0",
        authDomain: "restaurant-order-ba3db.firebaseapp.com",
        projectId: "restaurant-order-ba3db"
        
      });
    
    const db = getFirestore(firebaseApp);

    const queryDrink = await getDocs(collection(db, "Drinks"));
    queryDrink.forEach((drink) => {
      readlist.push(drink.data())
    })
    return readlist
}