import * as headerActionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const ajaxGetList = (data) => ({
    type: headerActionTypes.HEADER_AJAX_GET_LIST,
    data: fromJS(data.reduce((pre, cur) => [...pre, cur.nickname], []))
})

export const actionSearchFocus = () => ({
    type: headerActionTypes.HEADER_SEARCH_HOCUS
})

export const actionSearchBlur = () => ({
    type: headerActionTypes.HEADER_SEARCH_BLUR
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