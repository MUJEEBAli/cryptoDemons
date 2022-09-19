import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../Adulam'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-red-700 text-5xl font-bold text-center">
          <br />
          
            <span className="text-gradient">Crypto</span>Demons 
          </h1>

          <p className=" text-center text-white font-semibold text-sm mt-3">
          A 5,555 high resolution Solana based next generation NFT collection.,<br/>Watch out and get one before it is too late! The CryptoDemons will be available soon! <br/>Expected launch is Q4 2022 - Q1 2023
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
            onClick={onMintNFT}
          >
            Mint Now
          </button>

          <a
            href="https://portfolio-mujeebali.vercel.app/"
            className="flex flex-row justify-center space-x-2 items-center
            bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          >
            <img
              className="w-11 h-11 object-contain rounded-full"
              src={avatar}
              alt="Adulam Logo"
            />
            <div className="flex flex-col font-semibold">
              <span className="text-white text-sm">0xf55...146a</span>
              <span className="text-[#e32970] text-xs">Shah</span>
            </div>
          </a>

          <p className="text-white text-sm  justify-items-center font-medium text-center">
          </p>

          <ul className="flex flex-row justify-center space-x-2 items-center my-4">
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://github.com/MUJEEBAli"
            >
              <img className="w-7 h-7" src={github} alt="Github" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="www.linkedin.com/in/alimujeeb-dev"
            >
              <img className="w-7 h-7" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://www.facebook.com/mujeebali.cs"
            >
              <img className="w-7 h-7" src={facebook} alt="facebook" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://twitter.com/mujeebalishah"
            >
              <img className="w-7 h-7" src={twitter} alt="twitter" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://portfolio-mujeebali.vercel.app/"
            >
              <img className="w-7 h-7" src={medium} alt="medium" />
            </a>
          </ul>

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}/99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
