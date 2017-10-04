import { UPDATE_SORT_METHOD } from '../actions/posts'

export const sortMethod = (state = 'score', action) => {
    switch (action.type) {

        case UPDATE_SORT_METHOD:
            return action.method
      
        default:
            return state
    }
}
  