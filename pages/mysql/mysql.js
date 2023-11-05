// pages/mysql/mysql.js
Page({
  data: {
    formData: {
      dbname: '',
      dbip: '',
      dbport: '',
      username: '',
      password: ''
    },
    agree: false,
  },
  onLoad() {
    this.setData({
      [`formData.password`]: '1'
    })
  },
  formInputChange(event) {
    const inputType = event.currentTarget.dataset.key
    this.setData({
      [`formData.${inputType}`]: event.detail.value
    })
  },
  bindAgreeChange(e) {
    const agree = e.detail.value.length > 0
    this.setData({
      agree: agree
    })
  },
  requestMysql() {
    // TODO1: 校验agree 

    if (!this.data.agree) {
      wx.showToast({
        title: '请先同意声明',
        icon: 'error'
      })
    }
    // TODO2: 请求后端接口，完成账号申请
    const result = {
      dbname: 'tuchuang_test',
      dbip: '192.168.151.131',
      dbport: '3306',
      username: 'tuchuang',
      password: '!QAZ2wsx'
    }
    console.log('触发')

    this.setData({
      'formData.dbname': result.dbname,
      'formData.dbip': result.dbip,
      'formData.dbport': result.dbport,
      'formData.username': result.username,
      'formData.password': result.password
    })
  }
})