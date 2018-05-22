// pages/index/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theaterData:[],
    comingSoonData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getDetails(e){
   var id = e.currentTarget.dataset.id;
  wx.navigateTo({
    url: '../movie-details/movie-details?id='+ id,
  })
  },
  getMore(e){
    console.log(e);
    var typeId = e.currentTarget.dataset.type;
    if(typeId == 'intheater'){
      wx.navigateTo({
        url: '../more/more?typeId=' + typeId,
      })
    }else if (typeId == 'comingSoon'){
      wx.navigateTo({
        url: '../more/more?typeId=' + typeId,
      })
    }
  },
  search:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../search/search',
    })
  },
  onLoad: function (options) {
    wx.showToast({
      title: '正在获取数据',
      icon: 'loading',
      duration: 8000
    })
    wx.request({
      url: 'http://localhost/v2/movie/in_theaters?start=0&&count=10',
      method:'GET',
      header: {'content-type':'json' },
      success:(res)=>{
        wx.hideToast();
          this.setData({
            theaterData:res.data.subjects
          })
          console.log(this.data.theaterData)
      }
    })
    wx.request({
      url: 'http://localhost/v2/movie/coming_soon?start=0&&count=10',
      method: 'GET',
      header: { 'content-type': 'json' },
      success: (res) => {
        wx.hideToast();
        this.setData({
          comingSoonData: res.data.subjects
        })
        console.log(this.data.comingSoonData)
      }
    })
    
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