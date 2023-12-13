import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  productid: number;
  productname: string;
  productprice: number;
  productimg: string;
  productmaterial: string;
  productcategory: string;
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
      .then((result: Product[]) => {
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
      <div className="w-full">
        <div className="w-11/12 mx-auto flex flex-wrap gap-3 justify-center items-center bg-orange-400">
          {products.map(
            ({ productid, productname, productprice, productimg }) => (
              <Link to={`/products/${productid}`} key={productid}>
                <div className="flex flex-col items-start">
                  <img
                    src={productimg}
                    alt={productname}
                    className="w-[200px]"
                  />
                  <div className="bg-green-100 text-left w-full">
                    <p>{productname}</p>
                    <p>
                      {productprice} <span>$</span>
                    </p>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};
