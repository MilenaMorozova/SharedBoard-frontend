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

export default Note;
