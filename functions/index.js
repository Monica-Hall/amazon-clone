const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_uqHms2LuXpAtF4wuaOG6Fm4700GAIBKzhP"); 

// - API

// - APP CONFIG 
const app = express();

// - MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

// - API ROUTES
    // - tester 
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total; 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: "usd"
      });

      response.status(201).send({
        clientSecret: paymentIntent.client_secret
      });
})

// - LISTENER
exports.api = functions.https.onRequest(app);


// - EXAMPLE
// http://localhost:5001/clone-e6fc9/us-central1/api 
