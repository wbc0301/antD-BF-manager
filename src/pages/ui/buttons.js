import React from 'react';
import {Card, Button} from 'antd';
import './ui.less';

export default class Buttons extends React.Component{
  render() {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap"> 
          <Button type="primary">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
        </Card>

        <Card title="图形按钮"  className="card-wrap"> 
          <Button type="primary" icon="download" >下载</Button>
          <Button type="primary" icon="delete" >删除</Button>
        </Card>

      </div>
    )
  }
}