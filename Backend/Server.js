import express from "express";
import workoutRoutes from "./routes/workouts.js";
import connection from "./db.js";
import UserRoutes from "./routes/user.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", UserRoutes);

connection();
const PORT = 4000;
app.listen(4000, () => {
  console.log("listen on port 4000");
});
