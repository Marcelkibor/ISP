// import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
// import {  Form, Button,} from 'react-bootstrap'
// const Login = ({details}) => {
    
//    const[email, setemail] = useState('')
//     const[password, setpassword] = useState('')
// //this is the function for submission to the API end points
//   const submit = async (e)=>{
//     e.preventDefault();

//     const response = await fetch('http://127.0.0.1:8000/api/login/',{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify({
      
//       email,
//       password,
//     })
    
//   });
//   const Apiresp = await response.json();

//   console.log(Apiresp)
  
// }


//     return (
      
// <div style={{padding:'20%'}}>
// <button className='btn btn-danger'

// ><Link to ='/' style = {{textDecoration:'none', color:'white'}}>Home</Link></button> 

// <form className = 'add-form' onSubmit = {submit} style ={{marginTop:'20px'}}> 
   
//           <div name = 'email'>
//           <label>Email</label>
//             <input
//              required ={true} type = 'email' placeholder = 'Enter Email' value ={email} onChange ={(e)=>setemail(e.target.value)}
//              className='form-control'/>
           
//           </div>
//           <div name ='password'>
 
//           <label>Password</label>
//             <input type = 'password'required ={true} placeholder = 'Enter Password'value ={password} onChange ={(e)=>setpassword(e.target.value)}  className ='form-control'/>
//          </div>
//         <br>
//         </br>
//          <Button variant='success' type ='submit'>Login</Button>
        

           
//             {/* <div className = 'form-control form-control-check'>
//             <label>Set reminder</label>
//             <input type = 'checkbox' checked = {reminder} value ={useremail} onChange ={(e)=>setemail(e.currentTarget.checked)}/>
//             </div> */}
          
//         </form>

// </div>

       
//     )
// }

// export default Login



// // const Addtask = ({onAdd}) => {
    
// //     const[thename, setText]= useState('')
// //     const[description, setDesc]= useState('')
// //     const[reminder, setRem] = useState(false)
    
// //     const onSubmit = (e) =>{
// //         e.preventDefault()//to prevent submtin to a page
    
// //     if(!thename) {
// //      alert('please add the task')
// //     return
// // }
// //     onAdd({thename,description,reminder})
     
    
// //     setText('')
// //     setDesc('')
// //     setRem(false)

// // }


// //     return (
// //         <form className = 'add-form' onSubmit = {onSubmit}> 
// //            <div className = 'form-control'>
// //             <label>Add Task</label>
// //             <input type = 'text' placeholder = 'add task' value ={thename} onChange ={(e)=>setText(e.target.value)}/>
// //             </div>
// //             <div className = 'form-control'> 
// //             <label>description</label>
// //             <input type = 'text' placeholder = 'Add description'value ={description} onChange ={(e)=>setDesc(e.target.value)}/>
// //             </div>
// //             <div className = 'form-control form-control-check'>
// //             <label>Set reminder</label>
// //             <input type = 'checkbox' checked = {reminder} value ={reminder} onChange ={(e)=>setRem(e.currentTarget.checked)}/>
// //             </div>
// //             <input type = 'submit' value ='Add task' className = 'btn btn-block'/>
// //         </form>
// //     )
// // }

// // export default Addtask
