import React, { useState } from 'react'
import Section from '../components/Section'
import Paper from '../components/Paper'
import { Form, Icon, Input, Button , Spin } from 'antd'
import { connect } from 'react-redux'
import { userRegister } from '../store/actions/userAction'
import Overlay from '../components/Overlay'

const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const Register = (props) => {

    let [isWait , setWait] = useState(false)
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

    const handleSubmit = e => {

        e.preventDefault();
        props.form.validateFields(async(err, values) => {

          if (!err) {

            setWait(true)
            let data = await props.userRegister(values.username.trim()) 
            document.location.href = `/classroom/${data._id}`;
            setWait(false)

          }

        });

      };

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');

    return(
        <Section height="100vh" customStyle={{backgroundImage: 'linear-gradient(135deg, #fa709a 45%, #fee140 100%)'}}>
            <Paper height="100vh" width="50vw" customStyle={{position:'absolute' , left:"0" , top:'0'}} >
                <h1><b>Welcome</b></h1>
                <Form layout="inline" onSubmit={handleSubmit}>

                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                autoFocus
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            Log in
                        </Button>
                    </Form.Item>

                </Form>
            </Paper>

            <Overlay isOn={isWait}>
                <Spin size="large" />
            </Overlay>

        </Section>
    )

}

const WrappedRegister = Form.create({ name: 'horizontal_login' })(Register);

const mapDispatchToProps = {
    userRegister
}

export default connect(null, mapDispatchToProps)(WrappedRegister)