import DiscoverItems from "./DiscoverItems"

const Discover = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-20 gap-10 w-full">
      <div className="flex flex-col justify-center gap-[72px]">
         <div className="flex flex-col justify- items-center gap-4">
             <h2 className="font-roboto-medium text-black text-5xl tracking-[0.75px]">Discover what sets us apart</h2>
             <p className="text-base font-roboto-medium text-black tracking-[0.75px]">Our suite of SaaS solutions is packed with powerful features.</p>
         </div>
         <div className="flex flex-row flex-wrap gap-10 max-w-7xl">
           <DiscoverItems title='Seamless integration' text='Integrate App seamlessly with your existing systems and processes, ensuring a smooth transition to our software.'/>
           <DiscoverItems title='User-friendly interface' text='Our intuitive user interface ensures your team can hit the ground running with minimal training, increasing productivity.'/>
           <DiscoverItems title='Real-time analytics' text='Gain access to real-time data and analytics, enabling you to make informed decisions and stay ahead of the curve'/>
           <DiscoverItems title='Mobile accessibility' text='Access your data and tools from anywhere with mobile compatibility, keeping your team connected on the go.'/>
           <DiscoverItems title='Customization options' text='Tailor App to your unique business needs with extensive customization options for a personalized experience.'/>
           <DiscoverItems title='Scalability' text="Whether you're a small startup or a large enterprise, our solutions scale with your business as it grows."/>
           <DiscoverItems title='Robust security' text='Your data is our top priority. Benefit from state-of-the-art security measures to keep your information safe.'/>
           <DiscoverItems title='Ongoing support' text='Count on our dedicated support team for training, troubleshooting, and continuous improvement.'/>
           <DiscoverItems title='Robust security' text='Count on our dedicated support team for training, troubleshooting, and continuous improvement.'/>
         </div>
      </div>
    </div>
  )
}

export default Discover
