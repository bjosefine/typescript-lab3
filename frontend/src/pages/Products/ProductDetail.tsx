import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ProductsInterface } from "../../interface/interface";
import { AddToFavorite } from "../../components/AddToFavorite";
import { UserContext } from "../../contexts/UserContext";
import { UserContextInterface } from "../../contexts/UserContext";
import { AddToCart } from "../../components/AddToCart";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState<ProductsInterface[]>([]);
  console.log(productId);

  const userContext = useContext(UserContext) as UserContextInterface;
  const { user } = userContext;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/api/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result: ProductsInterface[]) => {
        setProductDetail(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [productId]);

  console.log({ productDetail });
  return (
    <>
      {productDetail.map(
        ({
          productid,
          productname,
          productimg,
          productmaterial,
          productprice,
        }) => (
          <div key={productid} className="w-7/12 mx-auto flex">
            <div className="flex flex-col justify-center items-center">
              <div className="w-80">
                <p className="font-secondary text-4xl tracking-tight text-start">
                  {productname}
                </p>
              </div>
              <img src={productimg} className="w-80" />
            </div>
            <div className="flex flex-grow items-center justify-center">
              <div className=" flex flex-col">
                <p>Material: {productmaterial}</p>
                <p>{productprice} $</p>
                <div className="flex gap-2 uppercase">
                  <AddToCart productId={Number(productId) || 0} />
                  <AddToFavorite
                    productId={productid}
                    userId={user?.userid || 0}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
