import Link from "next/link";
import { useState } from "react";

function Buttonh(props:{link:string, children:any}) {
  return (
    <Link 
      href={props.link}
      className="w-[120px] h-14 flex justify-center items-center text-center px-1 border-2 rounded-2xl bg-sky-200 hover:bg-sky-300 hover:text-sky-50 uppercase"
    >
      {props.children}
    </Link>
  )
}

export default function Top() {
  const [closedNav, setClosedNav] = useState<Boolean>(true)
    
  return(
    <header className="w-full flex justify-between items-center bg-sky-50 sticky top-0 z-10 lg:h-16 md:px-28">
      <Link href={"/"}><div className="ml-3 md:ml-0 text-sky-800 italic"><h1 className="uppercase">Psicologo Paulo</h1></div></Link>
      <svg className="md:hidden" onClick={()=>setClosedNav(!closedNav)} height="80" width="80">
        {closedNav?(
          <g fill="none">
            <path stroke="black" d="M5 30 l30 0" />
            <path stroke="black" d="M5 40 l30 0" />
            <path stroke="black" d="M5 50 l30 0" />
          </g>
        ): (
          <g fill="none">
            <path stroke="black" d="M5 30 l20 20" />
            <path stroke="black" d="M5 50 l20 -20" />
          </g>
        )}
        desculpe, seu browser não suporta esse arquivo.
      </svg>
      <nav 
        className={`w-full md:w-80 h-60 md:h-full ${closedNav?'hidden':'flex'} md:flex flex-col md:flex-row justify-evenly items-center bg-sky-50 md:gap-3 absolute md:relative top-20 md:top-0 xl:mr-60`}
      >
        <Buttonh link="/">inicio</Buttonh>
        <Buttonh link="/#aboutme">quem sou</Buttonh>
        <Buttonh link="/#therapies">psicoterapia</Buttonh>
        <Buttonh link="/#contact">contatos</Buttonh>
        <Buttonh link="https://api.whatsapp.com/send?phone=5517997483419">
          <p className="flex gap-1 w-max justify-center items-center"><img className="h-6" src="/whats-icon.png" alt="logo whatsapp" />agende aqui</p>
        </Buttonh>
      </nav>
    </header>
  )
}