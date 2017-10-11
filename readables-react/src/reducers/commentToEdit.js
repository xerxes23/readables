import { CONTROL_EDIT_COMMENT_FORM } from '../actions/comments'

export const commentToEdit = (state = { id: '0' }, action) => {
    switch (action.type) {

        case CONTROL_EDIT_COMMENT_FORM:
            const { name, value } = action
            return {
            ...state,
            [name]: value
            }
      
        default:
            return state
    }
}
  