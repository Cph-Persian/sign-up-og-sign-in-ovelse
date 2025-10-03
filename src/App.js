import './App.css';
import SignIn from './components/SignIn';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
    
    <h1>SIGN UP HERE</h1>
    <SignUpForm />

    <br></br>

    <h1>ALREADY HAVE AN ACCOUNT? </h1>

    <h1>SIGN IN HERE</h1>
    <SignIn />

    </div>
  );
}

export default App;
