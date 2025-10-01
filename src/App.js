import './App.css';
import SignIn from './components/SignIn';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
    
    <h1>Sign Up</h1>
    <SignUpForm />

    <br></br>

    <h1>Sign In</h1>
    <SignIn />

    </div>
  );
}

export default App;
