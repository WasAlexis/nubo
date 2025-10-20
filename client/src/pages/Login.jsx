import "../styles/login.css";

function Login() {
    return (
        <div className="login-container">
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default Login;