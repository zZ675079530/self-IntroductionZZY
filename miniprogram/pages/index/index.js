// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    userInfo:[
      {id:"姓名：", msg:"老张"},
      {id:"性别：", msg: "男"},
      {id:"学号：", msg:"171612149"},
      {id:"邮箱：", msg:"675079530@qq.com"},
      {id:"专业：", msg:"计科3"}
    ],
    msg:["前端","后端","服务器"],
    detail:[
      " 详细信息1111",
      " 详细信息2222",
      " 详细信息3333",
      " 详细信息4444"
    ]
  },
  /**
   * 复制
   */
  copyDate(e){
    const temp = e.currentTarget.dataset.temp
    wx.setClipboardData({
      data: temp,
      success(res){
        wx.showToast({
          title:'复制成功',
          icon:'success'
        })
      }
    })
  },
  /**
   * 抽屉开关 css
   */
  showModal(e) {
    console.log("123")
    this.setData({
      modalName: e.currentTarget.dataset.target,
      currentId: e.currentTarget.dataset.id
    });
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})