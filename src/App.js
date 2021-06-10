import React from 'react'
import { DesktopOutlined,PieChartOutlined,FileOutlined,TeamOutlined,UserOutlined, HomeOutlined} from '@ant-design/icons';
import{Menu, Breadcrumb,Layout} from 'antd'
import './components/header.css'
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Heading extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
      const { collapsed } = this.state;

      const onclick =()=>{ 
        console.log('you can now apply redirection')
      }

      return (
       <Router>
         <Route path='/' exact render ={()=>(
           <>
   <Layout style={{ minHeight: '100vh',marginTop:'-50px' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} >
              <Menu.Item as ={Link} name ='home'to ='/'icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item as ={Link} name  = 'login'component ={Login}to ='/login' icon={<UserOutlined/>}>
                Login
              </Menu.Item>
              {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu> */}
              
              
              <Menu.Item as ={Link} name ='register'to ='register'onClick ={onclick}icon={<TeamOutlined/>}>Register</Menu.Item>
              {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
               */}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, marginTop:'-20px', }} />
            <Content style={{ margin: '0px 20px ' }}>
              <Breadcrumb style={{ margin: '10px' }}>
                <Breadcrumb.Item><h2 style={{color:'darkblue',textAlign:'center' ,fontWeight:'bolder'}}>EVERYDAY</h2></Breadcrumb.Item>
            
               <Breadcrumb.Item>Login</Breadcrumb.Item>
               <Breadcrumb.Item>Register</Breadcrumb.Item>
               <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
                <h3 style={{fontSize:'44px'}}>
                  Every<span style={{fontWeight:'bold', fontSize:'20px'}}>DAY</span>
                </h3>
                <p>######### <br></br>  Add home content here  <br></br> #####################</p>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>ISP ©2021 Created by Marcel & Silas</Footer>
          </Layout>
        </Layout>
      );
           </>
         )}/>
       <Route path='/login' component = {Login}/>
         <Route path ='/register' component = {Register}/>     
      
        </Router>   
      )}
  }
  
  // const Heading = () => {
//     return (
//         <div>
//             <h2>Header component works fine</h2>
//         </div>
//     )
// }

export default Heading
// //TODO: find the difference functional components from class components
