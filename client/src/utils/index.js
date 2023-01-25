import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  // generate random number and mutiply to surpriseMePrompts length 1 to 49
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  // generate supriseMePrompts data base on the index from 1 to 49
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
