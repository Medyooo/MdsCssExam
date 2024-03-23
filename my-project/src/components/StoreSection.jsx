import search from '../../public/search.svg'
import adjustments from '../../public/adjustments.svg'
import chevron from '../../public/chevron-down.svg'
import ProductCard from './ProductCard'
import refresh from '../../public/refresh.svg'
const StoreSection = () => {
  return (
    <div className="flex flex-col p-10 gap-10 w-full">
       <div className="flex flex-col gap-[72px]">
           <div className="flex flex-row justify-between w-full"> 
              <div className="flex flex-row justify-between border border-[#B3B3B3] pt-2 pr-2 pb-2 pl-4 w-[290px] rounded">
                 <input type='text' placeholder='Search a product ...' className="font-roboto-medium text-base text-[#B3B3B3] outline-none tracking-[1px] "></input>
                 <div className="flex flex-row justify-center items-center gap-[10px] border-l border-[#B3B3B3]  pl-2  ">
                     <img className=' w-5 h-5  ' src={search} />
                 </div>
              </div> 
               <div className='flex flex-row gap-6'>
               <button className=' flex flex-row justify-center  items-center gap-1 text-lg rounded bg-purple-primary border-purple-primary  font-roboto-medium text-base text-white pt-2 pr-3 pb-2 pl-4 tracking-[0.75px]' >Filter
               <img  className='w-5 h-5' src={adjustments} />
                </button>
                <div className=' flex flex-row justify-between w-[180px] rounded border border-[#808080] px-3 py-1.5 gap-2'>
                  <div className='flex flex-row justify-start items-center text-base text-[#808080] font-roboto-medium tracking-[1px]'>ASC Names</div>
                  <img className='pl-2 border-l border-white' src={chevron} alt='chevron' />
                </div>
               </div>

           </div>
           <div className='flex flex-col'>
           <div className='flex flex-row flex-wrap  justify-center gap-10'>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
                <ProductCard productCategory='Product Category' productTitle='Product Title' productPrice='0.00.000' priceReduction='0.00.000'/>
           </div>
                <div className='flex flex-row justify-center  pt-10 pb-10 gap-4'>
                <button className=' flex flex-row  justify-center bg-white items-center gap-1 text-lg rounded border-2 border-purple-primary  font-roboto-medium text-base text-purple-primary pt-2 pr-3 pb-2 pl-4 tracking-[0.75px]' >Load more 
               <img  className='w-5 h-5' src={refresh} />
                </button>
                </div>
           </div>
       </div>
    </div>
  )
}

export default StoreSection
