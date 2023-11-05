// pages/mysql/mysql.js
Page({
  data: {
    formData: {
      dbname: '1',
      dbip: '2',
      dbport: '3',
      username: '4',
      password: '5'
    }
  },
  onLoad() {
    this.setData({
      [`formData.password`]: '1'
    })
  },
  formInputChange() {}
})