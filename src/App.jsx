import bgImg from "./assets/bg-sidebar-mobile.svg"
import xlbgImg from "./assets/bg-sidebar-desktop.svg"
import {Step1} from "./components/firstStep"
import {Footer} from "./components/footer"
import {Step2} from "./components/secondStep"
import {Step3} from "./components/thirdStep"
import {ThankYou} from "./components/thankYou"
import {Confirm} from "./components/confirm"
import {useState,useEffect} from "react"
function App() {
  const [style1,setStyle1]=useState("options bg-[#BDE1FF] border-[#BDE1FF]")
  const [style2,setStyle2]=useState("options borded-white md:h-20 md:w-20")
  const [style3,setStyle3]=useState("options borded-white")
  const [style4,setStyle4]=useState("options borded-white")
  const [step,setStep]=useState(1)
const changeSteps = ()=>{
setStep(step+1)
}

useEffect(()=>{
if(step==1){
    setStyle1("options bg-[#BDE1FF] border-[#BDE1FF]")
  }else {
setStyle1("options border-white")
  }
  if(step==2){
    setStyle2("options bg-[#BDE1FF] border-[#BDE1FF]")
  }else{
setStyle2("options border-white")
  }
  if(step==3){
    setStyle3("options bg-[#BDE1FF] border-[#BDE1FF]")
  }else{
setStyle3("options border-white")
  }
  if(step>3){
    setStyle4("options bg-[#BDE1FF] border-[#BDE1FF]")
  }else{
setStyle4("options border-white")
  }
},[step])
  return (
    <>
<div class="bg-slate-100 md:p-2 md:bg-white w-[100%] relative h-max md:flex md:flex-row md:justify-center md:h-min">
<div>
<div class="w-screen relative h-max  md:h-[500px] md:bg-[url('/src/assets/bg-sidebar-desktop.svg')] bg-cover bg-center rounded md:m-2 md:w-72">
<img src={bgImg} class="w-[100%] md:hidden"/>
<div class="absolute top-0 w-[100%] md:h-max  flex justify-center md:flex-col  fixed md:pl-4 ">

<div class="flex flex-row md:pt-3">
<div class={style1}>1</div>
<div class="hidden md:block ml-2 flex flex-col">
<span class="text-gray-400">STEP 1</span><br/>
<span class="text-white font-bold">YOUR INFO</span>
</div>
</div>

<div class="flex flex-row">
<div class={style2}>2</div>
<div class="hidden md:block ml-2 flex flex-col">
<span class="text-gray-400">STEP 2</span><br/>
<span class="text-white font-bold">SELECT PLAN</span>
</div>
</div>

<div class="flex flex-row">
<div class={style3}>3</div>
<div class="hidden md:block ml-2">
<span class="text-gray-400">STEP 3</span><br/>
<span class="text-white font-bold">ADDS-ON</span>
</div>
</div>

<div class="flex flex-row">
<div class={style4}>4</div>
<div class="hidden md:block ml-2">
<span class="text-gray-400">STEP 4</span><br/>
<span class="text-white font-bold">SUMMARY</span>
</div>
</div>

</div>
</div>
</div>
<div class="md:flex md:flex-col md:mt-10 h-screen  md:w-min md:h-max  md:justify-between">
{step ==1&&(<Step1/>)}
{step ==2&&(<Step2/>)}
{step ==3&&(<Step3/>)}
{step ==4&&(<Confirm step={step} setStep={setStep}/>)}
{step ==5&&(<ThankYou/>)}

<div class="md:hidden w-56 h-80"></div>

<div class="   p-3  justify-between md:w-[100%] w-screen md:static  flex  bg-gray-200">
{step>1||step>5?(<button class="bg-white rounded p-2" onClick={()=>{
if(step>1){
setStep(state=>state-1)
}
}}>Back</button>):<div></div>}
{step<5?(<button class="bg-[#060E5E] text-white font-bold rounded p-2" onClick={changeSteps}>Next step</button>
):<div></div>}
</div>
</div>
</div>
<Footer/>
    </>
  )
}

export default App
