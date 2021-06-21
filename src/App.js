import React from 'react'
import { DesktopOutlined,PieChartOutlined,FileOutlined,TeamOutlined,UserOutlined, HomeOutlined} from '@ant-design/icons';
import{Menu, Breadcrumb,Layout} from 'antd'
import './components/header.css'
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

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

      
      return (
       <Router>
         <Route path='/' exact render ={()=>(
           <>
   <Layout style={{ minHeight: '100vh',marginTop:'-50px' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} >
              <Menu.Item icon={<HomeOutlined />} key='1'>
              <Link to ='/' style={{textDecoration:'none'}}>Home</Link>
              </Menu.Item>
              <Menu.Item  icon={<UserOutlined/>}>
              <Link to ='/login'style={{textDecoration:'none'}}>Login</Link>
              </Menu.Item>
              <Menu.Item  icon={<TeamOutlined/>}  ><Link to ='/register'className='homelinks' style= {{textDecoration:'none'}}>Register</Link></Menu.Item>
           
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, marginTop:'-20px', }} />
            <Content style={{ margin: '0px 20px ' }}>
              <Breadcrumb style={{ margin: '10px' }}>
                {/* <Breadcrumb.Item><h2 style={{color:'darkblue',textAlign:'center' ,fontWeight:'bolder'}}>EVERYDAY</h2></Breadcrumb.Item> */}
            
               <Breadcrumb.Item><Link to ='/login' style={{textDecoration:'none'}}>Login</Link></Breadcrumb.Item>
               <Breadcrumb.Item><Link to ='/register'style={{textDecoration:'none'}}>Register</Link></Breadcrumb.Item>
               <Breadcrumb.Item><Link to ='/'style={{textDecoration:'none'}}>Home</Link></Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
                <h3 style={{fontSize:'44px'}}>
                  Every<span style={{fontWeight:'bold', fontSize:'20px'}}>DAY</span>
                </h3>
                <p>######### <br></br>  Add home content here  <br></br> #####################</p>
              </div>
              <div>
              
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
 

export default Heading
// //TODO: find the difference functional components from class components
   {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu> */}
              
              
          
              {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
               */}
                
  // const Heading = () => {
//     return (
//         <div>
//             <h2>Header component works fine</h2>
//         </div>
//     )
// }