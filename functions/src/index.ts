import * as functions from "firebase-functions";
import * as express from "express";

const app = express();
app.get("/hello", (req, res) => {
  res.send("Hello Express!");
});

export const api = functions.region("asia-northeast1").https.onRequest(app);
// export const helloWorld = functions
//   .region("asia-northeast1")
//   .https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello from Firebase!");
//   });
