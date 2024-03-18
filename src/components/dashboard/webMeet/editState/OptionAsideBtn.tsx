import { useState, useImperativeHandle, forwardRef } from "react";
import Image from "next/image";
import edit from "../../../../../../public/edit.png";
import deletImg from "../../../../../public/trash.png";

const OptionAsideBtn = forwardRef((props, ref) => {
  const [schdEdit, setSchdEdit] = useState(false);

  useImperativeHandle(ref, ()=>{
    return {
      clickHandle(){
        setSchdEdit(!schdEdit);
      }
    }
  })

  return (
      <div id={`e`} className={`absolute -right-3 -top-12 bg-stone-100 p-4 w-28 rounded-xl z-10 ${!schdEdit && 'hidden'}`}>
            <button className="flex place-items-center space-x-3">
                <Image src={deletImg} alt="trash" className="w-fit h-fit"/>
                <span className="text-xxs text-slate-500 font-semibold">Delete</span>
            </button>
        </div>
  )
});

OptionAsideBtn.displayName = "OptionAsideBtnOptionAsideBtn";

export default OptionAsideBtn;