import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Button, Collapse } from '@mui/material';
import { useState } from 'react';
import COLORS from '../../../colors';
import Note from '../../../entities/note/note';
import NoteTagChip from '../tag-chip/tag-chip';
import {
  CardTitleStyle, CardTitleTextStyle, DateRowStyle, DescriptionBlockStyle,
  ExpandButonStyle, NoteCardStyle, NoteContentStyle, StripeStyle, TopNoteCardStyle,
} from './style';
import EditableText from '../../../custom-mui-components/text-fields/editable-text/editable-text';


function NoteCard() {
  const color = COLORS.ICON_PURPLE;
  const note = new Note();
  note.title = 'Create task';
  note.tag = 'patsvr-56';
  note.description = 'no description';

  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState(note.description);

  function DateRow(props: {title: string, date: Date}) {
    return (
      <span style={DateRowStyle}>
        {`${props.title}: 02.02.2020 15:35`}
      </span>
    );
  }

  function TopNoteCard() {
    const [title, setTitle] = useState(note.title);

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

  function ExpandButton() {
    return (
      <Button
        onClick={() => setExpanded(!expanded)}
        startIcon={expanded ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
        sx={ExpandButonStyle}
      >
        description
      </Button>
    );
  }

  return (
    <div style={NoteCardStyle}>
      <div style={{ ...StripeStyle, backgroundColor: color }} />
      <div style={NoteContentStyle}>
        <TopNoteCard />
        <ExpandButton />
        <Collapse in={expanded} timeout="auto" unmountOnExit sx={DescriptionBlockStyle}>
          <EditableText
            value={description}
            setValue={setDescription}
            textStyle={DescriptionBlockStyle}
            width="100%"
            multiline
            onSave={() => {}}
          />
        </Collapse>
      </div>
    </div>
  );
}

export default NoteCard;
