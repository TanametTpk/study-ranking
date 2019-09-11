import React, { useState } from 'react'
import { Layout, Menu, Icon , Button , PageHeader , Statistic, Row , Card , Table , Col , Input , InputNumber , List } from 'antd';

const InputGroup = Input.Group;
const { Header, Content, Footer, Sider } = Layout;

const columns = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.time - b.time,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.time - b.time,
    }
];

const data = [
    {
      key: '1',
      name: 'John Brown',
      time: 32,
      rank: 2
    },
    {
      key: '2',
      name: 'Jim Green',
      time: 42,
      rank: 1
    },
    {
      key: '3',
      name: 'Joe Black',
      time: 32,
      rank: 2
    },
    {
      key: '4',
      name: 'Jim Red',
      time: 32,
      rank: 2
    },
  ];

let doneData = [
    {
        _id:"1",
        description:"leaning react",
        time:10,
    },
    {
        _id:"2",
        description:"leaning vue.js",
        time:5,
    }
]

const Classroom = (props) => {

    let [text , setText] = useState("")
    let [time , setTime] = useState(1)

    const submit = () => {

        doneData.push({
            _id:"" + doneData.length ,
            description:text,
            time
        })

        setText("")
        setTime(1)

    }

    const remove = (_id) => {

        console.log(_id);
        
        doneData = doneData.filter((d) => d._id !== _id)
        console.log(doneData);
        

    }

    return(
        <Layout style={ {height:'100vh'} }>

            <PageHeader onBack={() => window.history.back()} title="Classroom" subTitle="for user123" >
                <Row type="flex">
                    
                    <Statistic
                    title="Time"
                    value={"25 min"}
                    style={{
                        margin: '0 32px',
                    }}
                    />

                    <Statistic title="Rank" prefix="#" value={1} />
                </Row>
            </PageHeader>

            <Layout >
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>

                        <Row gutter={16}>

                            <Col span={18} >

                                <PageHeader
                                    title="Done list"
                                    subTitle="your milestone"
                                >
                                    <InputGroup compact>
                                        <Input style={{ width: '50%' }} value={text} placeholder="What have you done?" onChange={({target:{value}}) => setText(value)} />
                                        <InputNumber title="time" value={time} min={0} onChange={(value) => setTime(value)} />
                                        <Button type="primary" onClick={submit} >Submit</Button>
                                    </InputGroup>
                                </PageHeader>

                                <List
                                size="large"
                                bordered
                                dataSource={doneData}
                                renderItem={item =>
                                    <List.Item>
                                        {item.description} for {item.time} min
                                        <Button type="danger" onClick={(e) => remove(item._id)} style={{float:'right'}}>delete</Button>
                                    </List.Item>
                                }
                                />
                            </Col>

                            <Col span={6} >
                                <PageHeader
                                    title="Ranking"
                                />
                                <Table columns={columns} dataSource={data} />
                            </Col>

                        </Row>

                    </div>
                </Content>

            </Layout>

        </Layout>
    )

}

export default Classroom