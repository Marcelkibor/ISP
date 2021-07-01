import React from 'react'
import { DesktopOutlined,PieChartOutlined,FileOutlined,TeamOutlined,UserOutlined, HomeOutlined, LoginOutlined} from '@ant-design/icons';
import{Menu, Breadcrumb,Layout} from 'antd'
import './components/header.css'
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Header, Content, Footer, Sider } = Layout;


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
          
           
   <Layout style={{ minHeight: '100vh', marginTop:'0' }}>
         
   <Header className="header" style ={{backgroundColor:'#16a085'}} >
       
       <Menu style={{backgroundColor:'#16a085', marginLeft:'39%'}} mode="horizontal" defaultSelectedKeys={['1']}>
       <Menu.Item key="1"><Link to ='/' style={{textDecoration:'none', color:'white'}}>Home</Link><HomeOutlined style={{fontSize:'20px', color:'white', marginLeft:'12%'}}/></Menu.Item>
         <Menu.Item key="2"><Link to ='/login' style={{textDecoration:'none', color:'white'}}>Login<LoginOutlined style={{marginLeft:'12%', fontSize:'20px'}}/></Link></Menu.Item>
         <Menu.Item key="3"><Link to ='/register' style={{textDecoration:'none', color:'white'}}>Register</Link><TeamOutlined style={{marginLeft:'12%', fontSize:'20px', color:'white'}}/></Menu.Item>
       </Menu>
    
     </Header>
          <Content>
            <h4 style ={{textAlign:'center', marginLeft:'-3%', marginTop:'20px'}}>
              Welcome to <b>Everyday</b>
              </h4>
                <p style ={{textAlign:'center', marginLeft:'-3%', marginTop:'20px'}} >Start Managing your Teams</p>
          </Content>
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
// //TODO: find the difference btw functional components from class components
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