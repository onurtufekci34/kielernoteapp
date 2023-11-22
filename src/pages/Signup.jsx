import {useState} from 'react'





export default function Signup() {

    const [userName, setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    
    const hadnleSubmit = async (e) => {
        e.preventDefault()

        console.log(userName,email,password,confirmPassword)
        setUserName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        
    }



  return (
    <form className='signup' onSubmit={hadnleSubmit}>
        <h3>Kieler Note App Signup Page</h3>

        <label>Your Name:</label>
        <input type="text" onChange={(e)=> setUserName(e.target.value)} value={userName} />

        <label>Your E-Mail:</label>
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />

        <label>Your Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        
        <label>Confirm Your Password:</label>
        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
        

        <button>Signup</button>

        
    </form>
  )
}
