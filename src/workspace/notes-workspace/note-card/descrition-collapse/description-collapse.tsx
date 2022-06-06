import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Button, Collapse } from "@mui/material";
import { useState } from "react";
import { changeNote, disableNoteForOthers, enableNoteForOthers } from "../../../../service/websocket/websocket-sender";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { updateNote } from "../../../workspaceSlice";
import EditableText from '../../../../custom-mui-components/text-fields/editable-text';
import { ExpandButonStyle, DescriptionBlockStyle } from '../style';
import Note from '../../../../entities/note/note';
import WORKSPACE_CONTROLLER from '../../../../controller/WorkspaceController';


function DescriptionCollapse(props: {note: Note}) {
  const [expanded, setExpanded] = useState(false);
  const currentUser = useAppSelector(state => state.workspace.currentUser);

  const dispatch = useAppDispatch();

  const onUpdateDescription = (description: string) => {
    dispatch(updateNote({ ...props.note, description }));
  };

  const onSaveDescription = () => {
    changeNote({ ...props.note });
    enableNoteForOthers(props.note.id);
  };

  const onStartEditDescription = () => {
    disableNoteForOthers(props.note.id);
  };

  const setDisabledNote = () => {
    return WORKSPACE_CONTROLLER.setDisableElement(props.note, currentUser)
  };
  
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
      <>
    <ExpandButton />
        <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={DescriptionBlockStyle}
        >
        <EditableText
            value={props.note.description}
            setValue={onUpdateDescription}
            textStyle={DescriptionBlockStyle}
            onStartEdit={onStartEditDescription}
            disabled={setDisabledNote()}
            width="100%"
            multiline
            onSave={onSaveDescription}
        />
        </Collapse>
    </>
  )  
}

export default DescriptionCollapse;