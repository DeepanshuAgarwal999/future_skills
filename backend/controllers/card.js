import { Card } from "../models/card.model.js";

export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    return res.status(200).json({
      message: "Get all cards",
      data: cards,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get cards",
      error: error.message,
    });
  }
};

export const getCardByTitle = async (req, res) => {
  const { title } = req.params;

  if (!title) {
    return res.status(404).json({
      message: "No card found with the given title",
    });
  }

  try {
    const card = await Card.find({ title });
    return res.status(200).json({
      message: "Card by title",
      data: card,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get card by title",
      error: error.message,
    });
  }
};

export const createCard = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: "All fields must be filled",
    });
  }

  try {
    const card = await Card.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "Card created successfully",
      data: card,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create card",
      error: error.message,
    });
  }
};

export const getCardsBySearch = async (req, res) => {
  const { title } = req.query;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      message: "Invalid or empty 'title' parameter",
    });
  }

  try {
    const cards = await Card.find({
      title: { $regex: new RegExp(title, "i") },
    }).exec();


    return res.status(200).json({
      message: "Cards found",
      data: cards,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to search cards",
      error: error.message,
    });
  }
};
