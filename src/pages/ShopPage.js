import React, { useEffect, useState } from "react";
import { fetchStoreProducts } from "../store";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const ShopPage = () => {
  const [sortBy, setSortBy] = useState("popularity");
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
    return <div>Something went wrong...</div>;
  }

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  let sortedProducts = [...storeProducts];

  if (sortBy === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  return (
    <>
      <div className="ml-auto flex justify-end px-5">
        <select
          name="orderBy"
          className="text-pink-600 px-4 py-2"
          value={sortBy}
          onChange={handleChange}
        >
          <option value="popularity">Sort by popularity</option>
          <option value="highToLow">Sort by price: high to low</option>
          <option value="lowToHigh">Sort by price: low to high</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-20 justify-center my-16">
        {sortedProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ShopPage;
