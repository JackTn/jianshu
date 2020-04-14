import React, {Component}  from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { headerAction } from './store'
import {
    HeaderWrapper,
    HeaderContainer, 
    Logo, 
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    SearchWrapper} from './style'

class Header extends Component {
    getListArea () {
        const {focused, list} = this.props
        if(focused) {
            return (
                <SearchInfo>
                <SearchInfoTitle>热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch></SearchInfoTitle>
                <SearchInfoList>
                    {
                        list.map((item, index) => {
                            return (
                                <SearchInfoItem key={item + index}>{item}</SearchInfoItem>
                            )
                        })
                    }
                </SearchInfoList>
            </SearchInfo>
            )
        } else {
            return null
        }
    }
   render () {
    const {focused, handleInputFocuse, handleInputBlur} = this.props
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocuse}
                                onBlur={handleInputBlur}
                                ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'iconfont focused' : 'iconfont'}>&#xe62a;</span>
                       {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'><span className="iconfont">&#xe6e5;</span>写文章</Button>    
                    <Button className='reg'>注册</Button>  
                </Addition>    
            </HeaderContainer>
        </HeaderWrapper>
        )
   }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocuse(){
            const action = headerAction.actionSearchFocus();
            const ajaxAction = headerAction.actionGetList();
            dispatch(action);
            dispatch(ajaxAction);
        },
        handleInputBlur() {
            const action = headerAction.actionSearchBlur();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);