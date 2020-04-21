import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    padding-top: 30px;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    width: 625px;
    .banner-img {
        height: 270px;
        width: 625px;
    }
`

export const HomeRight = styled.div`
    float: right;
    width: 240px;
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    padding-right: 10px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    background: #f7f7f7;
    font-size: 14px;
    border:1px solid #dcdcdc;
    color: #000;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        width: 125px;
        height: 100px;
        float: right;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-weight: blod;
        color: #333;
        font-size: 18px;
    }
    .desc {
        line-height: 24px;
        fonr-size: 13px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`

`
export const RecommendItem = styled.div`

`