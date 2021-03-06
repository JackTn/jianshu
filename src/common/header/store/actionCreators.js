import * as headerActionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const ajaxGetList = (data) => ({
    type: headerActionTypes.HEADER_AJAX_GET_LIST,
    // data: fromJS(data.reduce((pre, cur) => [...pre, cur.userName], [])),
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const actionSearchFocus = () => ({
    type: headerActionTypes.HEADER_SEARCH_FOCUS
})

export const actionSearchBlur = () => ({
    type: headerActionTypes.HEADER_SEARCH_BLUR
})

export const actionMouseIn = () => ({
    type: headerActionTypes.HEADER_MOUSE_IN
})

export const actionMouseLeave = () => ({
    type: headerActionTypes.HEADER_MOUSE_LEAVE
})

export const actionChangePage = (pageNum) => ({
    type: headerActionTypes.HEADER_CHANGE_PAGE,
    pageNum
})

export const actionGetList = () => {
   return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=> {
        const data = res.data.list;
        dispatch(ajaxGetList(data)) 
       }).catch(()=> {
           console.log('error')
       })
   }
}