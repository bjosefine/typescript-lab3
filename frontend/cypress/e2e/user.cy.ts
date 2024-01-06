describe("Login test", () => {
  it("Login with existing user", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[name="email"]').type("janedoe@mail.com");
    cy.get('input[name="password"]').type("password");
    cy.get("form").submit();
    cy.url().should("include", "/profile");
    cy.get("p").should("contain", "Hello");
  });
});
describe("Create user test", () => {
  const randomEmail = `test${Math.floor(Math.random() * 100000)}@mail.com`;
  it("Create new user", () => {
    cy.visit("http://localhost:5173/create");
    cy.get('input[name="useremail"]').type(randomEmail);
    cy.get('input[name="userpassword"]').type("test");
    cy.get('input[name="userfirstname"]').type("Firstname");
    cy.get('input[name="userlastname"]').type("Lastname");
    cy.get('input[name="userphone"]').type("123456789");
    cy.get('input[name="userbirthdate"]').type("2000-01-01");
    cy.get('input[name="userstreet"]').type("Street");
    cy.get('input[name="usercity"]').type("City");
    cy.get('input[name="userstate"]').type("State");
    cy.get('input[name="userzipcode"]').type("12345");
    cy.get("form").submit();
    cy.url().should("include", "/login");
  });
});
