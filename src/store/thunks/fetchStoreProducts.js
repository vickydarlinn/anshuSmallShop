import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
// this thunk will fetch the products from the database.

const fetchStoreProducts = createAsyncThunk(
  "products/fetch",
  async function fetchStoreProducts() {
    const storeRef = collection(db, "shop");

    const resp = await getDocs(storeRef);
    const products = resp?.docs?.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  }
);

export { fetchStoreProducts };
