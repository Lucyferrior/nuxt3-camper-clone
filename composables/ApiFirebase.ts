import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
const productsCollectionRef = collection(db, "Products");
var products: any = [];

export async function getAllProducts() {
  await onSnapshot(productsCollectionRef, (QuerySnapshot) => {
    const fbProducts: any = [];
   
    return QuerySnapshot.docs.map((doc) => {
        console.log(doc.data().content);
        return {
            id: doc.id,
            title: doc.data().title,
            price: doc.data().price,
            src_link_default: doc.data().src_link_default,
            typ: doc.data().type,
        };
      });
    
  });
  
}