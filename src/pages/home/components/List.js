import React, {Component} from 'react'
import {ListItem, ListInfo} from '../style'

class List extends Component {
    render () {
        return (
            <ListItem>
                <img className='list-pic' src="123" alt=""/>
                <ListInfo>
                    <h3 className='title'>123</h3>
                    <p className='desc'>123</p>
                </ListInfo>
            </ListItem>
        )
    }
}

export default List;