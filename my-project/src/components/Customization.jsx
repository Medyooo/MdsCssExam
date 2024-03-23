import icon2 from '../../public/icon2.svg'
import ButtonPrimary from './utils/buttons/ButtonPrimary'
const Customization = () => {
  return (
    <div className="flex flex-row justify-around items-center gap-10 w-full px-10 py-20">
        <div className="flex flex-row gap-[72px]">
            <div className='flex flex-col justify-center  w-[620px] gap-6'>
                <h2 className='font-roboto-medium text-black text-5xl tracking-[0.75px]'>Customization and integration</h2>
                <p className='text-base font-roboto-medium text-black tracking-[0.75px]'>Our SaaS solutions are flexible and can be tailored to your specific business requirements. We understand that each organization is unique, and we are committed to delivering software that fits your needs like a glove.</p>
                <div className='flex flex-row justify-start items-start'>
                <ButtonPrimary textSize='text-lg' text='Learn more' textColor='text-white'  bgColor='bg-purple-primary' px='px-4' py='py-2'  />
                </div>
            </div>
        <div className='flex'>
            <img className='w-[588px] h-[501px]' src={icon2} alt="logo" />
        </div>
        </div>
    </div>
  )
}

export default Customization
