import {useState} from 'react'





export default function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const hadnleSubmit = async (e) => {
        e.preventDefault()

        console.log(email,password)
        setEmail("")
        setPassword("")
    }



  return (
    <form className='login' onSubmit={hadnleSubmit}>
        <h3>Kieler Note App Login Page</h3>

        <label>Your E-Mail:</label>
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />

        <label>Your Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button>Login</button>
    </form>
  )
}
