import express from "express";
import {
  addComplaint,
  getComplaints,
} from "../controllers/complaints.controller.js";
import { validateComplaint } from "../middlewares/validateComplaint.js";
// import { requireAdminAuth } from "../middlewares/requireAdminAuth.js";

const router = express.Router();

router.post("/", validateComplaint, addComplaint);
router.get("/", getComplaints);//, requireAdminAuth 

export default router;
