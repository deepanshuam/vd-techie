import express from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import userRouter from "./routes/user.Routes.js";
import conatctRouter from "./routes/conatct.Routes.js"
const app = express();
app.use(cors());
// setup to access the permission of the cors

// app.use((req, res, next) => {
//     console.log('Incoming request:', req.body, req.file);
//     next();
//   });

// configuration
app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// To acess and set the user server cookies.
app.use(cookieParser());

//routes path define
app.use("/api/v1/users", userRouter);
app.use("/api/v1/contact",conatctRouter); 
export { app };
