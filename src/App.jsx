import './App.css';

function App() {
  return (
    <div className="py-10 max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 font-ibm">

      <div>
        <img src="./logo.svg" alt="" className='w-44' />
      </div>    
      

      <div className='mx-auto text-center pt-8'>
        <h1 className='text-white text-[40px] leading-none md:text-[60px] font-semibold'>Sandbox as a Service</h1>
        <p className='text-[#9EFF00] text-3xl' >for Africa's Digital Transformation</p>

        <div className="flex justify-center">
          <div className='pt-10 flex flex-col items-start space-y-3'>
            <div className='flex items-center justify-center space-x-4 '>
              <img src="./marker.svg" alt="" className='w-5'/>
              <p className='text-white text-xl font-semibold'>Fintech Transformation</p>
            </div>

            <div className='flex items-center justify-center space-x-4'>
              <img src="./marker.svg" alt="" className='w-5'/>
              <p className='text-white text-xl font-semibold'>Digitization</p>
            </div>
            <div className='flex items-center justify-center space-x-4'>
              <img src="./marker.svg" alt="" className='w-5'/>
              <p className='text-white text-xl font-semibold'>API As A Service</p>
            </div>
          </div>
        </div>

        <div className='pt-20'>
          <h2 className='text-white text-3xl font-light'>We <span className='font-bold'>Build+Consult </span>For:</h2>
          
          <div className='flex justify-center pt-8 w-full'>
          <div className='space-y-4 md:flex md:space-y-0 justify-between items-center gap-10 lg:gap-20'>
            <div className='block'>
              <img src="./bank.svg" alt="" className='w-20 mx-auto' />
              <p className='text-white pt-1 font-light'>Banks</p>
            </div>

           <div>
            <img src="./finance.svg" alt="" className='w-20 mx-auto' />
            <p className='text-white pt-1 font-light'>Financial Services</p>
          </div>

          <div>
            <img src="./insurance.svg" alt="" className='w-20 mx-auto' />
            <p className='text-white pt-1 font-light'>Insurance Companies</p>
          </div>
        </div>
      </div>
         
         
        </div>

        <div className="w-full input-color rounded-[30px] mt-14 py-7">
          <p className='text-white pb-3'>For business enquiries reach out to:</p>

          <div className='] text-white  mx-auto text-center p-2 rounded-[50px] text-2xl'>
            <button className='bg-[#3EE500] px-6 lg:px-16 py-1 rounded-[50px]'>
              hello@samenda.io
            </button>
          </div>
        </div>

        <div className='flex justify-between items-center pt-6'>
           <div className='flex text-sm font-light space-x-2 items-center text-white'>
             <p >POWERED BY </p><img src="./imalipay.svg" alt="" className='w-28'/>
          </div>
          
          <img src="./social.svg" alt="" className='w-20' />
        </div>
       
      </div>
    </div>
  );
}

export default App;
