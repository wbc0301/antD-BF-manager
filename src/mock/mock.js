import Mock from 'mockjs'
//使用mockjs模拟数据
Mock.mock(/\/api\/list\.json/, {
  "code": 0,
  "msg": "ok",
  "result": {
    "list|3": [
      {
        "id|+1": 1,
        "key|+1": 0,
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

Mock.mock(/\/open_city/, {
  "code": 0,
  "msg": "ok",
  "result": {
    "page": 1,
    "page_size": 10,
    "total_count": 60,
    "page_count": 6,
    "item_list|10": [
      {
        "id|+1": 1,
        "key|+1": 0,
        "name": "@city",//随机生成城市
        "mode|1-2": 1,
        "open_mode|1-2": 1,
        "franchisee_id": 77,
        "franchisee_name": "松果自营",
        "city_admins|1-2": [{
          "user_name": "@cname",
          "user_id|+1":10001
        }],
        "open_time": "@datetime",
        "sys_user_name": "@cname",
        "update_time": 1581055648749

      }
    ]
  }
});