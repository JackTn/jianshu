import styled from 'styled-components';
import logoPic from '../../statics/logo.png'


export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #e7e7e7;
`
export const HeaderContainer = styled.div`
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
    position: relative;
`
export const Logo = styled.a.attrs({href: '/'})`
    display: block;
    height: 100%;
    width: 100px;
    background-image: url(${logoPic});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    top: 0;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    border: none;
    outline: none;
    border-radius: 19px;
    background-color: #eee;
    font-size: 15px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`
export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background-color: #ec6149;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        &.focused {
            color: #fff;
            background-color: #777;
        }
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    padding: 0 20px;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.div`
    cursor: pointer;
    font-size: 12px;
    float: right;
    .spin {
        display: block;
        float: left;
        margin-right: 4px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    line-height: 20px;
    font-size: 12px;
    color: #787878;
    border-radius: 3px;
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`