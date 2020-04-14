import * as headerActionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    totalPage: 1,
    pageNum: 1,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case headerActionTypes.HEADER_SEARCH_FOCUS:
            return state.set('focused', true)
        case headerActionTypes.HEADER_SEARCH_BLUR:
            return state.set('focused', false);
        case headerActionTypes.HEADER_AJAX_GET_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case headerActionTypes.HEADER_MOUSE_IN:
            return state.set('mouseIn', true);
        case headerActionTypes.HEADER_MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case headerActionTypes.HEADER_CHANGE_PAGE:
            return state.set('pageNum', action.pageNum);
        default:
            return state
    }
}