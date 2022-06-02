import { newBoard } from "../entities/board/board";

function boardDtoToEntityDto() {
    return {
        ...newBoard(),
    }
}

export default boardDtoToEntityDto;