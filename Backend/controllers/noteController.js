const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

// index route
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// create note function
const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400);
    throw new Error("Please fill all the feilds");
  } else {
    const note = new Note({ title, content });
    const createNote = await note.save();
    res.status(201).json(createNote);
  }
});

// getting single note
const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note note found" });
  }
  res.json(note);
});

//delete route
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  // if (note.user.toString() !== req.user._id.toString()) {
  //   res.status(401);
  //   throw new Errow("You can't perform this action");
  // }
  if (note) {
    await note.remove();
    res.json({ message: "note removed" });
  } else {
    res.status(404);
    throw new Error("note not found");
  }
});

// updade note function
const updateNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.findById(req.params.id);
  // if (note.user.toString() !== req.user._id.toString()) {
  //   res.status(401);
  //   throw new Error("You can't perform this action");
  // }
  if (note) {
    note.title = title;
    note.content = content;
    const updateNote = await note.save();
    res.json(updateNote);
  } else {
    res.status(404);
    throw new Error("Note note found");
  }
});
module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };
