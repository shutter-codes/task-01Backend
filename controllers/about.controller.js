const express = require("express");
const router = express.Router();

const aboutSchema = require("../models/aboutSchema");

// CRUD operations for the About section

// Create
router.post("/about", async (req, res) => {
    const { content } = req.body;
    try {
      const about = new About({ content });
      await about.save();
      res.status(201).json(about);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Read
router.get("/about", async (req, res) => {
    try {
      const about = await About.find({});
  
      if (about.length === 0) {
        return res.status(404).json({ error: "Not found" });
      }
  
      // Send the data back to the client
      res.status(200).json({ about });
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Update
router.put("/about/:id", async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
  
    try {
      if (!content) {
        return res.status(400).json({ error: "Content is required for update" });
      }
  
      const about = await About.findByIdAndUpdate(id, { content }, { new: true });
  
      if (!about) {
        return res.status(404).json({ error: "About not found" });
      }
  
      res.json(about);
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

  
// Delete
router.delete("/about/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const about = await About.findById(id);
      console.log("deleted successfully");
  
      if (!about) {
        return res.status(404).json({ error: "About not found" });
      }
  
      await About.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  module.exports = router