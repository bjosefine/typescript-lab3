import React from "react";
import { useEffect, useState } from "react";

interface Product {
  productid: number;
  productname: string;
  productprice: number;
  productimg: string;
  productmaterial: string;
  productcategory: number;
  createdat: string;
}

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  console.log({ products });

  return (
    <>
      <p>Hola products!</p>
      {products.map((product) => (
        <div key={product.productid}>
          {product.productname}
          {product.productprice}
        </div>
      ))}
    </>
  );
};
