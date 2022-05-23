import { useState } from "react";
import EditableText from "../../../../custom-mui-components/text-fields/editable-text";
import Note from "../../../../entities/note/note";
import { CardTitleStyle, CardTitleTextStyle, DateRowStyle, TopNoteCardStyle } from "./style";
import NoteTagChip from "./tag-chip";

function DateRow(props: {title: string, date: Date}) {
    return (
      <span style={DateRowStyle}>
        {`${props.title}: 02.02.2020 15:35`}
      </span>
    );
}

function TopNoteCard() {
    const note = new Note();
    note.title = 'Create task';
    note.tag = 'patsvr-56';
    note.description = 'no description';
    
    const [title, setTitle] = useState('Create task');

    return (
      <div style={TopNoteCardStyle}>
        <div style={CardTitleStyle}>
          <EditableText
            value={title}
            textStyle={CardTitleTextStyle}
            setValue={setTitle}
            onSave={() => { }}
            multiline
            width="100%"
          />
          <NoteTagChip label={note.tag} />
        </div>
        <DateRow title="Created" date={note.created} />
        <DateRow title="Updated" date={note.updated} />
      </div>
    );
}

export default TopNoteCard;
