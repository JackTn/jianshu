import React, {Component} from 'react';
import List from './components/List'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight} from './style'


class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1586980258&di=0b207ef3599cb3420ef0038261133792&src=http://bbs.jooyoo.net/attachment/Mon_0905/24_65548_2835f8eaa933ff6.jpg" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft> 
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>   
            </HomeWrapper>
        )
    }
}

export default Home;