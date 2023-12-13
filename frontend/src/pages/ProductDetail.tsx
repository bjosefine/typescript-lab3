import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <p>product details holaaa {productId}</p>
      {productDetail.map(({ productname, productmaterial, productprice }) => (
        <div>
          {productname}
          {productmaterial}
          {productprice}
        </div>
      ))}
    </>
  );
};
