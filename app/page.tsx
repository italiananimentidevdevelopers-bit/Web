import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { CourseCard } from '@/components/cards/CourseCard';
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const imgFrame5 = "/assets/897757f44d219e8bfba914e95fbdd08aa2ea2d1f.jpg";
const imgFrame10 = "/assets/30b706c6f89433e8d7cf6bfe5355df2f18790934.png";
const imgBelkacemyabadeneManipulation44990101 = "/assets/00d843f980b687404aa864018af8dc24bc26db1f.png";
const imgImage2 = "/assets/a81dbac8eccd3a1f8aa91ebdd2021b0d5e7ea57c.png";
const imgImage3 = "/assets/6bdeea48ce62d05dbc86e91aac7fab6f2ebc4323.png";
const imgImage4 = "/assets/5b57cb16a2ca6b367394157e8ac94161b44b1021.png";
const imgFrame13 = "/assets/0842adaba6003557b1795d415fd38b2bdfd779ab.png";
const imgImage6 = "/assets/25bfc8108eb6715a6781b4eb3f25f9480345e0f1.png";
const imgImage7 = "/assets/6d4c41671660810e6232ccb7db35da0c6190dade.png";
const imgFrame15 = "/assets/e8fc5ab2d5b1c2d330ad2c47942a814653c9bcd7.png";

