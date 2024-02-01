import Link from "next/link";

export default function Bottom(){
    return (
        <footer id="contact" className="w-full h-60 flex flex-col md:flex-row justify-around items-center bg-sky-950 text-sky-50 text-lg capitalize bottom-0 md:px-28">
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
            <div className="flex flex-col gap-3">
                <Link href={"https://api.whatsapp.com/send?phone=5517997483419"}>
                    <p className="normal-case">Converse comigo: </p>
                    <div className="flex gap-1"><img src="/whats-icon.png" alt="logo whatsapp" /> (17)997483419</div>
                    
                </Link>
            
                <Link href={"https://www.instagram.com/psicopaulogoncalves4/"} className="flex gap-1 lowercase"><img src="/insta-icon.png" alt="logo instagram" /> @psicopaulogoncalves4</Link>
            
            </div>
        </footer>
    )
}