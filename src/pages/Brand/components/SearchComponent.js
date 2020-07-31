import React from 'react'
import { Row, Col, Form, Select ,Button} from 'antd'

export default (props) => {

    const [form] = Form.useForm();
    const formFinish = values => {
        console.log('Success:', values);
    };
    
    const onReset = () => {
        form.resetFields();
      };

    return (
        <div>
            <Row className='search_tip'>
                <Col>查询条件</Col>
            </Row>
            <Form form={form} onFinish={formFinish}>
                <Row>
                    <Col span={6}>
                        <Form.Item
                            label='品牌名称'
                            name='brandName'
                        >
                            <input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label='状态'
                            name='status'
                        >
                            <Select >
                                {}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                查询
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                重置
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}