export default function Home() {
  return (
    <div className=" content-stretch flex flex-col items-center pt-[10px] relative size-full">


      <Navbar />

      <div className="content-stretch flex gap-[10px] items-start container mx-auto overflow-clip py-5 relative shrink-0 w-full px-[10px]">
        <div className="bg-green-400 flex-[1_0_0] h-[4px] min-h-px min-w-px" />
        <div className="bg-neutral-100 flex-[1_0_0] h-[4px] min-h-px min-w-px" />
        <div className="bg-red-400 flex-[1_0_0] h-[4px] min-h-px min-w-px" />
      </div>

      <div className="h-[557px] container mx-auto overflow-clip px-2 relative rounded-7 shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-7">
          <img alt="" className="absolute h-[191.53%] left-[0.01%] max-w-none object-cover top-[-15.74%] w-full" src={imgFrame5} />
        </div>
        <img src="/assets/logo_Largo.svg" alt="" className="absolute top-4 left-4" />

        <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[13.118%] from-transparent gap-[10px] h-[263px] items-center justify-center left-0 overflow-clip p-[50px] to-secondary-full top-[294px] w-full">

          <div className="font-source-sans font-bold text-[36px] sm:text-[40px] md:text-[70px] lg:text-[90px] text-center text-white">
            <p className="leading-[1.2]">{`corsi di lingua e cultura `}</p>
          </div>
          <Button variant="solid" size="lg">Vedi altro</Button>
        </div>

      </div>

      <div className="bg-secondary-100 content-stretch flex flex-col gap-[var(--spacing-8)] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full">
        <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-1 md:grid-cols-[292px_minmax(0,1fr)] container mx-auto overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-end overflow-clip relative shrink-0">
            <div className="flex flex-col font-source-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-secondary-full text-center whitespace-nowrap">
              <p className="leading-[33px]">Chi siamo</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0">
            <p className="font-source-sans font-medium leading-[27px] w-full not-italic relative shrink-0 text-[18px] text-secondary-full">
              ¡Hola a todos! Soy Annalisa, de Spigno Saturnia, un encantador pueblo en el bajo Lazio. Estudié antropología en Roma y actualmente curso un Master en Diversidad Cultural en Buenos Aires, donde vivo desde 2010. Me especializo en enseñar la lengua y cultura italiana, conectando nuestras diversidades y promoviendo un diálogo entre Argentina, Latinoamérica e Italia. ¡Hasta pronto!
            </p>
            <Button variant="underline" size="sm">Ver Mas</Button>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col items-center overflow-clip px-[10px] py-[40px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-secondary-full inset-0" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgFrame10} />
        </div>
        <div className="content-stretch flex flex-wrap md:flex-nowrap gap-[10px] items-center container mx-auto overflow-clip p-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center overflow-clip p-[10px] relative w-full">
            <div className="relative shrink-0 w-full md:w-[450px] max-w-full">
              <img alt="" src={imgBelkacemyabadeneManipulation44990101} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start overflow-clip p-[10px] relative w-full">
            <a className="block font-source-sans font-black leading-[0] not-italic relative shrink-0 text-[46px] text-white whitespace-nowrap">
              <p className="cursor-pointer leading-[69px]">Caffè italiano</p>
            </a>
            <p className="font-source-sans font-bold leading-[33px] w-full not-italic relative shrink-0 text-[22px] text-white">
              uno spazio per conversare mentre conosciamo la realtá sociale, storica e culturale italiana
            </p>
            <Button variant="solid" size="lg" className="mt-4">Vedi altro</Button>
          </div>
        </div>
      </div>

      <div className="bg-secondary-100 content-stretch flex flex-col gap-[var(--spacing-8)] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center leading-[0] container mx-auto not-italic overflow-clip relative shrink-0 text-neutral-1000 text-center w-full whitespace-nowrap">
          <div className="flex flex-col font-source-sans font-medium justify-center relative shrink-0 text-[18px]">
            <p className="leading-[27px]">Materiale di interesse</p>
          </div>
          <div className="flex flex-col  font-black justify-center text-[36px] md:text-[68px] mt-4 md:mt-0">
            <p className="leading-tight md:leading-[102px] sm:text-[36px] text-wrap" >Letture, conferenze e racconti</p>
          </div>
        </div>
        <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-1 md:grid-cols-4 container mx-auto overflow-clip relative shrink-0 w-full mt-8 px-[10px]">
          <CourseCard
            className="md:col-span-2"
            imgSrc={imgImage2}
            title="Storia Archeologia Luoghi"
            description="Vogliamo mostrare i tanti spezzoni della storia italiana che riempiono i vuoti lasciati dalla storiografia ufficiale."
          />
          <CourseCard
            imgSrc={imgImage3}
            title="Arti italiane"
            description="I fenomeni artistici che hanno accompagnato i piú importanti cambiamenti culturali italiani."
          />
          <CourseCard
            imgSrc={imgImage4}
            title="Tradizioni popolari"
            description="Una rassegna di espressioni che sintetizzano la saggezza popolare."
          />
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-secondary-full inset-0" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgFrame13} />
        </div>
        <div className="content-stretch flex items-center container mx-auto overflow-clip p-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center not-italic overflow-clip p-[10px] relative text-white text-center">
            <a className="block font-source-sans font-black leading-tight relative shrink-0 text-[36px] md:text-[46px]">
              <p className="cursor-pointer">Voglio Laboratorio letterario di più</p>
            </a>
            <p className="font-source-sans font-bold leading-[33px] w-full relative shrink-0 text-[22px] mt-2">
              Avvicinati alla cultura italiana e alla sua lingua attraverso la letteratura
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-wrap justify-center gap-[10px] items-center relative shrink-0 mt-4">
          <Button variant="ghost" size="md" className="text-neutral-100 hover:bg-neutral-100/10 underline text-white">Maggiori informazioni</Button>
          <Button variant="solid" size="lg">Visualizza tutti i laboratori</Button>
        </div>
      </div>

      <div className="bg-secondary-100 content-stretch flex flex-col gap-[var(--spacing-8)] items-center overflow-clip pb-[10px] pt-[60px] px-[10px] relative shrink-0 w-full">
        <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-1 md:grid-cols-[525px_minmax(0,1fr)] container mx-auto overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip py-[10px] relative w-full">
            <div className="relative rounded-4 shrink-0 w-full max-w-[400px]">
              <img alt="" className="object-cover rounded-4 w-full" src={imgImage6} />
              <img alt="" className="absolute right-[-40px] bottom-[20px] object-cover rounded-4 w-[180px] shadow-lg border-4 border-secondary-100" src={imgImage7} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[10px] relative w-full mt-10 md:mt-0">
            <div className="content-stretch flex flex-col items-start justify-center leading-tight container mx-auto not-italic overflow-clip relative shrink-0 text-neutral-1000">
              <div className="flex flex-col font-source-sans font-medium justify-center relative shrink-0 text-[18px]">
                <p className="leading-[27px]">Prossimo laboratorio</p>
              </div>
              <div className="flex flex-col font-source-sans font-black justify-center relative shrink-0 text-[46px] mt-2">
                <p className="leading-[69px]">Tu, mio</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 text-black">
              <div className="flex flex-col font-source-sans font-bold justify-center leading-tight relative shrink-0 text-[26px]">
                <p className="leading-[39px]">Inizio e presentazione</p>
              </div>
              <div className="flex flex-col font-source-sans font-medium justify-center leading-[27px] relative shrink-0 text-[18px]">
                <p className="mb-0">Sabato 14 settembre</p>
                <p>ore 15 -18, caballito, caba</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 text-black mt-2">
              <div className="flex flex-col font-source-sans font-bold justify-center leading-tight relative shrink-0 text-[26px]">
                <p className="leading-[39px]">A seguire</p>
              </div>
              <div className="flex flex-col font-source-sans font-medium justify-center leading-[27px] relative shrink-0 text-[18px]">
                <p className="mb-0">Tre incontri presenziali,</p>
                <p className="mb-0">stesso giorno e ora</p>
                <p>ogni tre settimane</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[5px] items-start leading-tight not-italic relative shrink-0 text-black w-full mt-2">
              <div className="flex flex-col font-source-sans font-bold justify-center relative shrink-0 text-[26px]">
                <p className="leading-[39px]">Per finire</p>
              </div>
              <div className="flex flex-col font-source-sans font-medium justify-center min-w-full relative shrink-0 text-[18px] w-full">
                <p className="leading-[27px]">14 dicembre brindisi di fine anno di italianeMenti con proiezione del video che sintetizza l´esperienza del laboratorio realizzato dai partecipanti</p>
              </div>
            </div>
            <div className="content-stretch flex flex-wrap gap-[10px] items-center relative shrink-0 mt-6">
              <Button variant="underline" size="md" className="text-neutral-1000">Maggiori informazioni</Button>
              <Button variant="solid" size="lg">Iscriviti ora</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-100 content-stretch flex flex-col gap-[var(--spacing-8)] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full mt-8">
        <div className="content-stretch flex flex-col items-center leading-tight container mx-auto not-italic overflow-clip relative shrink-0 text-neutral-1000 text-center w-full">
          <div className="flex flex-col font-source-sans font-medium justify-center relative shrink-0 text-[18px]">
            <p className="leading-[27px]">Cosa ottengono gli iscritti grazie alla formazione</p>
          </div>
          <div className="flex flex-col font-source-sans font-black justify-center relative shrink-0 text-[36px] md:text-[68px] mt-2">
            <p className="leading-tight md:leading-[102px]">Testimonianze dei nostri studenti</p>
          </div>
        </div>
        <div className="gap-x-[30px] gap-y-[30px] grid grid-cols-1 md:grid-cols-3 container mx-auto overflow-clip relative shrink-0 w-full mt-8">
          <TestimonialCard
            name="Abigail P."
            text={`"Tengo un trabajo de tiempo completo y 3 hijos. Necesitaba la flexibilidad ofrecida por Coursera Plus para alcanzar mis metas. Mi suscripción a Coursera Plus me motivó a seguir aprendiendo."`}
          />
          <TestimonialCard
            name="Shi Jie F."
            text={`"Coursera Plus me mantiene motivado a aprender. Con cada curso, obtengo más valor de mi suscripción. ¡Puedo acceder a casi cualquier cosa con Coursera Plus!"`}
          />
          <TestimonialCard
            name="Inés K."
            text={`"Realmente valoro la flexibilidad que me ofrece Coursera Plus. Puedo probar cualquier curso y cambiar a otro sin costo adicional. ¡Esto me motiva a aprender aún más!"`}
          />
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full mt-4">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-secondary-full inset-0" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgFrame15} />
        </div>
        <div className="content-stretch flex items-center container mx-auto overflow-clip p-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center not-italic overflow-clip p-[10px] relative text-white text-center">
            <a className="block font-source-sans font-black leading-tight relative shrink-0 text-[36px] md:text-[46px]" href="https://italianementi.wixsite.com/home">
              <p className="cursor-pointer">Inizia oggi stesso</p>
            </a>
            <p className="font-source-sans font-bold leading-[33px] w-full relative shrink-0 text-[22px] mt-2">
              Contattaci per scoprire tutte le offerte attualmente disponibili per iniziare
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-wrap gap-[10px] items-start justify-center relative shrink-0 mt-6 max-w-lg w-full">
          <div className="bg-secondary-100 border border-secondary-400 border-solid content-stretch flex items-center overflow-clip p-3 relative rounded-6 w-full md:w-auto flex-1">
            <input type="email" placeholder="Email" className="bg-transparent border-none outline-none w-full font-source-sans font-medium text-[16px] text-black" />
          </div>
          <Button variant="solid" size="lg" className="w-full md:w-auto px-8">Invita</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
