import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button,} from 'react-bootstrap'
import Login from './Login'
import { Layout, Menu, Breadcrumb} from 'antd';
import { Header } from 'antd/lib/layout/layout'
const Register = () => {
    
    const[name, setusername] = useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
//this is the function for submission to the API end points
  const submit = async (e)=>{
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/register/',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      name,
      email,
      password,
    })
    
  });
 
  
}


    return (
     


<Layout>
<Header className="header" style ={{backgroundColor:'#16a085'}} >
     
     <Menu style={{backgroundColor:'#16a085', marginLeft:'39%'}} mode="horizontal" defaultSelectedKeys={['3']}>
     <Menu.Item key="1"><Link to ='/' style={{textDecoration:'none', color:'white'}}>Home</Link></Menu.Item>
       <Menu.Item key="2"><Link to ='/login' style={{textDecoration:'none', color:'white'}}>Login</Link></Menu.Item>
       <Menu.Item key="3"><Link to ='/register' style={{textDecoration:'none', color:'white'}}>Register</Link></Menu.Item>
     </Menu>
     </Header>
<div style={{padding:'25%', marginTop:'-10%'}}>
  <div name = 'registerText'>
    <h5 style={{textAlign:'center'}}>
     Fill in the Form to continue
    </h5>
  </div>



<form className = 'add-form' onSubmit = {submit} style ={{marginTop:'20px'}}> 
    <div name = 'username'>
          <label>Name</label>
            <input
             required ={true} type = 'text' placeholder = 'Username' value ={name} onChange ={(e)=>setusername(e.target.value)}
             className='form-control'/>
           
          </div>
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
         <Button variant='danger' type ='submit'>Signup</Button>
        
        
       </form>
       

           
            {/* <div className = 'form-control form-control-check'>
            <label>Set reminder</label>
            <input type = 'checkbox' checked = {reminder} value ={useremail} onChange ={(e)=>setemail(e.currentTarget.checked)}/>
            </div> */}

</div>

</Layout>

       
    )
}

export default Register



// const Addtask = ({onAdd}) => {
    
//     const[thename, setText]= useState('')
//     const[description, setDesc]= useState('')
//     const[reminder, setRem] = useState(false)
    
//     const onSubmit = (e) =>{
//         e.preventDefault()//to prevent submtin to a page
    
//     if(!thename) {
//      alert('please add the task')
//     return
// }
//     onAdd({thename,description,reminder})
     
    
//     setText('')
//     setDesc('')
//     setRem(false)

// }


//     return (
//         <form className = 'add-form' onSubmit = {onSubmit}> 
//            <div className = 'form-control'>
//             <label>Add Task</label>
//             <input type = 'text' placeholder = 'add task' value ={thename} onChange ={(e)=>setText(e.target.value)}/>
//             </div>
//             <div className = 'form-control'> 
//             <label>description</label>
//             <input type = 'text' placeholder = 'Add description'value ={description} onChange ={(e)=>setDesc(e.target.value)}/>
//             </div>
//             <div className = 'form-control form-control-check'>
//             <label>Set reminder</label>
//             <input type = 'checkbox' checked = {reminder} value ={reminder} onChange ={(e)=>setRem(e.currentTarget.checked)}/>
//             </div>
//             <input type = 'submit' value ='Add task' className = 'btn btn-block'/>
//         </form>
//     )
// }

// export default Addtask
