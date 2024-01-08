Feature: Go back

En tillbaka knapp med en pil icon som ska ta en tillbaka

Scenario: Inne på en specifik produkt
Given Jag är inne på en produkt och vill gå tillbaka till alla produkterna
When Jag klickar på bakåtpilen
Then Kommer jag in på sidan som visar alla produkter

Scenario: Inne på cart
Given Jag är inne på cart och tillbaka till min profilsida
When Jag klickar på tillbaka knappen
Then Kommer jag in på min profilsida