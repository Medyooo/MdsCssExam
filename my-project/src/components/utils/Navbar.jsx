import logo from '../../../public/logo.svg'
import ButtonPrimary from './buttons/ButtonPrimary'
import ButtonTertiary from './buttons/ButtonTertiary'
const Navbar = () => {
  return (
    <div className=" flex flex-row  items-center h-24  px-10  bg-[#FEFEFE] shadow-[0_35px_60px_-35px_rgba(0,0,0,0.3)]">
      <div className='  flex justify-between py-4 px-10 w-full'>

        <div>
            <img className='w-16 h-16' src={logo} alt="logo" />
        </div>
          <div className=' flex flex-row gap-8 '>
          <div className='flex items-center  gap-4'>
          <a className="font-roboto-bold text-base text-black " href="#">Home</a>
          <a className="font-roboto-bold text-base text-black" href="#">About Us</a>
          <a className="font-roboto-bold text-base text-black" href="#">Our Features</a>
          <a className="font-roboto-bold text-base text-black" href="#">Contact</a>
          </div>
          <div className='flex flex-row items-center gap-4'>
             <ButtonPrimary textSize='text-md' text='Sign in' textColor='text-white'  bgColor='bg-purple-primary' px='px-3' py='py-1.5' />
             <ButtonTertiary/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
