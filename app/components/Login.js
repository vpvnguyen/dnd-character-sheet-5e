import Link from 'next/link'

const Login = () => (
    <>
        <div className="container">

            <h1>Login Screen</h1>
            <div className="login-buttons">
                
                <Link href='/Dashboard'>
                    <button>login</button>
                </Link>

                <Link href='/Register'>
                    <button>register</button>
                </Link>
                
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