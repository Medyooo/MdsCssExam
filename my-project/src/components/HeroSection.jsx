import { Link } from 'react-router-dom'
import hero from '../../public/hero.svg'
import ButtonPrimary from './utils/buttons/ButtonPrimary'
const HeroSection = () => {
  return (
    <div className=" flex flex-row justify-around items-center h-[700px] px-10 py-20 gap-10 ">
      <div className="flex gap-10">
       <div className="flex flex-col gap-10 w-[620px]">
         <h1 className="text-6xl leading-[70px] font-roboto-bold gap-[10px] text-black tracking-[2px]">Your digital transformation begins here</h1>
         <p className="text-base text-black font-roboto-medium tracking-[0.75px]">A new adventure for perfect design. Discover our design system based on 8px grid and scaling components.</p>
        <div className='flex flex-row gap-6'>
       <Link to='/shop'>
        <ButtonPrimary textSize='text-lg' text='Explore features' textColor='text-white'  bgColor='bg-purple-primary' px='px-4' py='py-2'/>
        </Link>
        
        <ButtonPrimary textSize='text-lg' text='Get Started' textColor='text-purple-primary' px='px-4' py='py-2' borderSize='border-2'  />
        </div>
       </div>
      </div>
      <div className='flex '>
            <img className='w-[620px] h-[400px]' src={hero} alt="logo" />
        </div>
    </div>
  )
}

export default HeroSection
