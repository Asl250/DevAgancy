import { SignUp } from "@clerk/nextjs";
import '../../style.css'

 
export default function Page() {
  return (
      <div className="flex justify-center items-center mt-[50px]">
        <SignUp />
      </div>
  )
}   