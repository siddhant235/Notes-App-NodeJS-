const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");


const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);
  debugger
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Note added!");
  } else {
    console.log("Note title taken!");
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter((note) => note.title != title);
  if (notes.length > noteToKeep.length) {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(noteToKeep);
  } else {
    console.log(chalk.red.inverse("No Note found"));
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  try {
    const allNotes = loadNotes();
    allNotes.map((i) => {
      return console.log(i.title);
    });
  } catch (e) {
    console.log(e);
  }
};

const readNote = (title) => {
  try {
    const notes = loadNotes();
    const note = notes.find((i) => i.title == title);

      console.log(chalk.green.inverse(note.title));
      console.log(note.body);
   
  } catch (error) {
    console.log(chalk.red.inverse("No note found"));
  }
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
