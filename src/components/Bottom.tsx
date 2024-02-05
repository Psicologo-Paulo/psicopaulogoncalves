import Link from "next/link";

export default function Bottom(){
    return (
        <footer id="contact" className="w-full min-h-60 grid grid-cols-2 gap-3 bg-sky-950 text-sky-50 text-lg capitalize bottom-0 p-2 md:px-28">
            <div className="col-span-2 flex justify-center items-center text-center normal-case font-serif text-xl">
                <p>&quot;O que perturba o ser humano não são fatos, mas a interpretação que ele faz dos fatos.&quot; — Epitectus Século I</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-around items-center">
                <div>
                    <p>
                        end.: Rua 21 de abril 466
                    </p>
                    <p>
                        edifício Minas Center &mdash;  1ºandar, sala 12 
                    </p>
                    <p>
                        catanduva &mdash; SP
                    </p>
                </div>
            </div>
            
            <div className="col-span-2 md:col-span-1 flex flex-col justify-around items-center">
                <div className="flex flex-col gap-3">
                    <Link href={"https://api.whatsapp.com/send?phone=5517997483419"}>
                        <p className="normal-case">Converse comigo: </p>
                        <div className="flex gap-1"><img src="/whats-icon.png" alt="logo whatsapp" /> (17)997483419</div>
                        
                    </Link>
                
                    <Link href={"https://www.instagram.com/psicopaulogoncalves4/"} className="flex gap-1 lowercase"><img src="/insta-icon.png" alt="logo instagram" /> @psicopaulogoncalves4</Link>
                </div>
            </div>
        </footer>
    )
}