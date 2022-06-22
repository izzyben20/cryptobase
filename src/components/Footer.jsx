import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter, FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <footer className="rounded-div mt-10 bottom-0 relative pt-6">
      <div className="grid md:grid-cols-2 py-8 md:py-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold text-accent">Support</h2>
            <ul>
              <li className="text-sm py-2 cursor-pointer hover:text-accent font-medium">
                Help Center
              </li>
              <li className="text-sm py-2 cursor-pointer hover:text-accent font-medium">
                Contact Us
              </li>
              <li className="text-sm py-2 cursor-pointer hover:text-accent font-medium">
                API Status
              </li>
              <li className="text-sm py-2 cursor-pointer hover:text-accent font-medium">
                Documentation
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-accent">Info</h2>
            <ul>
              <li className="text-sm py-2 cursor-pointer hover:text-accent font-medium">
                About Us
              </li>
              <li className="text-sm py-2 cursor-pointer hover:text-accent font-medium">
                Careers
              </li>
              <li className="text-sm py-2 cursor-pointer hover:text-accent font-medium">
                Invest
              </li>
              <li className="text-sm py-2 cursor-pointer hover:text-accent font-medium">
                Legal
              </li>
            </ul>
          </div>
        </div>
        <div className="text-right px-4">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center pb-2 md:text-right font-medium md:mb-4">
                Sign up for crypto news
              </p>
              <div>
                <form>
                  <input
                    className="bg-primary border border-input mb-3 p-2 mr-2 w-full shadow-xl rounded-lg md:w-auto"
                    type={'email'}
                    placeholder="Enter your email"
                  />
                  <button className="bg-button text-btnText p-2 w-full rounded-lg shadow-2xl hover:shadow-2xl md:w-auto my-2 font-semibold">
                    Sign up
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram
                  className="cursor-pointer hover:scale-110 ease-in-out"
                  size={20}
                />
                <FaGithub
                  className="cursor-pointer hover:scale-110 ease-in-out"
                  size={20}
                />
                <FaYoutube
                  className="cursor-pointer hover:scale-110 ease-in-out"
                  size={20}
                />
                <FaFacebook
                  className="cursor-pointer hover:scale-110 ease-in-out"
                  size={20}
                />
                <FaTwitter
                  className="cursor-pointer hover:scale-110 ease-in-out"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="text-center text-gray-500">Powered by Coin Gecko</p>
        <p className="text-center text-gray-500">
          All right reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
