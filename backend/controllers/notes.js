const Notesschema = require("../models/Notesschema");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getallnotes = async (req, res) => {
  const Notes = await Notesschema.find({ createdby: req.user.userId });
  res.status(StatusCodes.OK).json({ Notes, count: Notes.length });
};

const createnote = async (req, res) => {
  req.body.createdby = req.user.userId;
  const note = await Notesschema.create(req.body);
  res.status(StatusCodes.CREATED).json({ note });
};

const getnote = async (req, res) => {
  res.status(StatusCodes.OK).json("note granted");
};

const updatenote = async (req, res) => {
  const { title, description } = req.body;

  if (title === " " || description === " ") {
    throw new BadRequestError("Title and description can not be empty");
  }
  const note = await Notesschema.findOneAndUpdate(
    { createdby: req.user.userId, _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (!note) {
    throw new NotFoundError(`No Note with ${req.params.id} id`);
  }
  res.status(StatusCodes.OK).json(note);
};

const deletenote = async (req, res) => {
  const userId = req.user.userId;
  const noteId = req.params.id;

  const note = await Notesschema.findOneAndDelete({
    _id: noteId,
    createdby: userId,
  });

  if (!note) {
    throw new NotFoundError(`No Note with ${noteId} id`);
  }
  res.status(StatusCodes.OK).json({ note });
};

module.exports = { getallnotes, getnote, createnote, deletenote, updatenote };
