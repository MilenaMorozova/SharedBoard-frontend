interface Note {
  id: string,
  title: string,
  tag: string,
  description: string,
  created: Date,
  updated: Date,
  color: string,
  posX: number,
  posY: number,

  refTag: string,
  blockedBy: string | null,
}

export function notesAreEqual(note1: Note, note2: Note): boolean {
  return (
    note1.title === note2.title
    && note1.description === note2.description
    && note1.updated === note2.updated
    && note1.posX === note2.posX
    && note1.posY === note2.posY
    && note1.refTag === note2.refTag
    && note1.blockedBy === note2.blockedBy
  );
}

export default Note;
