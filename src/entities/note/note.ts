class Note {
    id: string = '';
    title: string = '';
    tag: string = '';
    description: string = '';
    created: Date | null = null;
    updated: Date | null = null;

    referenceToNote: Note | null = null;
}

export default Note;
