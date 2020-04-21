// import * as headerActionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    topicList: [
            {
                "online": "12万",
                "ruleset_id": 6302,
                "remark": 5,
                "category": "舞蹈",
                "icon": "https://rpic.douyucdn.cn/asrpic/200414/5371800_1614.png/dy1",
                "jump_type": 2,
                "bid": 6484,
                "userName": "夏喵娜KINA酱",
                "description": "直播通知q群：3群：515891409 直播时间：12点-16点 21点-0点 欢迎进来的小哥哥挂牌子\n",
                "userAvatar": "https://apic.douyucdn.cn/upload/avatar_v3/201905/e248460123ac40eb816707be8ca5a64d_middle.jpg?rltime",
                "jump_to": "5371800",
                "title": "这个小姐姐有点甜",
                "con_id": 84169,
                "app_id": "",
                "app_name": "",
                "tags": [],
                "vipId": 0,
                "bweight": 0
            },
            {
                "online": "21万",
                "ruleset_id": 6304,
                "remark": 5,
                "category": "音乐、颜值（横屏）",
                "icon": "https://rpic.douyucdn.cn/live-cover/roomCover/2020/04/13/60a4ec3d32497b2d2886c995320c7382_big.jpg/dy1",
                "jump_type": 2,
                "bid": 6486,
                "userName": "程心曲",
                "description": "解忧邮箱：925290846@qq.com",
                "userAvatar": "https://apic.douyucdn.cn/upload/avatar_v3/202004/268fe471c82645e2ab654f6702c90c33_middle.jpg?rltime",
                "jump_to": "3544169",
                "title": "今晚8点播",
                "con_id": 84403,
                "app_id": "",
                "app_name": "",
                "tags": [],
                "vipId": 0,
                "bweight": 0
            },
            {
                "online": "12万",
                "ruleset_id": 6302,
                "remark": 5,
                "category": "音乐、颜值（横屏）",
                "icon": "https://rpic.douyucdn.cn/asrpic/200414/6529246_1615.png/dy1",
                "jump_type": 2,
                "bid": 6484,
                "userName": "歌王维克多",
                "description": "大家好我直播了",
                "userAvatar": "https://apic.douyucdn.cn/upload/avatar_v3/201907/5ef4146380034b01bc2d53a4910d65ce_middle.jpg?rltime",
                "jump_to": "6529246",
                "title": "绝境求生灵魂艺术家",
                "con_id": 84204,
                "app_id": "",
                "app_name": "",
                "tags": [],
                "vipId": 0,
                "bweight": 0
            },
            {
                "online": "2万",
                "ruleset_id": 6302,
                "remark": 5,
                "category": "舞蹈",
                "icon": "https://rpic.douyucdn.cn/asrpic/200414/7664837_1615.png/dy1",
                "jump_type": 2,
                "bid": 6484,
                "userName": "BJ智妮",
                "description": "身高：164 处女座♍️ 现居深圳  为了爱好和梦想",
                "userAvatar": "https://apic.douyucdn.cn/upload/avatar_v3/201911/5fc1120065c843b9a9148c9a35873feb_middle.jpg?rltime",
                "jump_to": "7664837",
                "title": "跳舞顶不住的短发小姐姐",
                "con_id": 84243,
                "app_id": "",
                "app_name": "",
                "tags": [],
                "vipId": 0,
                "bweight": 0
            },
            {
                "online": "17万",
                "ruleset_id": 6302,
                "remark": 5,
                "category": "音乐、颜值（横屏）",
                "icon": "https://rpic.douyucdn.cn/live-cover/appCovers/2019/12/14/6704438_20191214193250_small.jpg/dy1",
                "jump_type": 2,
                "bid": 6484,
                "userName": "爱上女团",
                "description": "直播时间：\n每天下午1点到6点\n        晚上8点到12点\n暂定每周周六休息，有变化我们会通知大家的哟……",
                "userAvatar": "https://apic.douyucdn.cn/upload/avatar_v3/201911/61ddc17cbef84787a59e122e80df87df_middle.jpg?rltime",
                "jump_to": "6704438",
                "title": "新惩罚，新玩法",
                "con_id": 84089,
                "app_id": "",
                "app_name": "",
                "tags": [],
                "vipId": 0,
                "bweight": 0
            },
            {
                "online": "6万",
                "ruleset_id": 6302,
                "remark": 5,
                "category": "音乐、颜值（横屏）",
                "icon": "https://rpic.douyucdn.cn/live-cover/appCovers/2020/04/01/7059028_20200401024146_small.jpg/dy1",
                "jump_type": 2,
                "bid": 6484,
                "userName": "果汁儿zZ",
                "description": "周一到周六中午12点-5点 不定时加班\n周末休息随缘播～谢谢大家的喜爱和支持",
                "userAvatar": "https://apic.douyucdn.cn/upload/avatar_v3/202003/847e7bd8b0a44997befd91091877b8af_middle.jpg?rltime",
                "jump_to": "7059028",
                "title": "今天有点低血糖 有点无力大家谅解",
                "con_id": 84242,
                "app_id": "",
                "app_name": "",
                "tags": [],
                "vipId": 0,
                "bweight": 0
            }
        ]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        
        default:
            return state
    }
}