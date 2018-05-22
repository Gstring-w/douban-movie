// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[]
  },
  getDetails(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie-details/movie-details?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  searchInput: function (e){
    console.log(e);
    var value = e.detail.value;
    var url = "http://localhost/v2/movie/search?q=" + value;
      wx.request({
        url,
        method:'GET',
        header :{'content-type' : 'json'},
        success : (res)=>{
          console.log(res);
          var arr = res.data.subjects;
          this.setData({
            dataArr: arr
          })
          console.log(this.data.dataArr)
        }
      })
  },
  backIndex:function (){
      wx.navigateBack({
        delta:1
      })
  },
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