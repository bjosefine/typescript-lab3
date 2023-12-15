import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { HeartIcon } from "../../assets/icons/HeartIcon";

interface ProductDetail {
  productid: number;
  productname: string;
  productprice: number;
  productimg: string;
  productmaterial: string;
  productcategory: string;
  createdat: string;
}

export const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState<ProductDetail[]>([]);
  console.log(productId);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result: ProductDetail[]) => {
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
                  <Button label="Add to cart" type="black" />
                  <div className="flex gap-1 items-center">
                    <HeartIcon className="w-5 h-5" />
                    <p>Add to favourites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
