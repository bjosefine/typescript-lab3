export interface UserInterface {
  userid: number;
  useremail: string;
  userpassword: string;
  userfirstname: string;
  userlastname: string;
  userphone: string;
  userbirthdate: string;
  userstreet: string;
  usercity: string;
  userstate: string;
  userzipCode: string;
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
