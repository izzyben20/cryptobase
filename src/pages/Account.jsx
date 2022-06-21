import { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import SavedCoin from '../components/SavedCoin';
import { UserContext } from '../context/AuthContext'

const Account = () => {
  const {user, logout} = useContext(UserContext)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await logout()
      navigate('/')
    } catch (e) {
      alert(e.message)
    }
  }

  if(!user){
    return <Navigate to='/signin' />
  }
  
  return (
    <section className="max-w-[1140px] mx-auto">
      <div className='flex justify-between items-center rounded-div py-8 my-12'>
        <div>
          <h1 className='text-xl font-semibold md:text-sm'>Account</h1>
          <div>
            <p>Welcome, {user?.email}</p>
          </div>
        </div>
        <div>
          <button onClick={handleSignOut} className='border px-4 py-2 rounded-xl shadow-lg hover:shadow-2xl font-semibold hover:text-accent'>Sign Out</button>
        </div>
      </div>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h1 className='text-xl font-semibold py-4'>Watch Lists</h1>
          <SavedCoin />
        </div>
      </div>
    </section>
  );
};

export default Account;
