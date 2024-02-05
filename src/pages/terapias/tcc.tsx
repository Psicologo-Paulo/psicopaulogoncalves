import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import WhatsButton from "@/components/WhatsButton";

export default function Tcc() {
    return(
        <>
            <Top />
            <main className="bg-gradient-to-t from-sky-100 to-sky-50 md:flex md:justify-center md:items-start md:gap-10 md:p-5">
                <WhatsButton />
                <div className="md:max-w-[664px] md:w-full mt-5 md:mt-0 flex flex-col gap-2 text-xl text-justify">
                    <h1 className="text-3xl font-bold text-center">O QUE É A TERAPIA COGNITVO COMPORTAMENTAL?</h1>
                    <p>A Terapia Cognitivo-Comportamental foi criada pelo psiquiatra Aaron Beck em 1960. Beck, em sua prática clínica atuava como psicanalista, mas ao observar seus pacientes depressivos, passou a se questionar, se o que causava a depressão era mesmo fatores inconscientes. Com base em uma observação minuciosa, começou a notar que os sintomas depressivos de seus pacientes surgiam, devido a interpretações negativas da realidade, ou seja, os sintomas surgiam a partir da interpretação negativa de si, do outro e do mundo. Fundamentado nisso, Aaron Beck desenvolve a Terapia Cognitivo-Comportamental e passou a adotar o modelo cognitivo como base para seus atendimentos (BECK, 2013 apud TARCHA A; 2019).</p>
                    <p>A TCC se pauta no tratamento das queixas do paciente que são trazidas no momento da procura pelo tratamento. Ou seja, seu foco principal parte do sofrimento que o indivíduo está vivenciando naquele momento da sua vida. Dessa forma, seu objetivo, visa auxiliá-lo no desenvolvimento de novas habilidades comportamentais e a correção cognitiva, necessárias para compreender e empenhar as mudanças necessárias no seu ambiente. Dessa forma, a TCC é uma abordagem ativa, onde em colaboração paciente com o terapeuta desenvolvem mecanismos, brevemente planejados para a resolução dos problemas concretos (HELDT et al., 2013 apud SILVA S; 2019).</p>
                    <p>De acordo com Rangé (2011 apud TARCHA A; 2019), o modelo cognitivo é baseado na premissa de que as emoções e os comportamentos dos indivíduos são influenciados por sua percepção dos eventos. Sendo assim, a maneira como as pessoas sentem e se comportam está relacionada com a forma como cada um interpreta ou pensa a respeito das situações experienciadas. Os diversos pensamentos que passam por nossa mente todos os dias, são denominados pensamentos automáticos (BECK, 2013 apud TARCHA A; 2019).</p>
                    <p>Sendo assim, a TCC é muito útil para tratamento da depressão, ansiedade, fobias, insônia, pânico, estresse, insegurança, fobias etc. E porque não, para o autoconhecimento, que nos faz viver melhor, fazer escolhas assertivas e viver com uma qualidade de vida melhor.</p>
                </div>
                <div className="hidden xl:block">
                    <div className="md:max-w-2xl p-auto"><img src="/paulo_trabalho.png" alt="Foto" /></div>
                </div>
            </main>
            <Bottom />
        </>
    )
}