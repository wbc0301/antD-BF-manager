import Mock from 'mockjs'
//使用mockjs模拟数据
Mock.mock(/\.json/, {
  "code": 0,
  "message": "",
  "result": {
    "list|10": [
      {
        "id|+1": 1,
        "key|+1": 1,
        "username": "@cname",//随机生成中文名字
        "sex|1-2": 1,
        "state|1-5": 1,
        "interest|1-8": 1,
        "isMarried|0-1": 1,
        "birthday": '2000-01-01',
        "address": '北京八维',
        "time": '08:08:08'
      }
    ]
  }
});