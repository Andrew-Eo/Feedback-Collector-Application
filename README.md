# Emaily

Emaily is a web application that allows companies to obtain feedback on their products, in a very efficient way. Emaily lets the user create a survey about their product, typically about a particularly feature of their product, or sometimes even just the product in general. After this survey is created, it is then sent via email to the list of people they want to obtain feedback from. As people respond to these emails, the responses are continuously sent back to the Emaily website for the user/company to see.

Emaily was built using React, Redux, Express and MongoDB.

## Full list of Emaily's features

- Allows users to create profiles for themselves (using Google OAuth authentication)
- Handles credit card payments that needed in order to send out the surveys (using Stripe)
- Allows automated emails containing the user's specific survery to be sent out to various people (using SendGrid)
- Stores all of the user's previously sent surveys (and responses to the surveys) in a database for the user's future use (using MongoDB)

Here are the screens for this project:

##### Send out surveys with counters of Yes or No.
![Imgur](https://i.imgur.com/WSTe9xy.png)

##### Adding credits through Stripe (to send out surveys).
![Imgur](https://i.imgur.com/1PgOxrM.png)

##### New Survey Form.
![Imgur](https://i.imgur.com/TP72Fks.png)

##### Form Confirmation before it is sent out.
![Imgur](https://i.imgur.com/gUuHgnL.png)
