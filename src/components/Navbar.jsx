import { useReducer, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import { UserContext } from '../context/AuthContext';

const Navbar = () => {
  const [showMenu, toggle] = useReducer((s) => !s, false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
      toggle();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <nav
        className={
          showMenu
            ? 'left-0 top-0 fixed rounded-div flex items-center justify-between h-[60px] font-bold z-20 border border-b-2'
            : 'rounded-div flex items-center justify-between h-[60px] font-bold z-20'
        }
      >
        <Link to="/">
          <h1 className="text-2xl">Cryptobase</h1>
        </Link>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {user?.email ? (
          <div className="hidden md:flex">
            <Link className="p-4" to="/account">
              Account
            </Link>
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        ) : (
          <div className="hidden md:block">
            <Link to="/signin" className="p-4 hover:text-accent">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-button text-btnText px-4 py-2 ml-2 rounded-xl hover:shadow-2xl"
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* Hamburger Menu */}
        <div
          onClick={() => toggle()}
          className="block md:hidden cursor-pointer z-10"
        >
          {showMenu ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </nav>
      <div>
        {/* mobile menu */}
        <div
          className={
            showMenu
              ? 'md:hidden fixed left-0 top-14 py-8 flex flex-col items-center justify-between w-full h-[95vh] bg-primary ease-in duration-300 z-10'
              : 'fixed left-[-100%] top-14 pt-8 h-[95vh] flex flex-col items-center justify-between ease-in duration-300 z-10'
          }
        >
          <ul className="w-full p-4">
            <li onClick={() => toggle()} className="border-b py-6">
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => toggle()} className="border-b py-6">
              <Link to="/account">Account</Link>
            </li>
            {user?.email && (
              <li className="py-6 border-b">
                <button onClick={handleSignOut}>Sign out</button>
              </li>
            )}
            <li className="py-6">
              <ThemeToggle />
            </li>
          </ul>
          {!user && (
            <div className="flex flex-col w-full p-4">
              <Link onClick={() => toggle()} to="/signin">
                <button className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-xl shadow-xl">
                  Sign In
                </button>
              </Link>
              <Link onClick={() => toggle()} to="/signup">
                <button className="w-full my-2 p-3 bg-button text-btnText rounded-xl shadow-xl font-semibold hover:brightness-110 ease-in">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
