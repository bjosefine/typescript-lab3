export interface UserInterface {
  userId: number;
  userEmail: string;
  userPassword: string;
  userFirstname: string;
  userLastname: string;
  userPhone: string;
  userBirthdate: string;
  userStreet: string;
  userCity: string;
  userState: string;
  userZipCode: string;
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
