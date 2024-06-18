import ImgApropos from "./../../assets/images/DSC08931-1-2+FX.PNG";

function Apropos() {
  return (
    <div className="w-full h-[500px] overflow-hidden ">
      <img
        className="w-full h-full object-cover"
        src={ImgApropos}
        alt="Image clem"
      />
    </div>
  );
}

export default Apropos;
