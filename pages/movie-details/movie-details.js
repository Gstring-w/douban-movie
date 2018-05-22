// pages/movie-details/movie-details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[],
    scroll:true
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    wx.showToast({
      title: '正在获取数据',
      icon: 'loading',
      duration: 8000
    })
    let id = options.id;
    wx.request({
      url: 'http://localhost/v2/movie/subject/' + id,
      method: 'GET',
      header: { 'content-type': 'json' },
      success: (res) =>{
        wx.hideToast();
        this.setData({
            details:res.data
        })
        console.log(this.data.details);
      }
   })
  },
  tr(){
    console.log(11)
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