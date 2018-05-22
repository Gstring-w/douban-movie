// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intheater:true,
    comingSoon:false,
    typeId:{start:0,count:5,data:[]},
    typeId1: { start: 0, count: 5, data: [] }
  },
  getDetails(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie-details/movie-details?id=' + id,
    })
  },
  loadMore(e){
    var _type = e.target.dataset.id;
    this.getData(_type);
    console.log(11)
  },
  changeNav(e){
    console.log(e);
    var _type = e.target.dataset.id;
    console.log(_type);
    if(_type == 'intheater'){
      this.setData({
        intheater:false,
        comingSoon:true,
      })
    }else if(_type == 'comingSoon'){
      this.setData({
        intheater: true,
        comingSoon: false,
      })
    }
    if (this.data.typeId.data.length == 0 || this.data.typeId1.data.length == 0){
      this.getData(_type);
    }
  },
  getData(typeId){
    console.log(typeId)
    var start = this.data.typeId.start || 0;
    var start1 = this.data.typeId1.start || 0;
    var count = 5;
    if(typeId == 'intheater'){
      wx.showToast({
        title: '正在获取数据',
        icon: 'loading',
        duration: 8000
      })
      wx.request({
        url: 'http://localhost/v2/movie/in_theaters?start=' + start + '&&count='+ count,
        method: 'GET',
        header: { 'content-type': 'json' },
        success:(res)=>{
          wx.hideToast();
          console.log(res);
          start += res.data.subjects.length;
          var arr = this.data.typeId.data
          res.data.subjects.forEach((item)=>{
                arr.push(item)
          })
          this.setData({
            typeId:{
              start:start,
              count:5,
              data:arr
            }
          })
          console.log(this.data.typeId.data)
        }
      })
    } else if (typeId == 'comingSoon'){
      wx.showToast({
        title: '正在获取数据',
        icon: 'loading',
        duration: 8000
      })
      wx.request({
        url: 'http://localhost/v2/movie/coming_soon?start=' + start + '&&count=' + count,
        method: 'GET',
        header: { 'content-type': 'json' },
        success: (res) => {
          wx.hideToast();
          start1 += res.data.subjects.length;
          var arr = this.data.typeId1.data
          res.data.subjects.forEach((item) => {
            arr.push(item)
          })
          this.setData({
            typeId1: {
              start: start1,
              count: 5,
              data: arr
            }
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let _intheater;
    let _comingSoon;
    let _typeId = options.typeId || 'intheater';
    if(options.typeId == 'intheater' ){
       _intheater = false;
       _comingSoon = true;
    } else if (options.typeId == 'comingSoon' ){
        _intheater = true;
        _comingSoon = false;
    }
    this.setData({
        intheater : _intheater,
        comingSoon : _comingSoon
    })
    this.getData(_typeId);
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