import React from 'react';
import { Card, Form, Input, Button, Icon, Checkbox } from 'antd';
import '../ui/ui.less';

class Login extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFields(['username'], (err, values) => { // 只校验并获取 username 的值
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Card title="行内登录表单" className="card-wrap">
          <Form layout="horizontal" onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }}>
            <Form.Item>
              {
                getFieldDecorator(
                  'username', {
                  initialValue: 'wbc', // 初始值
                  rules: [ // 校验规则
                    {
                      required: true,
                      message: 'Please input your username!'
                    },
                    {
                      max: 6,
                      message: '输入的字数过长'
                    },
                    {
                      pattern: /^\w+$/,
                      message: '请输入字母和数字'
                    }
                  ],
                }
                )(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="username" />
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator(
                  'password', {
                  rules: [{ required: true, message: 'Please input your password!' }],
                }
                )(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="password" />
                )
              }

            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="#" style={{ float: 'right' }}>忘记密码</a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>登录</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="陈超" className="card-wrap">
          <select style={{width: '200px'}}>
            <option value="1">a</option>
            <option value="2">b</option>
            <option value="3">c</option>
          </select>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Login);