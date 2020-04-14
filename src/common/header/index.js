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
        const {focused, list, handleMouseEnter, handleMouseLeave, mouseIn, totalPage, pageNum, handleChangePage} = this.props
        const jsList = list.toJS()
        const searchInfoList = []
        if(jsList.length) {
            for(let i = ((pageNum - 1) * 10); i< pageNum * 10; i++) {
                jsList[i] && searchInfoList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=> handleChangePage(pageNum, totalPage, this.spinIco )}>
                            <span ref={(icon)=>{this.spinIco = icon}} className="iconfont spin">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {searchInfoList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
   render () {
    const {list, focused, handleInputFocuse, handleInputBlur} = this.props
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
                                onFocus={()=>handleInputFocuse(list)}
                                onBlur={handleInputBlur}
                                ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe62a;</span>
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
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        totalPage: state.getIn(['header', 'totalPage']),
        pageNum: state.getIn(['header', 'pageNum']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocuse(list){
            list.size === 0 && dispatch(headerAction.actionGetList());
            dispatch(headerAction.actionSearchFocus());
        },
        handleInputBlur() {
            dispatch(headerAction.actionSearchBlur())
        },
        handleMouseEnter(){
            dispatch(headerAction.actionMouseIn())
        },
        handleMouseLeave(){
            dispatch(headerAction.actionMouseLeave())
        },
        handleChangePage(pageNum, totalPage, spin){
            let degs = spin.style.transform.replace(/[^0-9]/ig, '')
            if(degs) {
                degs = parseInt(degs, 10)
            } else {
                degs = 0;
            }
            spin.style.transform = `rotate(${degs + 360}deg)`
            if(pageNum < totalPage) {
                dispatch(headerAction.actionChangePage(pageNum + 1))
            } else {
                dispatch(headerAction.actionChangePage(1))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);