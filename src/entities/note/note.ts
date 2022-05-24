class Note {
  id = '';
  title = '';
  tag = '';
  description = '';
  created: Date = new Date();
  updated: Date = new Date();
  color: string = '';

  referenceToNote: Note | null = null;
}

export default Note;
