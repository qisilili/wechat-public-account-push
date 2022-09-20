export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxa33d1505c9912883",
  // 公众号APP_SECRET
  APP_SECRET: "e34fb3f22ab7d522f73ad0fc5fb2d7ef",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: false,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },
  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
     USERS: ["oCxia5unV4uQjAJDWsv-xYInmiSs"]

      // 想要发送的人的名字
      name: "潇潇哥哥",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "wxid_bouhz949cj2v22",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "bwgrwHu8W4dI6YeJA2tSNJujLL_e-aGl6nJhv1ETyOQ",
      // 所在省份
      province: "四川",
      // 所在城市
      city: "眉山",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '12-27',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "哥哥", "year": "2000", "date": "03-26"},
        {"type": "生日", "name": "小兔子", "year": "1999", "date": "10-14"},
        {"type": "节日", "name": "被搭讪纪念日", "year": "2022", "date": "06-12"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2022-03-26"},
      ]
  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "",
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */
  SLOT_LIST: [
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
    // 你可以不断按格式往下增加
    // ...
  ],


}
