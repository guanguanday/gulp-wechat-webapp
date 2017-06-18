//index.js
//获取应用实例
import {RequestJson} from "../../utils/request.js";
var config = require('../../config.js');



var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    // console.log(this.getCurrentPage());
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    RequestJson({
      url:"/api/tokens",
      type:"POST",
      success:res=>{
        console.log(res);
      }
    })
  }
})
