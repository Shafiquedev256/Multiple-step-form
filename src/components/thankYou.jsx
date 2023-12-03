import icon_thankYou from "../assets/icon-thank-you.svg"
export const ThankYou = ()=>{
  
  return(
    <div class="w-screen flex justify-center md:items-center md:w-min">
       <div class="w-72 rounded-2xl bg-white p-5 md:static absolute top-20 shadow-lg md:shadow-none md:rounded-none  md:w-[600px] flex items-center flex-col">
    <img src={icon_thankYou} clas="mt-4"/>
<div class="text-2xl font-bold text-[#060E5E] mt-4">Thank you!</div>

  <div class=" pt-4 text-gray-400 text-center m-2 md:w-72">Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.
  </div>
    </div>
    </div>
    )
}