import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

    // supabase forbindelse
const supabase = createClient("https://bpbyciweccltsmfqszia.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwYnljaXdlY2NsdHNtZnFzemlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNTU2MTAsImV4cCI6MjA3NDgzMTYxMH0.ClcWaSTkFtqLHgxSJwwcpNyS2fyer9_oJob5QbB3j8A");

export default function SignUpForm() {
    // usestate hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    // håndter form submit (e.preventDefault) forhindrer side reload
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Forsøger at oprette bruger i Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    // validering i konsol for at se om oprettelsen lykkedes
    if (error) {
      console.log("Sign up mislykkedes:", error.message);
    } else {
      console.log("Sign up var en sucess:", data);
    }
  };


    // signUp formular
  return (
    <form onSubmit={handleSubmit}>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        
      <button type="submit">Sign Up</button>
      
    </form>
  );
}