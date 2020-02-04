import React from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';

export default class Modals extends React.Component {
  state = {visible: false};

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };



  render() {
    return (
      <div>
        <Card title="模态框" className="card-wrap">
          <Button type="primary" onClick={this.showModal}>Imooc</Button>
          <Button>Imooc</Button>
        </Card>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          // style={{ top: 20 }}  // 距顶部20px
          centered // 水平垂直居中
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

        <Button onClick={confirm}>Confirm</Button>


      </div>
    )
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
    centered: true, // 水平垂直居中
    onOk() {
      console.log('ookk!');
    },
    onCancel() {
      console.log('oncansel!!')
    }
  });
}