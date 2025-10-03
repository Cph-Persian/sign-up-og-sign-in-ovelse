import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

    // supabase forbindelse
const supabase = createClient("https://bpbyciweccltsmfqszia.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwYnljaXdlY2NsdHNtZnFzemlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNTU2MTAsImV4cCI6MjA3NDgzMTYxMH0.ClcWaSTkFtqLHgxSJwwcpNyS2fyer9_oJob5QbB3j8A");

export default function SignUpForm() {
    // usestate hooks samler state i et objekt

    const [formdata, setFormData] = useState(
        {
        email: "",
        password: ""
        }
    )

    // håndter input ændringer

    const handleInput = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);

        setFormData(
            {
            ...formdata,
            [e.target.name] : e.target.value
            }
        )
    }

    // håndter form submit (e.preventDefault) forhindrer side reload
  const handleSubmit = async (e) => {
    e.preventDefault();

    

    // Forsøger at oprette bruger i Supabase
    const { data, error } = await supabase.auth.signUp({
      email: formdata.email,
      password: formdata.password,
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
        name="email"
        type="email"
        placeholder="Email"
        value={formdata.email}
        // kombinerer til en handleInput funktion
        onChange={handleInput}
      />

      <input
        name ="password"
        type="password"
        placeholder="Password"
        value={formdata.password}
        onChange={handleInput}
      />
        
      <button type="submit">Sign Up</button>
      
    </form>
  );
}