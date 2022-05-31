import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import Note from '../../../entities/note/note';
import { CardColorStyle } from './style';
import {
  CardTitleStyle, CardTitleTextStyle, DateRowStyle, TopNoteCardStyle,
} from './chip-note-card/style';
import NoteTagChip from './chip-note-card/tag-chip';
import { useAppDispatch } from '../../../store/hooks';
import { updateNote } from '../../workspaceSlice';

function DateRow(props: {title: string, date: Date}) {
  return (
    <span style={DateRowStyle}>
      {`${props.title}: 02.02.2020 15:35`}
    </span>
  );
}

function TopNoteCard(props: {note: Note}) {
  const dispatch = useAppDispatch();

  const onSaveTitle = () => {};

  const onUpdateTitle = (title: string) => {
    dispatch(updateNote({ ...props.note, title }));
  };

  return (
    <div style={TopNoteCardStyle}>
      <div style={CardTitleStyle}>
        <EditableText
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
