import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {  Form, Button,} from 'react-bootstrap'
const Login = ({details}) => {
    
    const[username, setname] = useState('')
    const[password, setpassword] = useState('')

    
    const onsubmit = (e)=>{
        e.preventDefault()
    }



    return (
      
<div style={{padding:'20%'}}>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" style={{maxWidth:'1000px'}} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"style={{maxWidth:'1000px'}} />
<br></br>  </Form.Group>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

  <Button variant="primary" type="submit" style={{marginLeft:'0%'}}>
    Submit
  </Button>
  <Button variant='success' style ={{marginLeft:'10%',}}>
    <Link to ='/' style={{textDecorationColor:'white', textDecoration:'none', color:'white'}}> 
    Home
    </Link>
  </Button>
  
  
</Form>


</div>

       
    )
}

export default Login



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
