import * as headerActionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    focused: false,
    list: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case headerActionTypes.HEADER_SEARCH_HOCUS:
            return state.set('focused', true);
        case headerActionTypes.HEADER_SEARCH_BLUR:
            return state.set('focused', false);
        case headerActionTypes.HEADER_AJAX_GET_LIST:
            return state.set('list', action.data);
        default:
            return state
    }
}