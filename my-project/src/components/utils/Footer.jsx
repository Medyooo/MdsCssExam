import logo from '../../../public/logo2.svg'
const Footer = () => {
  return (
    <div className="flex flex-row justify-center  p-10 w-full bg-black">
       <div className="flex flex-row  justify-between gap-10 p-10 w-[1240px] ">
           <div className="flex flex-col items-center h-[70px] gap-4">
            <img className=" w-16 h-16" src={logo} alt='logo'/> 
            <p className='text-base font-roboto-regular text-white '>© 2023 My Company</p>
           </div>
           <div className='flex flex-col gap-4'>
               <p className='font-roboto-medium text-white text-xl tracking-[0.75px]'>My Company</p>
               <div className='flex flex-col gap-[10px]'>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Privacy</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Terms</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Sitemap</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Cookies</a>
               </div>
           </div>
           <div className='flex flex-col gap-4'>
               <p className='font-roboto-medium text-white text-xl tracking-[0.75px]'>Support</p>
               <div className='flex flex-col gap-[10px]'>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Cancellation options</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Refunds</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Help centre</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Contact Us</a>
               </div>
           </div>
           <div className='flex flex-col gap-4'>
               <p className='font-roboto-medium text-white text-xl tracking-[0.75px]'>Social</p>
               <div className='flex flex-row gap-[10px]'>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Facebook</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Twitter</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>LinkedIn</a>
                  <a className='font-roboto-bold text-base text-white tracking-[0.5px]' href=''>Google +</a>
               </div>
               
           </div>
       </div>
    </div>
  )
}

export default Footer
