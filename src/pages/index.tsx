import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(()=>{

    const lLeaf=document.getElementById('lLeaf');
    const rLeaf=document.getElementById('rLeaf');
    if(lLeaf==null || rLeaf==null){
      return
    }

    window.addEventListener('scroll',()=>{
      const valueScollY= window.scrollY;
      lLeaf.style.top=valueScollY * 0.50 + 'px';
      rLeaf.style.top=valueScollY * 0.50 + 'px';
    })
  },[])

  return (
    <div className="font-serif ">
      <Top/>
      <main>
        <section id="start" className="h-screen overflow-hidden bg-gradient-radial from-sky-600 to-sky-100">
          <div className="h-full grid grid-cols-2 bg-[url(/paulo_e.png)] bg-no-repeat bg-top pb-28">
            <div className="h-[65vh] col-span-2">
              <div className="flex">
                <img id="lLeaf" className="max-w-none w-1/2 lg:max-w-xl lg:w-full absolute left-0 top-0" src="/eFolha.png" alt="folhagem do lado esquerdo" />
                <img id="rLeaf" className="max-w-none w-1/2 lg:max-w-xl lg:w-full absolute right-0 top-0" src="/dFolha.png" alt="folhagem do lado direito" />
              </div>
            </div>
            <div className="w-full col-span-2 from-sky-50 to-sky-50 bg-gradient-to-r md:from-transparent md:via-sky-50 md:to-transparent text-center text-sky-900 p-2">
              <div className="hidden lg:block">
                <img className="h-[20vh] absolute" src="/simbolo.png" alt="" />
                <img className="h-[20vh] right-0 absolute" src="/simbolo.png" alt="" />
              </div>
              <h1 className="text-2xl font-bold">PAULO ALEXANDRE GONÇALVES</h1>
              <h2 className="text-xl font-bold">PSICÓLO CLÍNICO | CRP 06/119960</h2>
              <h2 className="text-xl">TERAPIA COGNITVO COMPORTAMENTAL</h2>
              <p className="text-lg"> &quot; O QUE PERTUBA O SER HUMANO NÃO SÃO FATOS,</p>
              <p className="text-lg">MAS A INTERPRETAÇÃO QUE ELE FAZ DOS FATOS. &quot;</p>
              <p className="text-md">—Epitectus século I</p>
            </div>
          </div>
        </section>
        
        <section id="aboutme" className="min-h-screen px-10 py-20 lg:px-48 bg-gradient-to-b from-sky-50 to-sky-100 md:flex md:items-center">
          <div className="md:flex md:justify-center md:items-center md:gap-10">
            <div className="md:max-w-2xl md:w-1/2 p-auto"><img src="/paulo_2.png" alt="Foto" /></div>
            <div className="md:max-w-[664px] md:w-full mt-5 md:mt-0 flex flex-col gap-2 text-lg text-justify indent-7">
              <h1 className="text-2xl font-bold uppercase indent-0">quem sou eu</h1>
              <p>Sou Paulo Alexandre Gonçalves, psicólogo clínico. Sou bacharel em Filosofia, licenciado em Psicologia e pós graduando em Terapia Cognitivo comportamental, que é a abordagem que utilizo. Meu trabalho é voltado para: adolescentes, jovens, adultos e idosos.</p>
              <p>No meu modo de entender, a psicoterapia pode ser útil não só para quem desenvolveu algum transtorno (depressão, ansiedade, stress etc), mas também para aquele que quer se conhecer melhor: descobrir e aceitar suas potencialidades e fragilidades, tendo uma melhor qualidade de vida. </p>
            </div>
          </div>
        </section>

        <section id="therapies" className="min-h-screen px-10 py-20 lg:px-48 bg-gradient-to-b from-sky-100 to-sky-200 md:flex md:items-center">
          <div className="flex flex-col items-center gap-10 text-justify indent-7">
            <h2 className="text-3xl uppercase indent-0">psicoterapia</h2>
            <p className="text-xl">A terapia oferece um espaço seguro e acolhedor para explorar uma ampla gama de questões emocionais, comportamentais e interpessoais em uma jornada de autodescoberta e crescimento pessoal. Sob a orientação de um profissional qualificado, o tratamento pode ser realizado em diversas frentes e tem como objetivo promover mudanças positivas e duradouras na vida de um indivíduo. Trabalho com duas modalidades de terapia:</p>
            
            <div className="md:grid md:grid-cols-2 md:gap-10 text-xl">
                <div>
                  <h2 className="text-2xl indent-0">PSICOTERAPIA PRESENCIAL</h2>
                  <p>A terapia presencial é feita no consultório, com horário marcado e duração de 50 minutos por sessão.</p>
                  <p>Logicamente também presamos pelo sigilo, que é previsto pelo código de ética profissional. </p>
                </div>
                
                <div>
                  <h2 className="text-2xl indent-0">PSICOTERAPIA ON-LINE</h2>
                  <p>A terapia online tem o mesmo principio que a presencial, porém esta é feita de forma remota podendo ser via  Meet, Zoom que são as plataformas mais seguras. Além da modalidade do atendimento online proporcionar flexibilidade de horário e economia de tempo com deslocamentos.</p>
                  <p>Meu atendimento on-line segue as orientações previstas pelo conselho profissional, visando a segurança e o sigilo do paciente.</p>
                </div>
            </div>
        
            <Link href={"/terapias/tcc"}>
              <div className="border-2 border-sky-700 hover:border-sky-50 bg-transparent hover:bg-sky-600 text-xl text-sky-700 hover:text-sky-50 rounded-xl p-3 transition ease-linear duration-100 hover:-translate-y-1 hover:scale-110">
                <h2 className="text-2xl text-center mb-2 indent-0">PSICOTERAPIA COGNITVO COMPORTAMENTAL</h2>
                <p>A TCC tem seu foco principal na parte do sofrimento que o indivíduo está vivenciando naquele momento da sua vida. Dessa forma, seu objetivo, visa auxiliá-lo no desenvolvimento de novas habilidades comportamentais e a correção cognitiva, necessárias para compreender e empenhar as mudanças necessárias no seu ambiente.</p>
                <p>Além de muito util no tratamento de insonia, ansiedade, panico, depresão e outros casos, ela também é um excelente meio para o autoconhecimento, nos proporcionando vivermos uma vida melhor.</p>
                <p>Caso queira saber mais sobre, clique neste card.</p>
              </div>
            </Link>

            <h3 className="text-3xl text-center uppercase font-semibold indent-0">Beneficios</h3>
            <div className="grid md:grid-cols-2 gap-8 indent-0">
              <div>
                <p className="text-xl uppercase">a curto prazo</p>
                <ul className="list-disc text-lg">
                  <li>ser ouvido ativamente sobre seus problemas</li>
                  <li>sentir-se apoiado diante das dificuldades</li>
                  <li>Trabalhar um problema com auxílio de um profissional, o que facilitará sua resolução</li>
                </ul>
              </div>
              <div>
                <p className="text-xl uppercase">a longo prazo</p>
                <ul className="list-disc text-lg">
                  <li>ganhar mais autoconfiança</li>
                  <li>assumir a responsabilidade e assim poder reajustar os padrões de comportamento que estão prejudicando sua vida</li>
                  <li>desenvolver uma escuta mais atenta aos outros, mas também a si mesmo</li>
                  <li>aprender a mobilizar melhor seus recursos pessoais para lidar com situações desestabilizadoras e estressantes</li>
                  <li>controle ou redução de transtornos de personalidade</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center gap-4 text-justify hyphens-auto">
              <div className="h-full col-span-2 flex gap-2 border-2 border-sky-700 rounded-xl p-3 transition ease-linear">
                <div>
                  <h3 className="text-2xl text-center uppercase font-semibold">Lidar com sentimentos</h3>
                  <p className="text-xl">A terapia é um processo de entendimento do que falta para lidar com nossos sentimentos de uma forma assertiva, de modo que eles impactem positivamente em nossa vida.</p>
                </div>
              </div>
              
              <div className="h-full col-span-2 flex gap-2 border-2 border-sky-700 rounded-xl p-3 transition ease-linear">
                <div>
                  <h3 className="text-2xl text-center uppercase font-semibold">Combater medos</h3>
                  <p className="text-xl ">A vergonha, o medo,  que nos impedem de expandir nossa forma de ser,  são trabalhados e entendidos, para encontrarmos estratégias mais assertivas.</p>
                </div>
              </div>
              
              <div className="h-full col-span-2 flex gap-2 border-2 border-sky-700 rounded-xl p-3 transition ease-linear">
                <div>
                  <h3 className="text-2xl text-center uppercase font-semibold">Melhor autoestima</h3>
                  <p className="text-xl ">Procurar a psicoterapia é o primeiro passo e o sinal de que você está se estimando melhor. Durante todo o processo você vai aprender valorizar melhor o que te faz bem.</p>
                </div>
              </div>
              
              <div className="h-full lg:col-start-2 col-span-2 flex gap-2 border-2 border-sky-700 rounded-xl p-3 transition ease-linear">
                <div>
                  <h3 className="text-2xl text-center uppercase font-semibold">Desenvolvimento pessoal</h3>
                  <p className="text-xl ">Entender melhor o nosso lugar no mundo e a nossa posição nas nossas relações ajuda a nos  relacionarmos melhor com as tarefas, trabalho e vida como um todos.</p>
                </div>
              </div>
              
              <div className="h-full md:col-start-2 lg:col-start-auto col-span-2 flex gap-2 border-2 border-sky-700 rounded-xl p-3 transition ease-linear">
                <div>
                  <h3 className="text-2xl text-center uppercase font-semibold">Melhora na motivação</h3>
                  <p className="text-xl">Olhar a vida por todos os ângulos, não permitir que as distorções, crenças disfuncionais que temos nos impeçam de trabalhar, se alimentar bem, se relacionar.</p>
                </div>
              </div>
            </div>

            <p className="text-3xl text-center font-cursive indent-0">Se você estiver atravessando uma fase difícil na vida, não hesite em buscar pela ajuda de um terapeuta. A psicoterapia pode salvar e transformar vidas.</p>

          </div>
        </section>
      </main>
      <Bottom />
    </div>
  );
}
