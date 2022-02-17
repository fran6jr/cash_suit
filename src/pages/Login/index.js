import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";



const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    console.log("Username is " + user.username);
    console.log("Password is " + user.password)
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate("/");
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(user => ({
      ...user,
      [name]: value
    }))
  }

  return (
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input
            type="text"
            name="username"
            placeholder="Username..."
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>Password:
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <input type="submit" />
      </form>
  )
}

export default Login;