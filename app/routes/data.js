const express = require('express');
const fs = require('fs');
const router = express.Router();
const PATH = 'app/model/data/';

// 读取数据模块，供客户端调用
// 查询接口，token校验
// 公共接口，无需校验
// data/read?type=config
router.get('/read', (req, res, next) => {
  const type = req.query.type || '';
  fs.readFile(PATH + type + '.json', (err, data) => {
    if(err) {
      return res.send({
        status: 0,
        info: '读取文件出现异常'
      });
    }
    const obj = JSON.parse(data.toString());
    return res.json({
      status: 1,
      data: obj.data
    });
  });
});

// 数据存储模块
router.get('/write', (req, res, next) => {
  if(!req.session.user) {
    return res.send({
      status: 0,
      info: '未鉴权认证，请先登录'
    });
  }
  const type = req.query.type || '';
  const url = req.query.url || '';
  const title = req.query.title || '';
  const img = req.query.img || '';
  if(!type || !url || !title || !img) {
    return res.send({
      status: 0,
      info: '提交的字段不全'
    });
  }
  let filePath = PATH + type + '.json';
  // 读取文件
  fs.readFile(PATH + type + '.json', (err, data) => {
    if(err) {
      return res.send({
        status: 0,
        info: '读取数据失败',
      });
    }
    let arr = JSON.parse(data.toString());
    let obj = {
      img: img,
      url: url,
      title: title,
      id: guidGenerate(),
      time: new Date()
    };
    arr.splice(0, 0, obj);
    console.log(arr, obj);
    // 写入文件
    let newData = JSON.stringify(arr);
    fs.writeFile(filePath, newData, (err) => {
      if(err) {
        return res.send({
          status: 0,
          info: '写入文件失败'
        });
      }
      return res.send({
        status: 1,
        info: obj
      });
    });
  });
});

// 阅读模块写入接口
router.post('/write_config', (req, res, next) => {
  // TODO: 对数据进行校验
  // 防XSS攻击 require('XSS')
  const data = req.body.data;
  const obj = JSON.parse(data);
  const newData = JSON.stringify(obj);

  fs.writeFile(PATH + 'config.json', newData, (err) => {
    if(err) {
      return res.send({
        status: 0,
        info: '写入文件失败'
      });
    }
    return res.send({
      status: 1,
      info: obj
    });
  });

});

// 登录页面路由
router.get('/login', (req, res, next) => {
  res.render('login', { title: '登录后台管理系统' });
});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // TODO: 对用户名、密码进行校验
  // XSS处理、判空
  //密码加密，md5加密（password + 随机字符）
  if(username === 'admin' && password === '123456') {
    req.session.user = {
      username: username,
    };
    return res.send({
      status: 1
    });
  }
  res.send({
    status: 0,
    info: '登录系统失败'
  });

});

// guid函数
function guidGenerate() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
}

module.exports = router;
