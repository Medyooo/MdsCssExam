import product from './../../public/product.svg'
const ProductCard = ({productTitle, productCategory, productPrice, priceReduction}) => {
  return (
    <div className=" flex flex-col rounded-lg shadow-xl w-[290px] bg-[#F6F6F6] ">
      <div className="relative flex flex-col ">
            <div className=" flex flex-col  justify- gap-[10px] h-[200px] w-[290px]">
                  <div className="absolute z-10 gap-[10px] top-[171px] left-[118px]">
                      <div className=" flex z-3 flex-row gap-1  ">
                         <button className={`rounded w-[10px] h-[10px] bg-black `}></button>
                         <button className={`rounded w-[10px] h-[10px] bg-white `}></button>
                         <button className={`rounded w-[10px] h-[10px] bg-white `}></button>


                      </div>
                    
                  </div>
                  <div className=" absolute flex flex-row  items-center">
                     <img className="flex flex-row  items-center " src={product} alt="Product Image"/>
                  </div>
            </div>

            <div className="absolute left-60 flex flex-row justify-center items-center h-[50px] w-[50px] p-[10px] bg-[#FEFEFE] rounded-bl-lg rounded-tr-lg">
              <div className='flex flex-row  font-roboto-regular text-black text-[14px] tracking-[0.75px]'>10%</div>
            </div>
      </div>

      <div className="flex flex-col justify-center h-[200px] pt-[30px] gap-[15px] bg-[#FEFEFE]">
          <div className="flex flex-col pl-[30px] pr-[30px] gap-[10px]">
              <div className="text-[32px] font-roboto-bold text-black tracking-[1px] ">{productTitle}</div>
              <div className="text-[14px] text-[#9A9A9A] font-roboto-regular tracking-[0.75px]">{productCategory}</div>
              <div className="flex flex-row gap-[15px]">
                <div className="flex text-base text-black font-roboto-bold">{productPrice} €</div>
                <div className="flex items-center text-[14px] text-[#B3B3B3] line-through font-roboto-bold">{priceReduction} €</div>

              </div>
          </div>
       </div>
       <button className=" relative  font-roboto-medium text-white text-base py-4 px-2 bg-purple-primary rounded-br-lg rounded-bl-lg tracking-[0.75px]">Add to cart</button>
    </div>
  )
}

export default ProductCard
