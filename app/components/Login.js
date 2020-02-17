const Login = () => (
    <>
        <div className="container">
            <h1>Login Screen</h1>
            <div className="login-buttons">
                <button onClick={goLogin}>login</button>
                <button onClick={registerUser}>register</button>
            </div>

        </div>

        <style jsx>{`
    .container {
        text-align: center;
    }
    .login-buttons {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100px;
    }

`}</style>
    </>
);

const goLogin = () => alert('login');

const registerUser = () => alert('register meh');


export default Login;