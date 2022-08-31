import Spline from '@splinetool/react-spline'
import Button from './components/Button'

import Logo from './assets/logo.svg'
import { MdOutlineComputer } from 'react-icons/md'
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

const style = {
  wrapper: `w-screen px-4 md:px-0 h-[150vh] md:h-screen text-white relative overflow-hidden`,
  content: {
    container: `absolute pr-4 md:pr-none top-[125px] md:left-[50px] 2xl:top-[200px] 2xl:left-[200px] md:ml-[100px] md:mr-[30px]`,
    h1: `font-bold md:leading-[90px] text-[55px] mb-8 md:text-[70px] md:max-w-[500px] bg-gradient-to-tr from-[#004CF5] to-[#E044DE] bg-clip-text text-transparent`,
    p: `font-base leading-[150%] max-w-[380px]`,
  },
  spline: `absolute top-16 md:-top-[400px] 2xl:-top-[300px] -right-[700px] md:-right-[600px] 2xl:-right-[450px]`,
  nav: {
    container: `flex gap-16 md:ml-[100px] 2xl:ml-[200px] w-full items-center justify-between md:justify-start mt-8`,
    logoImageContainer: `w-[36px] h-[50px] z-20`,
    logoImage: `object-contain`,
    linkContainer: `hidden md:flex gap-16 font-semibold`,
    linkItem: `relative cursor-pointer text-lg before:absolute before:inset-x-0 before:-bottom-[2px] before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-full before:bg-white before:transition-all before:duration-200 hover:before:scale-x-100`,
    button: `bg-black/10 transition-all duration-500 border border-gray-500/40 text-white font-semibold w-[146px] h-[49px] z-30 rounded-2xl drop-shadow-lg cursor-pointer hover:backdrop-blur-lg hover:shadow-2xl hover:scale-105 backdrop-blur-md`,
  },
  buttonContainer: `mt-8`,
  aside: {
    container: `hidden absolute top-[125px] left-[100px] 2xl:top-[200px] 2xl:left-[205px] md:flex flex-col items-center justify-center text-white`,
    verticalLine: `h-[400px] w-[2px] bg-gradient-to-t from-[#004CF5] to-[#E044DE]`,
    socialIconsContainer: `flex flex-col mt-4 gap-2`,
    socialIcon: `w-8 h-8 p-1 cursor-pointer hover:brightness-75`,
  },
}

function App() {
  return (
    <div className={style.wrapper}>
      <Spline
        scene="https://prod.spline.design/rQl4psuJT3fXArYd/scene.splinecode"
        className={style.spline}
      />
      <nav className={style.nav.container}>
        <div className={style.nav.logoImageContainer}>
          <img src={Logo} alt="logo/img" className={style.nav.logoImage} />
        </div>
        <ul className={style.nav.linkContainer}>
          <li className={style.nav.linkItem}>Home</li>
          <li className={style.nav.linkItem}>Download</li>
          <li className={style.nav.linkItem}>App</li>
          <li className={style.nav.linkItem}>Login</li>
        </ul>
        <button className={style.nav.button}>Get Started</button>
      </nav>
      <div className={style.content.container}>
        <h1 className={style.content.h1}>Collaborate with people</h1>
        <p className={style.content.p}>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <div className={style.buttonContainer}>
          <Button title="Download for Mac" Icon={MdOutlineComputer} />
        </div>
      </div>
      <aside className={style.aside.container}>
        <div className={style.aside.verticalLine} />
        <div className={style.aside.socialIconsContainer}>
          <AiFillTwitterCircle className={style.aside.socialIcon} />
          <a href="https://github.com/stardusteight-d4c" target="_blank">
            <AiFillGithub className={style.aside.socialIcon} />
          </a>
        </div>
      </aside>
    </div>
  )
}

export default App
