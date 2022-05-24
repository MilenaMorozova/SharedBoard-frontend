import { useState } from "react";
import EditableText from "../../../custom-mui-components/text-fields/editable-text";
import Note from "../../../entities/note/note";
import { ReferenceStyle } from "./style";


function Reference(props: {refNote: Note | null}) {
    const [refTag, setRefTag] = useState(props.refNote === null ? 'none' : props.refNote.tag);
    
    const getValue = (text: string) => {
        return (text !== '') ? text : "none";
    }

    const onSave = () => {};

    return (
        <div style={ReferenceStyle}>
            Reference to:{' '}
            <EditableText 
                value={refTag} 
                setValue={setRefTag}
                getValue={getValue}
                textStyle={ReferenceStyle} 
                width={"100%"} 
                onSave={onSave}/>
        </div>
    );
}

export default Reference;
