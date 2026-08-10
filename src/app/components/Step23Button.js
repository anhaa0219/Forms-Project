import { Arrow } from "../icons/Arrow";
import { Arrowleft } from "../icons/Arrowleft";

export const Step23Button = (props) => {
  const { type, onClick, onClock, id } = props;
  return (
    <div className="w-104 h-11 flex gap-2">
      <button
        type={type}
        onClick={onClick}
        className="flex-1 h-11 py-2.5 px-3 gap-1 bg-[#FFFFFF] border border-solid border-[#CBD5E1] rounded-md flex justify-center items-center cursor-pointer hover:bg-slate-50 transition-colors"
      >
        <Arrowleft />
        <p className="font-inter font-medium text-[16px] text-[#202124]">
          Back
        </p>
      </button>
      <button
        type={type}
        onClick={onClock}
        className="flex-2 h-11 flex gap-1.5 items-center rounded-md py-2.5 px-3 bg-[#121316] justify-center cursor-pointer hover:bg-[#27282c] transition-colors"
      >
        <p className="font-inter font-medium text-[16px] text-[#FFFFFF]">
          Continue
        </p>
        <div className="flex font-inter font-normal text-[16px] text-[#FFFFFF]">
          <p>{id}</p>
          <p>/3</p>
        </div>
        <Arrow />
      </button>
    </div>
  );
};
