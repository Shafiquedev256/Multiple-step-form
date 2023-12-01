import bgImg from "./assets/bg-sidebar-mobile.svg"
import {Step1} from "./components/firstStep"
import {Step2} from "./components/secondStep"
import {Step3} from "./components/thirdStep"
import {ThankYou} from "./components/thankYou"
import {Confirm} from "./components/confirm"
import {useState} from "react"
function App() {
  const [step,setStep]=useState(1)
const changeSteps = ()=>{
  if(step>0 && step<6){
    setStep(state=> state+1)
  }else{
    setStep(1)
  }
  
}
  return (
    <>
<div class="bg-slate-100 h-screen w-screen relative">
<div class="w-screen relative h-max top-0 bg-white">
<img src={bgImg} class="w-screen"/>
<div class="absolute top-0 w-[100%] h-[100%] flex justify-center fixed">
<div class="options">1</div>
<div class="options">2</div>
<div class="options">3</div>
<div class="options">4</div>
</div>
</div>
{step ==1&&(<Step1/>)}
{step ==2&&(<Step2/>)}
{step ==3&&(<Step3/>)}
{step ==4&&(<Confirm step={step} setStep={setStep}/>)}
{step ==5&&(<ThankYou/>)}

<div class=" absolute bg-gray-200 w-screen p-3 fixed justify-between bottom-11 flex">
{step>1?(<button class="bg-white rounded p-2" onClick={()=>{
if(step>1){
setStep(state=>state-1)
}
}}>Back</button>):<div></div>}

{step<5?(<button class="bg-[#060E5E] text-white font-bold rounded p-2" onClick={changeSteps}>Next step</button>
):<div></div>}

</div>
</div>
    </>
  )
}

export default App
