import express from "express";
import {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} from "../Controller/WorkoutController.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.use(requireAuth);
router.get("/", getWorkout);

router.get("/:id", getWorkouts);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

export default router;
