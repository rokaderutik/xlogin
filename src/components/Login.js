import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [permitLogin, setPermitLogin] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if(formData.username === "user" && formData.password === "password") {
            setPermitLogin(true);
        } else {
            setPermitLogin(false);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            {
                permitLogin===true && <h4>Welcome, user!</h4>
            }
            {
                permitLogin===false && <h4>Invalid username or password</h4>
            }

            {
                !permitLogin &&
                <form onSubmit={handleLogin}>
                    <label for="username">Username: </label>
                    <input 
                        placeholder="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <br />
                    <label for="password">Password: </label>
                    <input 
                        placeholder="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <br />
                    <button>Submit</button>
                </form>
            }
        </div>
    );
}