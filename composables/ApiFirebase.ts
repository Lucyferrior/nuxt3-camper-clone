import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
const productsCollectionRef = collection(db, "Products");
let products: any = reactive([]);

export function takeThem() {
  const fbProducts: any = [];
  onSnapshot(productsCollectionRef, (QuerySnapshot) => {
    QuerySnapshot.forEach((doc) => {
      const product = {
        id: doc.id,
        title: doc.data().title,
        price: doc.data().price,
        src_link_default: doc.data().src_link_default,
        src_link_second: doc.data().src_link_second,
        category: doc.data().Kategori,
        typ: doc.data().type,
      };
      fbProducts.push(product);
    });
    products = fbProducts;
  });

  return fbProducts;
}

export function getSearchInTitle(key: string) {
  var newProducts:any = reactive([])
  products.forEach((element: any) => {
    var title: String = element.title;
    title = title.toLowerCase()
    var category : String = element.category
    category = category.toLowerCase()

    
    if (title.includes(key) || category.includes(key)) {
      //console.log(key);
      newProducts.push(element)
      //console.log(element)
    }
  });
  return newProducts
}

export function getAllProducts() {
  return products;
}
