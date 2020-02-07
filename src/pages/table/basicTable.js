import React from 'react';
import { Card, Table, Tag, Divider } from 'antd';
import './../ui/ui.less';

import axios from './../../axios';
// import './../../mock/mock'; // 可以放在入口文件中引入

export default class BasicTable extends React.Component {

  componentWillMount() {
    // 表格1 数据
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    this.setState({ data });

    
    this.request();
  }

  // 动态获取mock数据
  request = () => {
    axios.ajax({ url: '/api/list.json', data: { isShowLoading: true } }).then(res => {
      console.log(res);
      const dataSource2 = res.result.list;
      this.setState({ dataSource2 }); // 表格2 数据
    })
  }

  onRowClick = (record, index) => {
    this.setState({
      selectedRowKeys: [index], // 选中项的 key 数组
      selectedItem: record // 这里获取选中项数据
    })
  }

  render() {
    // 表格1 每列
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];
    // 表格2 每列
    const columns2 = [
      {
        title: 'id',
        key: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'username',
        dataIndex: 'username'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        render(sex, a, b) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        key: 'interest',
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc];
        }
      },
      {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time'
      }
    ]

    const { selectedRowKeys } = this.state
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }

    return (
      <div>
        <Card title="基础表格" className="card-wrap">
          <Table
            columns={columns}
            dataSource={this.state.data}
            pagination={false}
          >
          </Table>
        </Card>

        <Card title="动态数据渲染表格-Mock" className="card-wrap">
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>

        <Card title="表格-单选" className="card-wrap">
          <Table
            bordered
            rowSelection={rowSelection}
            columns={columns2}
            dataSource={this.state.dataSource2}
            pagination={false}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record,index);
                }
              }
            }}
          />
        </Card>

        <Card title="表格-复选" className="card-wrap">
          <Table
            bordered
            rowSelection={{ type: 'checkbox' }}
            columns={columns2}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}
