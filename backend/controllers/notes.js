const Notesschema = require("../models/Notesschema");
const { StatusCodes } = require("http-status-codes");

const getallnotes = async (req, res) => {
    const Notes=await Notesschema.find({createdby:req.user.userId});
    res.status(StatusCodes.OK).json({Notes,count:Notes.length});
};

const createnote = async (req, res) => {
    req.body.createdby=req.user.userId;
    const note=await Notesschema.create(req.body);
    res.status(StatusCodes.CREATED).json({note});
};

const getnote = async (req, res) => {
  res.status(StatusCodes.OK).json("note granted");
};

const updatenote = async (req, res) => {
  res.status(StatusCodes.OK).json("note updated");
};

const deletenote = async (req, res) => {
  res.status(StatusCodes.OK).json("note deleted");
};

module.exports = { getallnotes, getnote, createnote, deletenote, updatenote };
