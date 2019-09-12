import React, { useState , useEffect } from 'react'
import { Layout, Button , PageHeader , Statistic, Row , Table , Col , Input , InputNumber , List } from 'antd';
import { fetchPosts , createPost , deletePost , updatePost } from '../store/actions/postAction'
import { userRegister , getUser , getRanking , updateRanking } from '../store/actions/userAction'
import { connect } from 'react-redux'

const InputGroup = Input.Group;
const { Content } = Layout;

const columns = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        defaultSortOrder: 'descend',
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

const Classroom = (props) => {

    let [text , setText] = useState("")
    let [time , setTime] = useState(1)

    useEffect(() => {
        props.fetchPosts()
        props.getUser(props.match.params.userID)
        props.getRanking()
    } , [])

    const submit = () => {

        props.createPost(text , time , props.user._id)

        setText("")
        setTime(1)

    }

    const remove = async (post) => {

        await props.deletePost(post._id)
        let currentTime = props.posts.reduce((sum , post) => sum + post.time , 0)
        await props.updateRanking(props.user.user._id, post.time > currentTime ? 0 :currentTime - post.time)

    }
    
    return(
        <Layout style={ {height:'100vh'} }>

            <PageHeader onBack={() => window.history.back()} title="Classroom" subTitle={"for " + props.user.user.name} >
                <Row type="flex">
                    
                    <Statistic
                    title="Time"
                    value={ props.posts.reduce((sum , post) => sum + post.time , 0) + " min"}
                    style={{
                        margin: '0 32px',
                    }}
                    />

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
                                dataSource={props.posts}
                                renderItem={item =>
                                    <List.Item>
                                        {item.description} for {item.time} min
                                        <Button type="danger" onClick={(e) => remove(item)} style={{float:'right'}}>delete</Button>
                                    </List.Item>
                                }
                                />
                            </Col>

                            <Col span={6} >
                                <PageHeader
                                    title="Ranking"
                                />
                                <Table columns={columns} dataSource={props.user.rank} />
                            </Col>

                        </Row>

                    </div>
                </Content>

            </Layout>

        </Layout>
    )

}

const mapStateToProps = (state) => ({
    user:state.user,
    posts:state.posts.items
})

const mapDispatchToProps = {
    fetchPosts , createPost , deletePost , updatePost , getUser , getRanking , userRegister , updateRanking
}

export default connect(mapStateToProps, mapDispatchToProps)(Classroom)