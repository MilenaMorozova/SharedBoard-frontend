import Note from "../entities/note/note";

export function noteDtoToNoteEntity(noteDto: {[key: string]: any}): Note {
    return {
        id: noteDto.id,
        title: noteDto.title,
        tag: noteDto.full_tag,
        description: noteDto.description,
        created: new Date(noteDto.created),
        updated: new Date(noteDto.updated),
        color: noteDto.color,
        posX: noteDto.position_x,
        posY: noteDto.position_y,
        refTag: noteDto.link_to,
        blockedBy: noteDto.blocked_by,
    }
}

export function noteEntityToNoteDto(note: Note): {[key: string]: any} {
    return {
         "id": note.id,
         "title": note.title,
         "description": note.description,
         "position_x": note.posX,
         "position_y": note.posY,
         "link_to": note.refTag,
    }
}