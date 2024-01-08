Feature: Add to cart

Det ska finnas en knapp på varje product som säger Add to cart. 
När man klickar på knappen ska produkten läggas till i kundvagnen.

Scenario: Lägger till första produkten
Given Jag är inne på en produkt och kundvagnsräknaren visar 0
When Jag klickar på knappen Add to cart
Then Produken ska läggas till i kundvagnen och kundvagnsräknaren ska visa 1

Scenario: Lägga till en andra produkt
Given Jag går in på en ny produkt och kundvagnräknaren visar 1 
When Jag klickar på Add to cart knappen igen
Then Produken ska läggas till i kundvagnen och kundvagnsräknaren visar 2

Scenario: Gå in på kundvagnen
Given Jag är inne på sidan och klickar på kundvagnen i menyn
When Jag klickar på kundvagnen
Then Jag kommer in på en sida som visar produkterna jag har lagt till
