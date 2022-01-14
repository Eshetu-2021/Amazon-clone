const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  "sk_test_51JzPcDCb9CSo006Rs2R3vc0jLBhCfZLC8iHNZC3YFMAVV4ytHPfmNPJ1OSpk7igu5SXKnA5A2ifN1XxDU3kOvsXw00tWKsa1r5"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// just to check working perfect
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http:localhost:4000 

//(http://localhost:5001/my-946f2/us-central1/api)




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
