import { useReducer, useContext, useState, useId } from 'react';
import { AiOutlineMail, AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';

const SignUp = () => {
  const [showPassword, toggle] = useReducer((s) => !s, false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = useContext(UserContext);
  const id = useId()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        {error && <p className="bg-red-300 p-3 my-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor={`email${id}`}>Email</label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-input bg-primary rounded-xl"
                type={'email'}
                placeholder="example@example.com"
                id={`email${id}`}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-500" />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor={`password${id}`}>Password</label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-input bg-primary rounded-xl"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                id={`password${id}`}
              />
              {showPassword ? (
                <AiFillEye
                  onClick={() => toggle()}
                  className="absolute right-2 top-3 text-gray-500 cursor-pointer"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => toggle()}
                  className="absolute right-2 top-3 text-gray-500 cursor-pointer"
                />
              )}
            </div>
          </div>
          <button className="w-full my-2 p-3 text-btnText bg-button rounded-xl shadow-xl font-semibold hover:brightness-110 ease-in">
            Sign up
          </button>
        </form>
        <p className="my-4">
          Already have an account?{' '}
          <Link className="text-accent" to="/signin">
            Sign in
          </Link>{' '}
        </p>
      </div>
    </section>
  );
};

export default SignUp;
