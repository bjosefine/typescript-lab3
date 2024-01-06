export interface UserInterface {
  userid?: number;
  useremail: string;
  userpassword: string;
  userfirstname: string;
  userlastname: string;
  userphone: string;
  userbirthdate: string;
  userstreet: string;
  usercity: string;
  userstate: string;
  userzipcode: string;
}

export interface ProductsInterface {
  productid: number;
  productname: string;
  productprice: number;
  productimg: string;
  productmaterial: string;
  productcategory: string;
  createdat: string;
}

export interface CategoryInterface {
  categoryid: number;
  categoryname: string;
}

export interface OrdersInterface {
  orderid: number;
  orderuser: string;
  orderstatus: string;
  createdat: string;
  products: {
    productName: string;
    productImg: string;
    productPrice: number;
    productQuantity: number;
  }[];
}
export interface FavoritesInterface {
  favoriteid: number;
  userid: number;
  productid: number;
  productname: string;
  productprice: number;
  productimg: string;
  productmaterial: string;
}
