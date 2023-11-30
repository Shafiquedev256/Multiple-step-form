import icone_acrade from "../assets/icon-arcade.svg"
import icone_pro from "../assets/icon-pro.svg"
import icone_advanced from "../assets/icon-advanced.svg"
import {useState,useEffect} from "react"
export const Step2 = ()=>{
  const [planToggle,setPlanToggle] = useState("monthly")
  const [plan,setPlan] = useState([
    "$9/mo","$12/mo","$15/mo",""
    ])
  useEffect(()=>{
    if(planToggle == "yearly"){
      setPlan(["$90/yr","$120/yr","$150/yr","2 month free"])
    }
    if(planToggle == "monthly"){
      setPlan(["$9/mo","$12/mo","$15/mo",""])
    }
    
  },[planToggle])
  return(
    <div class="w-screen flex justify-center">
    <div class="w-72 rounded-2xl bg-white p-4  absolute top-20 shadow-lg">
 <div class=" text-2xl text-[#060E5E] font-bold">Select your plan</div>
  <div class="text-gray-400 text-sm">You have the option of monthly or yearly billing.</div>
  
<div class="cards_options hover:bg-[#F9F0FF] hover:border-purple-500 ">
<img src={icone_acrade}/>
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] font-bold">Acrade</div>
 <div class="text-sm text-gray-500">{plan[0]}</div>
 <div class="text-sm text-[#060E5E]">{plan[3]}</div>
 </div>
 </div>
 
<div class="cards_options hover:bg-[#F9F0FF] hover:border-purple-500 ">
<img src={icone_advanced}/>
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] font-bold">Advanced</div>
 <div class="text-sm text-gray-500">{plan[1]}</div>
  <div class="text-sm text-[#060E5E]">{plan[3]}</div>
 </div>
 </div>
 
<div class="cards_options hover:bg-[#F9F0FF] hover:border-purple-500">
<img src={icone_pro}/>
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] font-bold">Pro</div>
 <div class="text-sm text-gray-500">{plan[2]}</div>
 <div class="text-sm text-[#060E5E]">{plan[3]}</div>
 </div>
 </div>
 
<div class="bg-gray-200 p-1 flex items-center justify-center">
<span class=" text-sm font-medium text-gray-900 dark:text-gray-300">Monthly</span>
<label class="relative inline-flex items-center  cursor-pointer ml-3">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer   peer-checked:after:translate-x-full   after:absolute after:top-0.5 after:start-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  bg-[#060E5E]"></div>
</label>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yearly</span>
 </div>
<div></div>

    </div>
    </div>
    )
}