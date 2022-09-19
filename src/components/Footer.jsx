import ethlogo from '../assets/footer-logo.png.png'

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex flex-col justify-between items-center my-4">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
        Home
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
        Terms & Conditions
 
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
        Legal Notice
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
        Privacy Policy
        </p>
        
        
      </div>

      <div className="flex flex-row justify-center items-center mt-10 gap-10">
        <img src={ethlogo} alt="logo" className="w-44" />
        <span className="text-white text-xs">
        © 2022 CryptoDemons & Angels. All rights reserved
        </span>
      </div>
    </div>
  </div>
)

export default Footer