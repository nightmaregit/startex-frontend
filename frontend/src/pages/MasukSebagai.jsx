import logo_sekolah from "../assets/image/buku/logo_sekolah.png";

function MasukSebagai() {
    
  return (
    <div>
        <div className="w-screen h-screen p-0 m-0 flex justify-center items-center gap-12">
            <div className="bg-masuk h-[500px] w-[350px] flex justify-center items-center rounded-xl  ">
                <img src={logo_sekolah} className="w-[280px] h-[280px]" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className=" text-[28px] text-[#0C356A] tracking-wide font-bold">
                        MASUK SEBAGAI
                </div>
                <div>
                    <button className=" w-[285px] border-[3px] font-semibold border-[#0C356A] rounded-md">
                        PESERTA DIDIK
                    </button>
                </div>
                <div>
                    <button className=" w-[285px] border-[3px] font-semibold border-[#0C356A] rounded-md">
                        ADMINISTRATOR
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MasukSebagai