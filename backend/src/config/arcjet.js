import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import { ENV } from "./env.js";

// Initialize Arcjet with security rules
export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    //shield protects your app from common attacks e.g. SQL injections , XSS, CSRF attacks
    shield({ mode: "LIVE" }),

    // bot detection - block all bots except search engine
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        // allow legitimate search engine bots
      ],
    }),

    // rate limiting with token bucket algorithm
    tokenBucket({
      mode: "LIVE",
      refillRate: 10, // tokens added per interval
      interval: 10, // interval (in seconds)
      capacity: 15, //  maximun tokens in bucket
    }),
  ],
});
