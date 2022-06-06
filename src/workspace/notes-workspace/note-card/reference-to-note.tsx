import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import Note from '../../../entities/note/note';
import { changeNote, disableNoteForOthers, enableNoteForOthers } from '../../../service/websocket/websocket-sender';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { store } from '../../../store/store';
import { updateArrows, updateNote } from '../../workspaceSlice';
import { setDisableElement } from './note-card';
import { ReferenceStyle } from './style';


function Reference(props: {note: Note}) {
  const currentUser = useAppSelector(state => state.workspace.currentUser);

  const dispatch = useAppDispatch();

  const getValue = (text: string) => ((text !== '') ? text : 'none');

  const onSave = () => {
    const { notes } = store.getState().workspace;
    dispatch(updateArrows());

    changeNote({ ...props.note });
    enableNoteForOthers(props.note.id);

    if (props.note.refTag === '') {
      return;
    }
    if (notes.find((note) => note.tag === props.note.refTag) === undefined) {
      alert('No such tag'); // eslint-disable-line  no-alert
    }
  };

  const onStartEditing = () => {
    disableNoteForOthers(props.note.id);
  };

  const onUpdateTag = (refTag: string) => {
    dispatch(updateNote({ ...props.note, refTag }));
  };

  const setDisabledRef = () => setDisableElement(props.note, currentUser);

  return (
    <div style={ReferenceStyle}>
      Reference to:{' '}
      <EditableText
        value={props.note.refTag}
        setValue={onUpdateTag}
        getValue={getValue}
        onStartEdit={onStartEditing}
        textStyle={ReferenceStyle}
        disabled={setDisabledRef()}
        width="100%"
        onSave={onSave}
      />
    </div>
  );
}

export default Reference;
