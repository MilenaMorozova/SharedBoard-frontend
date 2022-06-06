import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import Note from '../../../entities/note/note';
import { CardColorStyle } from './style';
import {
  CardTitleStyle, CardTitleTextStyle, DateRowStyle, TopNoteCardStyle,
} from './chip-note-card/style';
import NoteTagChip from './chip-note-card/tag-chip';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { updateNote } from '../../workspaceSlice';
import { changeNote, disableNoteForOthers, enableNoteForOthers } from '../../../service/websocket/websocket-sender';
import { setDisableElement } from './note-card';

function DateRow(props: {title: string, date: Date}) {
  return (
    <span style={DateRowStyle}>
      {`${props.title}: ${props.date.toLocaleString()}`}
    </span>
  );
}

function TopNoteCard(props: {note: Note}) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.workspace.currentUser);

  const setDisabledTitle = () => setDisableElement(props.note, currentUser);

  const onStartEditTitle = () => {
    disableNoteForOthers(props.note.id);
  };

  const onSaveTitle = () => {
    changeNote({ ...props.note });
    enableNoteForOthers(props.note.id);
  };

  const onUpdateTitle = (title: string) => {
    dispatch(updateNote({ ...props.note, title }));
  };

  return (
    <div style={TopNoteCardStyle}>
      <div style={CardTitleStyle}>
        <EditableText
          onStartEdit={onStartEditTitle}
          disabled={setDisabledTitle()}
          value={props.note.title}
          textStyle={CardTitleTextStyle}
          setValue={onUpdateTitle}
          onSave={onSaveTitle}
          multiline
          width="100%"
        />
        <NoteTagChip
          label={props.note.tag}
          sx={{ color: props.note.color, backgroundColor: CardColorStyle[props.note.color] }}
        />
      </div>
      <DateRow title="Created" date={props.note.created} />
      <DateRow title="Updated" date={props.note.updated} />
    </div>
  );
}

export default TopNoteCard;
