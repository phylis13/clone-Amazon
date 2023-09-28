#  clone-Amazon
-  To access this application click this link <a href= http://192.168.120.10:43949/"> Clone Amazon</a>
 

# Amazon Clone

This is a clone of the Amazon website created for learning and practice purposes. It replicates core features of the Amazon website and is built using React, Firebase, and Stripe for payment processing.
# Features

    -User Authentication: Users can sign up, -sign in, and sign out securely using -Firebase Authentication.

    -Product Listing: Display a list of products with details such as product name, price, and rating.

    -Shopping Cart: Add and remove products from the shopping cart. The cart dynamically updates with the total price.

    -Checkout: Users can proceed to checkout where they can enter shipping information and payment details. Stripe is used for processing payments.

    -Order History: Users can view their order history, including items ordered and order totals.

# Getting Started

To run this project locally, follow these steps:

    Clone this repository:

    bash

git clone https://github.com/phylis13/clone-Amazon.git

Change to the project directory:

bash

cd clone-Amazon

# Install dependencies:

bash

npm install

# Create a Firebase project
 and set up Firebase Authentication and Firestore. Add your Firebase configuration in src/firebase.js.

# Create a Stripe account
 and get your Stripe API key. Add your API key in src/App.js.

 # Start the development server:

bash

    npm start

    Open your browser and navigate to http://localhost:3000 to view the app.

# Deploying

To deploy the app to production using Firebase Hosting, follow these steps:

    Build the project:

    bash

npm run build

# Install the Firebase CLI 
bash

npm install -g firebase-tools

Log in to Firebase:

bash

# firebase login

Initialize your Firebase project (if not already done):

bash

# firebase init

    Choose Firebase Hosting as the service to set up.
    Use the build directory as the public directory.
    Configure as a single-page app (rewrite all URLs to /index.html).

# Deploy to Firebase Hosting:

bash

    firebase deploy

    Access your hosted app via the provided URL.

# Technologies Used

    React
    Firebase (Authentication and Firestore)
    Stripe for payment processing

Contributing

Contributions are welcome. If you would like to make improvements to the project or report any issues, please open an issue or create a pull request.
# License

This project is open-source and available under the MIT License.
# Author
phylis njeri
