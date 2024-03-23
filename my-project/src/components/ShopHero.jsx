import { Link } from "react-router-dom"
import ButtonPrimary from "./utils/buttons/ButtonPrimary"

const ShopHero = () => {
  return (
    <div className="flex flex-col gap-10 p-10 w-full">
       <div className="flex flex-row gap-[72px]">
            <div className="flex flex-col justify- items-start gap-6">
                <div className="flex flex-row gap-[10px]">
                   <Link to='/' className='font-roboto-regular text-[#717171] text-base '>Home</Link>
                   <p className="font-roboto-regular text-[#717171] text-base">/</p>
                   <Link to='/shop' className='font-roboto-regular text-[#22222] text-base '>Store</Link>
                </div>
                <h1 className="font-roboto-bold text-[56px] text-black tracking-[0.75px]">Welcome to our beautiful Store</h1>
                <p className=" font-roboto-medium text-base text-black tracking-[0.5px]">A new adventure for perfect design. Discover our design system based on 8px grid and scaling components.</p>
                <ButtonPrimary textSize="text-lg" text="Explore products" bgColor="bg-purple-primary" textColor="text-white" px='px-3' py='py-1.5' />
            </div>
       </div>
    </div>
  )
}

export default ShopHero
