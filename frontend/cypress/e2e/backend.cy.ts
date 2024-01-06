// STATUS LIST
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

describe("Login backend", () => {
  it("POST", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/login",
      body: {
        email: "janedoe@mail.com",
        password: "password",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

describe("Products backend", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/products",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).to.have.property("productname", "Ava T-shirt");
    });
  });
});

describe("User backend", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/user",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).to.have.property(
        "useremail",
        "janedoe@mail.com"
      );
    });
  });
  it("POST", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@mail.com`;
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/user",
      body: {
        useremail: randomEmail,
        userpassword: "password",
        userfirstname: "Test",
        userlastname: "Cypress",
        userphone: "0707070707",
        usebirthdate: "2000-01-01",
        userstreet: "123 Cypress Street",
        usercity: "Cypress Town",
        userstate: "State",
        userzipcode: "12345",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

describe("Favorite backend", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/favorites",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).to.have.property("productname", "Ava T-shirt");
    });
  });
  it("POST", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/favorites",
      body: {
        userid: 1,
        productid: 7,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

describe("Order backend", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/orders",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).to.have.property("productname", "Ava T-shirt");
    });
  });
});
