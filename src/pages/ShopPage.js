import React, { useEffect } from "react";
import { fetchStoreProducts } from "../store";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const ShopPage = () => {
  const dispatch = useDispatch();
  const {
    products: storeProducts,
    isLoading,
    error,
  } = useSelector((state) => state.store);
  useEffect(() => {
    dispatch(fetchStoreProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Something wrong happened...</div>;
  }

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-20 justify-center ">
      {storeProducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ShopPage;
