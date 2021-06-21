import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {  Form, Button,} from 'react-bootstrap'
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined,PieChartOutlined,FileOutlined,TeamOutlined,UserOutlined, HomeOutlined} from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout'

const Login = () => {
  //declare values to be passed on the Form
  const[email, setemail] = useState('')
  const[password, setpassword] = useState('')
 //this is the function for submission to the API end points
  const submit = async (e)=>{
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/login/',{
    
    method:'POST',
    credentials:'include',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body:JSON.stringify({
      
     email,
     password,
     
    }
    )
    
  });
 
}


    return (
     
      <Layout>
         
       <Header className="header" style ={{backgroundColor:'#16a085'}} >
       
      <Menu style={{backgroundColor:'#16a085', marginLeft:'39%'}} mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1"><Link to ='/' style={{textDecoration:'none', color:'white'}}>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to ='/login' style={{textDecoration:'none', color:'white'}}>Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to ='/register' style={{textDecoration:'none', color:'white'}}>Register</Link></Menu.Item>
      </Menu>
   
    </Header>
    
<div style={{padding:'25%', marginTop:'-10%'}}>

<form className = 'add-form' onSubmit = {submit} style ={{marginTop:'20px'}}> 
   <h5 style={{textAlign:'center'}}>
     Please Sign In
   </h5>
          <div name = 'email'>
          <label>Email</label>
            <input
             required ={true} type = 'email' placeholder = 'Enter Email' value ={email} onChange ={(e)=>setemail(e.target.value)}
             className='form-control'/>
           
          </div>
          <div name ='password'>
 
          <label>Password</label>
            <input type = 'password'required ={true} placeholder = 'Enter Password'value ={password} onChange ={(e)=>setpassword(e.target.value)}  className ='form-control'/>
         </div>
        <br>
        </br>
        <button className='btn btn-danger'

><Link to ='/login' style = {{textDecoration:'none', color:'white'}}>Login</Link></button> 
      
        </form>

</div>

      </Layout>

       
    )
}

export default Login

