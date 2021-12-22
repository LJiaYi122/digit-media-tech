Page({

  /**
   * 页面的初始数据
   */
  data: {
    token:'',
    result:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token', //仅为示例，并非真实的接口地址
      data: {
        grant_type: 'client_credentials',
        client_id: 'QuvXGOObs3vkiq4PaLBfarSo',
        client_secret: 'Bp7a1xhkqS1czG4RU3363NhToStqclpx'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data.access_token)
        // 保存 获取到的 令牌 token 到我们的页面数据中
        that.setData({
          token:res.data.access_token
        })
        //
        // 读取本地图片文件 并且换成bytes类型，以满足百度数据请求的要求
        const fsm = wx.getFileSystemManager()
        fsm.readFile({
          filePath:'/images/animal2.jpg', // **这是我们的本地图片路径地址**
          success:function(res){
            var arrayBuffer = res.data
            var image = wx.arrayBufferToBase64(arrayBuffer)
            console.log(image,that.data.token)
            // ----------------------------------------------------
            // 以下是同学们需要掌握的重点内容
            wx.request({
              method:'POST',
              url: 'https://aip.baidubce.com/rest/2.0/image-classify/v1/animal', //仅为示例，并非真实的接口地址
              data: {
                access_token: that.data.token,
                image:image
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
              },             
              success (res) {
                console.log(res.data)
                that.setData({
                  result:res.data
                })
              }
            })
          }
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