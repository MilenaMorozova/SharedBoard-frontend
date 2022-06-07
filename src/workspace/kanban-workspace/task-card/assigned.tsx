import WORKSPACE_CONTROLLER from '../../../controller/WorkspaceController';
import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import Note from '../../../entities/note/note';
import { changeNote, disableNoteForOthers, enableNoteForOthers } from '../../../service/websocket/websocket-sender';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { store } from '../../../store/store';
import { ReferenceStyle } from '../../notes-workspace/note-card/style';
import { updateNote } from '../../workspaceSlice';


function Assigned(props: {note: Note}) {
  const currentUser = useAppSelector(state => state.workspace.currentUser);

  const dispatch = useAppDispatch();

  const getValue = (text: string) => ((text !== '') ? text : 'none');

  const onSave = () => {
    const { notes } = store.getState().workspace;

    changeNote({ ...props.note });
    enableNoteForOthers(props.note.id);
  };

  const onStartEditing = () => {
    disableNoteForOthers(props.note.id);
  };

  const onUpdateAssigned = (assigned: string) => {
    dispatch(updateNote({ ...props.note, assigned }));
  };

  const setDisabledAssigned = () => {
    return WORKSPACE_CONTROLLER.setDisableElement(props.note, currentUser)
  };;

  return (
    <div style={ReferenceStyle}>
      Assigned:{' '}
      <EditableText
        value={props.note.refTag}
        setValue={onUpdateAssigned}
        getValue={getValue}
        onStartEdit={onStartEditing}
        textStyle={ReferenceStyle}
        disabled={setDisabledAssigned()}
        width="100%"
        onSave={onSave}
      />
    </div>
  );
}

export default Assigned;
