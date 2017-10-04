import { DISPLAY_DELETE_MODAL, SET_POST_ID_TO_DELETE_MODAL} from '../actions/posts'


export const deletePostModal = (state = false, action) => {
    switch (action.type) {
      case DISPLAY_DELETE_MODAL:
        const { active } = action
        return {
          ...state,
          isActive: active
        }
      case SET_POST_ID_TO_DELETE_MODAL:
        const { postId } = action
        return {
          ...state,
          postId
        }
      default:
        return state
    }
  }
  