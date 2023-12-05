import {useState,useEffect} from "react"
export const Confirm = ({step,setStep})=>{
  const [count,setCount] = useState(0)
  const [period,setPeriod] = useState(localStorage.getItem("period"))
  const [plan,setPlan] = useState(JSON.parse(localStorage.getItem("plan"))||[])
  const [addOn,setAddOn] = useState(JSON.parse(localStorage.getItem("addOn"))||[])
  useEffect(() => {
  let totalCount = 0;

  addOn.forEach(item => {
    if (period === "Yearly") {
      totalCount += item.count.Yearly;
    }
    if (period === "Monthly") {
      totalCount += item.count.Monthly;
    }
  });

  if (period === "Yearly") {
    totalCount += plan.count.Yearly;
    totalCount ="$"+totalCount+"/yr"
  } else {
    totalCount += plan.count.Monthly;
    totalCount ="$"+totalCount+"/mo"
  }

  setCount(totalCount);
}, []);

  return(
    <div class="w-screen flex justify-center md:w-max">
    <div class="w-72 rounded-2xl bg-white p-5 md:static absolute top-20 shadow-lg md:shadow-none md:rounded-none  md:w-[600px]">
  <div class="text-2xl font-bold text-[#060E5E]">Finishing up</div>
 <div class="text-sm text-gray-400"> Double-check everything looks OK before confirming.</div>
<div class=" bg-[#590B880F] p-2 rounded">
<div class="flex flex-col ml-2">
<div class="text-[#060E5E] text-sm font-bold">{plan.planEl}({period})</div>
 <div class="text-sm text-gray-500"></div>
 <div class="flex flex-row justify-between w-[100%] items-center mb-1">
  <div class="text-sm text-gray-400 underline" onClick={()=>setStep(2)}>change</div>
 <div class="text-sm font-bold text-[#060E5E]">{plan.cost}</div>
 </div>
 <hr/>
 <div class="mt-1">
 {
   addOn != []&&(addOn.map(item=>{
     return (
     <div class="flex flex-row justify-between p-2">
     <span class="text-sm text-gray-500">{item.title}</span>
     <span class="text-sm text-[#060E5E] font-bold">{item.cost}</span>
     </div>
     )
   }))
 }
 </div>
 </div>
 </div>
 <div class="flex flex-row justify-between mt-3 mb-3">
 <span class="text-sm ml-2 text-gray-600">Total({period})</span>
 <span class="font-bold text-sm mr-2 text-purple-500">{count}</span>
 
 </div>
    </div>
    </div>
    )
}