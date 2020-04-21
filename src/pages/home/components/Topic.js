import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
    TopicWrapper,
    TopicItem} from '../style'

class Topic extends Component {
    render () {
        const {list} = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                            <TopicItem key={item.get('con_id')}>
                                <img 
                                    src={item.get('userAvatar')}
                                    className="topic-pic"
                                    alt=""/>
                                    {item.get('title')}
                            </TopicItem>
                        )
                    )
                }
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'topicList'])
    // list: state.getIn(['header', 'list'])
})

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, null)(Topic);