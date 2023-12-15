import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";
import { Button } from "../../components/Button";

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
      <div className="p-2">
        <p className="font-secondary text-4xl tracking-tight text-center">
          Products
        </p>
        <div className="flex w-full items-center justify-center p-2">
          filter <ArrowDownIcon />
        </div>
      </div>
      <div className="w-full">
        <div className="w-11/12 mx-auto flex flex-wrap gap-3 justify-center items-center">
          {products.map(
            ({ productid, productname, productprice, productimg }) => (
              <Link to={`/products/${productid}`} key={productid}>
                <div className="flex flex-col items-start">
                  <img
                    src={productimg}
                    alt={productname}
                    className="w-[200px]"
                  />
                  <div className="text-left w-full">
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
        <div className="flex justify-center items-center p-4">
          <Button label="Load more" type="black" />
        </div>
      </div>
    </>
  );
};
