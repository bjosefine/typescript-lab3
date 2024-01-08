import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import {
  CategoryInterface,
  ProductsInterface,
} from "../../interface/interface";
import { DropdownButton } from "../../components/DropdownButton";
import { AddToFavorite } from "../../components/AddToFavorite";

import { UserContext } from "../../contexts/UserContext";
import { UserContextInterface } from "../../contexts/UserContext";

export const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [noMoreProducts, setNoMoreProducts] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const userContext = useContext(UserContext) as UserContextInterface;
  const { user } = userContext;

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 5); // Increase the number of products to display
  };

  useEffect(() => {
    const fetchUrl = selectedCategory
      ? `/api/products/category/${selectedCategory}`
      : "/api/products";

    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((result: ProductsInterface[]) => {
        setProducts(result);
        setNoMoreProducts(visibleCount >= result.length);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    fetch("/api/productcategories")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((result: CategoryInterface[]) => {
        setCategories(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [visibleCount, selectedCategory]);

  console.log({ products });

  return (
    <>
      <div className="p-2">
        <p className="font-secondary text-4xl tracking-tight text-center">
          Products
        </p>
        <div className="flex w-full items-center justify-center p-2">
          <DropdownButton
            label="Filter"
            categories={categories.map((category) => category.categoryname)}
            onSelect={(categoryName) => setSelectedCategory(categoryName)}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-11/12 mx-auto flex flex-wrap gap-3 justify-center items-center">
          {products
            .slice(0, visibleCount)
            .map(({ productid, productname, productprice, productimg }) => (
              <Link to={`/products/${productid}`} key={productid}>
                <div
                  id="productsList"
                  className="flex flex-col items-start w-[200px]"
                >
                  <img
                    src={productimg}
                    alt={productname}
                    className="w-[200px]"
                  />
                  <AddToFavorite
                    userId={user?.userid || 0}
                    productId={productid}
                    iconOnly
                  />
                  <div className="text-left w-full">
                    <p
                      className="w-full whitespace-nowrap"
                      style={{
                        overflow: "hidden",
                        maxWidth: "200px",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {productname}
                    </p>
                    <p>
                      {productprice} <span>$</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div className="flex justify-center items-center p-4">
          {!noMoreProducts && (
            <Button label="Load more" type="black" onClick={handleLoadMore} />
          )}
        </div>
      </div>
    </>
  );
};
