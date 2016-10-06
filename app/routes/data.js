const express = require('express');
const fs = require('fs');
const router = express.Reouter();
const path = './model/data';

// 读取数据模块
// data/read?type=it.json
router.get('/read', (req, res, next) => {
  const type = req.param('type') || '';
  fs.readFile(path + type + '.json', (err, data) => {
    if(err) {
      return res.send({
        status: 0,
        info: '读取文件出现异常'
      });
    }
    
  })
});

module.exports = router;
