import icon_thankYou from "../assets/icon-thank-you.svg"
export const ThankYou = ()=>{
  
  return(
    <div class="w-screen flex justify-center">
    <div class="w-[300px] rounded-2xl bg-white p-4  absolute top-20 shadow-lg flex flex-col items-center justify-center">
    <img src={icon_thankYou} clas="mt-4"/>
<div class="text-2xl font-bold text-[#060E5E] mt-4">Thank you!</div>

  <div class=" pt-4 text-gray-400 text-center m-2">Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.
  </div>
    </div>
    </div>
    )
}