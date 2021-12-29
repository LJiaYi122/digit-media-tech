Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_temp:'',
    region:['广东省', '广州市', '海珠区']
  },
  regionchange:function(e){
    var that = this
    console.log(e.detail.value)
    console.log(e.detail.value[0]+e.detail.value[1]+e.detail.value[2])
    this.setData({
      region:e.detail.value
    })
    wx.request({
      url: 'https://restapi.amap.com/v3/geocode/geo?parameters', //地理编码 API 服务地址
      data: {
        key: '1a8b4a8f8eacf6e72af8287289e0e270',
        address: e.detail.value[0]+e.detail.value[1]+e.detail.value[2]
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) { // get status : 200
        console.log(res.data.geocodes[0].location)
        wx.request({
          url: 'https://devapi.qweather.com/v7/weather/now?', //仅为示例，并非真实的接口地址
          method:'GET', //因为GET是默认的 所以可以不写
          data: {
            key: 'bcc9e2300f5945da8dbdf541135ccbb2',
            location: res.data.geocodes[0].location //这个数据是广州南方学院的，现在想让用户输入（产品需求）
          },
          header: {
            'content-type': ' application/json' // 默认值
          },
          success (res) {
            console.log(res.data.now)
            that.setData({
              page_temp:res.data.now
            })
          }
        })

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this 
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?', //仅为示例，并非真实的接口地址
      method:'GET', //因为GET是默认的 所以可以不写
      data: {
        key: 'bcc9e2300f5945da8dbdf541135ccbb2',
        location: '113.678,23.628' //这个数据是广州南方学院的，现在想让用户输入（产品需求）
      },
      header: {
        'content-type': ' application/json' // 默认值
      },
      success (res) {
        console.log(res.data.now)
        that.setData({
          page_temp:res.data.now
        })
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