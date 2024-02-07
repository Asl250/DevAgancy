import { SignIn } from "@clerk/nextjs";
import '../../style.css'
 
export default function Page() {
  return (
    <div className="flex justify-center items-center mt-[100px]">
      <SignIn />
    </div>
)}