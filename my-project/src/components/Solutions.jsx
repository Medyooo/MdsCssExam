
const Solutions = () => {
  return (
    <div className="flex justify-center items-center bg-purple-secondary h-[540px] w-full py-20 px-10 ">
        <div className="flex flex-col justify-center items-center gap-[72px] ">
            <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="  font-roboto-medium text-white text-5xl tracking-[0.75px] ">SaaS solutions that drive results</h2>
                <p className="  text-2xl font-roboto-bold text-white">Explore our suite of powerful components solutions.</p>
            </div>
              <div className="flex flex-row justify-center items-start h-32 max-w-7xl gap-6">
                  <div className="flex flex-col justify-start items-start h-28 gap-6 w-1/3">
                      <h4 className="font-roboto-bold text-white text-3xl">Enterprise planning</h4>
                      <p className="font-roboto-medium text-white text-base  tracking-[0.75px]">Seamlessly manage and integrate all core business functions to optimize efficiency and productivity.</p>
                  </div>
                  <div className="flex flex-col justify-start items-start  gap-6 w-1/3">
                      <h4 className="font-roboto-bold text-white text-3xl">Project management</h4>
                      <p className="font-roboto-medium text-white text-base tracking-[0.75px]">Ensure project success by efficiently planning, executing, and tracking your initiatives with our project management software.</p>
                  </div>
                  <div className="flex flex-col justify-start items-start  gap-6 w-1/3">
                      <h4 className="font-roboto-bold text-white text-3xl">Analytics and reporting</h4>
                      <p className="font-roboto-medium text-white text-base tracking-[0.75px]">Leverage data-driven insights to make informed decisions and stay ahead of the competition.</p>
                  </div>
                  

              </div>

         </div>
    </div>
  )
}

export default Solutions
