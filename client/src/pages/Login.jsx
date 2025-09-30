import "../styles/login.css";

function Login() {
    return (
        <div className="login-container">
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default Login;