
import './App.scss'

function App() {

  return (
    <div className="form-module">
      <div className="form">
        <h2 className='form-h2'>Login to your account</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className='login-button'>Login</button>
          <button className='register-button'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default App
