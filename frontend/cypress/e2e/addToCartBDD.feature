Feature: Add to cart

Det ska finnas en knapp på varje product som säger Add to cart. 
När man klickar på knappen ska produkten läggas till i kundvagnen.

Scenario: Lägger till första produkten
Given Jag är inne på en produkt och kundvagnsräknaren visar 0
When Jag klickar på knappen Add to cart
Then Produken ska läggas till i kundvagnen och kundvagnsräknaren ska visa 1

Scenario: Lägga till en andra produkt
Given Jag har lagt till första produken 
When Jag går till en ny product och lägger till den
Then Produken ska läggas till i kundvagnen och kundvagnsräknaren visar 2

Scenario: Gå in på kundvagnen
Given Jag lägger till en produkt och klickar på kundvagnen i menyn
When Jag klickar på kundvagnen
Then Jag kommer in på en sida som visar produkterna jag har lagt till
