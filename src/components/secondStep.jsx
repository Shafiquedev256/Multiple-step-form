import icone_acrade from "../assets/icon-arcade.svg"
import icone_pro from "../assets/icon-pro.svg"
import icone_advanced from "../assets/icon-advanced.svg"
import {useState,useEffect} from "react"
export const Step2 = ()=>{
  const [planToggle,setPlanToggle] = useState("Monthly")
  const [plan,setPlan] = useState([
    "$9/mo","$12/mo","$15/mo",""
    ])
  useEffect(()=>{
    if(planToggle == "Yearly"){
      setPlan(["$90/yr","$120/yr","$150/yr","2 month free"])
    }
    if(planToggle == "Monthly"){
      setPlan(["$9/mo","$12/mo","$15/mo",""])
    }
    localStorage.setItem("period",planToggle)
  },[planToggle])
  const handleToggle =()=>{
  if(planToggle=="Monthly"){
    setPlanToggle("Yearly")
  }else {
    setPlanToggle("Monthly")
  }
  }
  
  const handleAcrade = ()=>{
const object = {
  planEl:"Acrade",
  cost:plan[0],
  count:{
    Yearly:90,
    Monthly:9,
  }
}
  localStorage.setItem("plan",JSON.stringify(object))
  }
  const handleAdvanced = ()=>{
const object = {
  planEl:"Advanced",
  cost:plan[1],
  count:{
    Yearly:120,
    Monthly:12,
  }
}
  localStorage.setItem("plan",JSON.stringify(object))
  }
  const handlePro = ()=>{
const object = {
  planEl:"Pro",
  cost:plan[2],
  count:{
    Yearly:150,
    Monthly:15,
  }
}
  localStorage.setItem("plan",JSON.stringify(object))
  }
  
  return(
    <div class="w-screen flex justify-center md:w-min">
    <div class="w-72 rounded-2xl bg-white p-5 md:static absolute top-20 shadow-lg md:shadow-none md:rounded-none  md:w-[600px]">
 <div class=" text-2xl text-[#060E5E] font-bold">Select your plan</div>
  <div class="text-gray-400 text-sm">You have the option of monthly or yearly billing.</div>
  
<div class="cards_options hover:bg-[#F9F0FF] hover:border-purple-500 " onClick={handleAcrade}>
<img src={icone_acrade}/>
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] text-sm font-bold">Acrade</div>
 <div class="text-sm text-gray-500">{plan[0]}</div>
 <div class="text-sm text-[#060E5E]">{plan[3]}</div>
 </div>
 </div>
 
<div class="cards_options hover:bg-[#F9F0FF] hover:border-purple-500 " onClick={handleAdvanced}>
<img src={icone_advanced}/>
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] text-sm font-bold">Advanced</div>
 <div class="text-sm text-gray-500">{plan[1]}</div>
  <div class="text-sm text-[#060E5E]">{plan[3]}</div>
 </div>
 </div>
 
<div class="cards_options hover:bg-[#F9F0FF] hover:border-purple-500" onClick={handlePro}>
<img src={icone_pro}/>
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] text-sm font-bold">Pro</div>
 <div class="text-sm text-gray-500">{plan[2]}</div>
 <div class="text-sm text-[#060E5E]">{plan[3]}</div>
 </div>
 </div>
 
<div class="bg-gray-200 p-1 flex items-center justify-center">
<span class=" text-sm font-medium text-gray-900 dark:text-gray-300">Monthly</span>
<label class="relative inline-flex items-center  cursor-pointer ml-3">
  <input type="checkbox" onChange={handleToggle} value={planToggle} class="sr-only peer" />
  <div class="w-11 h-6  rounded-full peer   peer-checked:after:translate-x-full   after:absolute after:top-0.5 after:start-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  bg-[#060E5E]"></div>
</label>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yearly</span>
 </div>


    </div>
    </div>
    )
}