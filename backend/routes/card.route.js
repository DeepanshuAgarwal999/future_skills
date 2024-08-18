import express from "express";
import {
  createCard,
  getAllCards,
  getCardsBySearch,
  getCardByTitle,
} from "../controllers/card.js";

const route = express.Router();

route.get("/cards", getAllCards);
route.get("/cards/:title", getCardByTitle);
route.post("/create-card", createCard);
route.get("/search", getCardsBySearch);

export default route;
