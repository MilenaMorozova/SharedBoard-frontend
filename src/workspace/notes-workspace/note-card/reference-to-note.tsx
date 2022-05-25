import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import Note from '../../../entities/note/note';
import { useAppDispatch } from '../../../store/hooks';
import { store } from '../../../store/store';
import { updateArrows, updateNote } from '../../workspaceSlice';
import { ReferenceStyle } from './style';


function Reference(props: {note: Note}) {
  const dispatch = useAppDispatch();

  const getValue = (text: string) => ((text !== '') ? text : 'none');

  const onSave = () => {
    const { notes } = store.getState().workspace;
    dispatch(updateArrows());

    if (props.note.refTag === '') {
      return;
    }
    if (notes.find((note) => note.tag === props.note.refTag) === undefined) {
      alert('No such tag'); // eslint-disable-line  no-alert
    }
  };

  const onUpdateTag = (refTag: string) => {
    dispatch(updateNote({ ...props.note, refTag }));
  };

  return (
    <div style={ReferenceStyle}>
      Reference to:{' '}
      <EditableText
        value={props.note.refTag}
        setValue={onUpdateTag}
        getValue={getValue}
        textStyle={ReferenceStyle}
        width="100%"
        onSave={onSave}
      />
    </div>
  );
}

export default Reference;
