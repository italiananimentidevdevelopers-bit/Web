import React from 'react';
import Link from 'next/link';

const imgGroup = "http://localhost:3845/assets/af9a1eb55b3b43dcf0d08101e38346021139cf23.svg";
const imgFrame5 = "http://localhost:3845/assets/897757f44d219e8bfba914e95fbdd08aa2ea2d1f.png";
const imgFrame10 = "http://localhost:3845/assets/30b706c6f89433e8d7cf6bfe5355df2f18790934.png";
const imgBelkacemyabadeneManipulation44990101 = "http://localhost:3845/assets/00d843f980b687404aa864018af8dc24bc26db1f.png";
const imgImage2 = "http://localhost:3845/assets/a81dbac8eccd3a1f8aa91ebdd2021b0d5e7ea57c.png";
const imgImage3 = "http://localhost:3845/assets/6bdeea48ce62d05dbc86e91aac7fab6f2ebc4323.png";
const imgImage4 = "http://localhost:3845/assets/5b57cb16a2ca6b367394157e8ac94161b44b1021.png";
const imgFrame13 = "http://localhost:3845/assets/0842adaba6003557b1795d415fd38b2bdfd779ab.png";
const imgImage6 = "http://localhost:3845/assets/25bfc8108eb6715a6781b4eb3f25f9480345e0f1.png";
const imgImage7 = "http://localhost:3845/assets/6d4c41671660810e6232ccb7db35da0c6190dade.png";
const imgFrame32 = "http://localhost:3845/assets/05b6519713db858961e828db08e90f55c50d44e4.png";
const imgFrame15 = "http://localhost:3845/assets/e8fc5ab2d5b1c2d330ad2c47942a814653c9bcd7.png";
const imgVector = "http://localhost:3845/assets/fafcd55cceac02a2fdc8a1161b612363df033e03.svg";
const imgVector1 = "http://localhost:3845/assets/9f4b8341df2e676e83f5b1aad395216a53fcd624.svg";

type LogoProps = {
  className?: string;
  propiedad1?: "Long" | "Default";
};

function Logo({ className, propiedad1 = "Long" }: LogoProps) {
  return (
    <div className={className || "h-[259px] relative w-[242px]"}>
      <p className="absolute font-vollkorn font-normal inset-[80.31%_5.79%_3.77%_6.2%] leading-[normal] text-secondary-full text-[35.336px]">
        Italianementi
      </p>
      <div className="absolute inset-[6.18%_65.1%_22.58%_6.61%]">
        <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className=" content-stretch flex flex-col items-center pt-[10px] relative size-full">
      <div className="content-stretch flex items-center justify-between container mx-auto overflow-clip relative shrink-0 w-full px-[10px]">
        <div className="overflow-clip relative shrink-0 size-[85px]">
          <div className="absolute inset-[51.7%_15.8%_24.31%_76.76%]">
            <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
          </div>
          <div className="absolute inset-[16.06%_15.79%_15.85%_16.09%]">
            <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <div className="content-stretch flex gap-xs items-center justify-center overflow-clip p-s relative rounded-m shrink-0 cursor-pointer hover:bg-neutral-100/50 transition">
            <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-1000 text-center whitespace-nowrap">
              <p className="leading-[21px]">Corsi Di lingua</p>
            </div>
          </div>
          <div className="content-stretch flex gap-xs items-center justify-center overflow-clip p-s relative rounded-m shrink-0 cursor-pointer hover:bg-neutral-100/50 transition">
            <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-1000 text-center whitespace-nowrap">
              <p className="leading-[21px]">Lavoratori</p>
            </div>
          </div>
          <div className="content-stretch flex gap-xs items-center justify-center overflow-clip p-s relative rounded-m shrink-0 cursor-pointer hover:bg-neutral-100/50 transition">
            <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-1000 text-center whitespace-nowrap">
              <p className="leading-[21px]">Cafe Italiano</p>
            </div>
          </div>
          <div className="content-stretch flex gap-xs items-center justify-center overflow-clip p-s relative rounded-m shrink-0 cursor-pointer hover:bg-neutral-100/50 transition">
            <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-1000 text-center whitespace-nowrap">
              <p className="leading-[21px]">Nosotros</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
          <div className="bg-neutral-100 border border-stroke-primary border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-s relative rounded-m shrink-0 cursor-pointer hover:bg-white transition">
            <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-1000 text-center whitespace-nowrap">
              <p className="leading-[21px]">Registro</p>
            </div>
          </div>
          <Link href="/login" className="bg-primary-full border-0 border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-s relative rounded-m shrink-0 cursor-pointer hover:opacity-90 transition block">
            <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-inverse text-center whitespace-nowrap">
              <p className="leading-[21px]">Login</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="content-stretch flex gap-[10px] items-start container mx-auto overflow-clip py-5 relative shrink-0 w-full px-[10px]">
        <div className="bg-green-400 flex-[1_0_0] h-[4px] min-h-px min-w-px" />
        <div className="bg-neutral-100 flex-[1_0_0] h-[4px] min-h-px min-w-px" />
        <div className="bg-red-400 flex-[1_0_0] h-[4px] min-h-px min-w-px" />
      </div>

      <div className="h-[557px] container mx-auto overflow-clip px-2 relative rounded-7 shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-7">
          <img alt="" className="absolute h-[191.53%] left-[0.01%] max-w-none object-cover top-[-15.74%] w-full" src={imgFrame5} />
        </div>
        <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[13.118%] from-transparent gap-[10px] h-[263px] items-center justify-center left-0 overflow-clip p-[50px] to-secondary-full top-[294px] w-full">
          <div className="flex flex-col font-source-sans font-bold justify-center leading-[0] relative shrink-0 text-[140.243px] md:text-[80px] text-center text-white whitespace-nowrap">
            <p className="leading-[1.2]">{`corsi di lingua e cultura `}</p>
          </div>
          <div className="bg-primary-full border border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-l relative rounded-xl shrink-0 cursor-pointer hover:opacity-90 transition">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-inverse text-center whitespace-nowrap">
              <p className="leading-[27px]">Vedi altro</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[259px] left-[66px] overflow-clip top-[73px] w-[242px] hidden md:block">
          <p className="absolute font-vollkorn font-normal inset-[80.31%_5.79%_3.77%_6.2%] leading-[normal] text-[35.336px] text-secondary-100">
            Italianementi
          </p>
          <div className="absolute inset-[6.18%_65.1%_22.58%_6.61%]">
            <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
          </div>
        </div>
      </div>

      <div className="bg-secondary-100 content-stretch flex flex-col gap-[var(--spacing-8)] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full">
        <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-1 md:grid-cols-[292px_minmax(0,1fr)] container mx-auto overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-end overflow-clip relative shrink-0">
            <div className="flex flex-col font-inter font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-secondary-full text-center whitespace-nowrap">
              <p className="leading-[33px]">Chi siamo</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0">
            <p className="font-inter font-medium leading-[27px] w-full not-italic relative shrink-0 text-[18px] text-secondary-full">
              ¡Hola a todos! Soy Annalisa, de Spigno Saturnia, un encantador pueblo en el bajo Lazio. Estudié antropología en Roma y actualmente curso un Master en Diversidad Cultural en Buenos Aires, donde vivo desde 2010. Me especializo en enseñar la lengua y cultura italiana, conectando nuestras diversidades y promoviendo un diálogo entre Argentina, Latinoamérica e Italia. ¡Hasta pronto!
            </p>
            <div className="content-stretch flex gap-[var(--spacing-1)] h-[36px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition">
              <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-primary-full text-center whitespace-nowrap">
                <p className="leading-[21px] underline">Ver Mas</p>
              </div>
            </div>
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
            <div className="h-[365px] relative shrink-0 w-full md:w-[455px] max-w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-m" src={imgBelkacemyabadeneManipulation44990101} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start overflow-clip p-[10px] relative w-full">
            <a className="block font-inter font-black leading-[0] not-italic relative shrink-0 text-[46px] text-white whitespace-nowrap" href="https://italianementi.wixsite.com/home">
              <p className="cursor-pointer leading-[69px]">Caffè italiano</p>
            </a>
            <p className="font-inter font-bold leading-[33px] w-full not-italic relative shrink-0 text-[22px] text-white">
              uno spazio per conversare mentre conosciamo la realtá sociale, storica e culturale italiana
            </p>
            <div className="mt-4 bg-primary-full border border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-l relative rounded-xl shrink-0 cursor-pointer hover:opacity-90 transition">
              <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-inverse text-center whitespace-nowrap">
                <p className="leading-[27px]">Vedi altro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-100 content-stretch flex flex-col gap-[var(--spacing-8)] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center leading-[0] container mx-auto not-italic overflow-clip relative shrink-0 text-neutral-1000 text-center w-full whitespace-nowrap">
          <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[18px]">
            <p className="leading-[27px]">Materiale di interesse</p>
          </div>
          <div className="flex flex-col font-inter font-black justify-center relative shrink-0 text-[36px] md:text-[68px] mt-4 md:mt-0">
            <p className="leading-tight md:leading-[102px]">Letture, conferenze e racconti</p>
          </div>
        </div>
        <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-1 md:grid-cols-4 container mx-auto overflow-clip relative shrink-0 w-full mt-8 px-[10px]">
          <div className="content-stretch flex flex-col h-full items-start justify-start overflow-clip relative shrink-0 md:col-span-2">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="bg-[#ff0a0a] h-[313px] overflow-clip relative rounded-6 shrink-0 w-full">
                <div className="absolute inset-0">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                </div>
              </div>
              <div className="flex flex-col font-inter font-black justify-center leading-tight not-italic relative shrink-0 text-[32px] text-neutral-1000 mt-4">
                <p className="leading-[48px]">Storia Archeologia Luoghi</p>
              </div>
              <div className="flex flex-col font-inter font-medium justify-center min-w-full not-italic relative shrink-0 text-[18px] text-neutral-1000 w-full mt-2">
                <p className="leading-[27px]">{`Vogliamo mostrare i tanti spezzoni della storia italiana che riempiono i vuoti lasciati dalla storiografia ufficiale. `}</p>
              </div>
            </div>
            <div className="mt-auto pt-6 bg-primary-full border border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-l relative rounded-xl shrink-0 cursor-pointer hover:opacity-90 transition">
              <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-inverse text-center whitespace-nowrap">
                <p className="leading-[27px]">Vedi altro</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-full items-start justify-start overflow-clip relative shrink-0">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="bg-[#ff0a0a] h-[313px] overflow-clip relative rounded-6 shrink-0 w-full">
                <div className="absolute inset-0">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                </div>
              </div>
              <div className="flex flex-col font-inter font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-neutral-1000 w-full mt-4">
                <p className="leading-[48px]">Arti italiane</p>
              </div>
              <div className="flex flex-col font-inter font-medium justify-center leading-tight not-italic relative shrink-0 text-[18px] text-neutral-1000 w-full mt-2">
                <p className="leading-[27px]">I fenomeni artistici che hanno accompagnato i piú importanti cambiamenti culturali italiani.</p>
              </div>
            </div>
            <div className="mt-auto pt-6 bg-primary-full border border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-l relative rounded-xl shrink-0 cursor-pointer hover:opacity-90 transition">
              <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-inverse text-center whitespace-nowrap">
                <p className="leading-[27px]">Vedi altro</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-full items-start justify-start overflow-clip relative shrink-0">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="bg-[#ff0a0a] h-[313px] overflow-clip relative rounded-6 shrink-0 w-full">
                <div className="absolute inset-0">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                </div>
              </div>
              <div className="flex flex-col font-inter font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-neutral-1000 w-full mt-4">
                <p className="leading-[48px]">Tradizioni popolari</p>
              </div>
              <div className="flex flex-col font-inter font-medium justify-center leading-tight not-italic relative shrink-0 text-[18px] text-neutral-1000 w-full mt-2">
                <p className="leading-[27px]">Una rassegna di espressioni che sintetizzano la saggezza popolare.</p>
              </div>
            </div>
            <div className="mt-auto pt-6 bg-primary-full border border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-l relative rounded-xl shrink-0 cursor-pointer hover:opacity-90 transition">
              <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-inverse text-center whitespace-nowrap">
                <p className="leading-[27px]">Vedi altro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-secondary-full inset-0" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgFrame13} />
        </div>
        <div className="content-stretch flex items-center container mx-auto overflow-clip p-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center not-italic overflow-clip p-[10px] relative text-white text-center">
            <a className="block font-inter font-black leading-tight relative shrink-0 text-[36px] md:text-[46px]" href="https://italianementi.wixsite.com/home">
              <p className="cursor-pointer">Voglio Laboratorio letterario di più</p>
            </a>
            <p className="font-inter font-bold leading-[33px] w-full relative shrink-0 text-[22px] mt-2">
              Avvicinati alla cultura italiana e alla sua lingua attraverso la letteratura
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-wrap justify-center gap-[10px] items-center relative shrink-0 mt-4">
          <div className="content-stretch flex gap-xs items-center justify-center overflow-clip p-m relative rounded-m shrink-0 cursor-pointer hover:bg-neutral-100/10 transition">
            <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-100 text-center whitespace-nowrap">
              <p className="leading-[24px] underline">Maggiori informazioni</p>
            </div>
          </div>
          <div className="bg-primary-full border border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-l relative rounded-xl shrink-0 cursor-pointer hover:opacity-90 transition">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-inverse text-center whitespace-nowrap">
              <p className="leading-[27px]">Visualizza tutti i laboratori</p>
            </div>
          </div>
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
              <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[18px]">
                <p className="leading-[27px]">Prossimo laboratorio</p>
              </div>
              <div className="flex flex-col font-inter font-black justify-center relative shrink-0 text-[46px] mt-2">
                <p className="leading-[69px]">Tu, mio</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 text-black">
              <div className="flex flex-col font-inter font-bold justify-center leading-tight relative shrink-0 text-[26px]">
                <p className="leading-[39px]">Inizio e presentazione</p>
              </div>
              <div className="flex flex-col font-inter font-medium justify-center leading-[27px] relative shrink-0 text-[18px]">
                <p className="mb-0">Sabato 14 settembre</p>
                <p>ore 15 -18, caballito, caba</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 text-black mt-2">
              <div className="flex flex-col font-inter font-bold justify-center leading-tight relative shrink-0 text-[26px]">
                <p className="leading-[39px]">A seguire</p>
              </div>
              <div className="flex flex-col font-inter font-medium justify-center leading-[27px] relative shrink-0 text-[18px]">
                <p className="mb-0">Tre incontri presenziali,</p>
                <p className="mb-0">stesso giorno e ora</p>
                <p>ogni tre settimane</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[5px] items-start leading-tight not-italic relative shrink-0 text-black w-full mt-2">
              <div className="flex flex-col font-inter font-bold justify-center relative shrink-0 text-[26px]">
                <p className="leading-[39px]">Per finire</p>
              </div>
              <div className="flex flex-col font-inter font-medium justify-center min-w-full relative shrink-0 text-[18px] w-full">
                <p className="leading-[27px]">14 dicembre brindisi di fine anno di italianeMenti con proiezione del video che sintetizza l´esperienza del laboratorio realizzato dai partecipanti</p>
              </div>
            </div>
            <div className="content-stretch flex flex-wrap gap-[10px] items-center relative shrink-0 mt-6">
              <div className="content-stretch flex gap-xs items-center justify-center overflow-clip p-m relative rounded-m shrink-0 cursor-pointer">
                <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-1000 text-center whitespace-nowrap">
                  <p className="leading-[24px] underline">Maggiori informazioni</p>
                </div>
              </div>
              <div className="bg-primary-full border border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-l relative rounded-xl shrink-0 cursor-pointer hover:opacity-90 transition">
                <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-inverse text-center whitespace-nowrap">
                  <p className="leading-[27px]">Iscriviti ora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-100 content-stretch flex flex-col gap-[var(--spacing-8)] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full mt-8">
        <div className="content-stretch flex flex-col items-center leading-tight container mx-auto not-italic overflow-clip relative shrink-0 text-neutral-1000 text-center w-full">
          <div className="flex flex-col font-inter font-medium justify-center relative shrink-0 text-[18px]">
            <p className="leading-[27px]">Cosa ottengono gli iscritti grazie alla formazione</p>
          </div>
          <div className="flex flex-col font-inter font-black justify-center relative shrink-0 text-[36px] md:text-[68px] mt-2">
            <p className="leading-tight md:leading-[102px]">Testimonianze dei nostri studenti</p>
          </div>
        </div>
        <div className="gap-x-[30px] gap-y-[30px] grid grid-cols-1 md:grid-cols-3 container mx-auto overflow-clip relative shrink-0 w-full mt-8">
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative w-full bg-white rounded-xl shadow-sm p-8">
            <div className="relative rounded-[72px] shrink-0 size-[69px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[72px] size-full" src={imgFrame32} />
            </div>
            <div className="flex flex-col font-inter font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black whitespace-nowrap mt-4">
              <p className="leading-[33px]">Abigail P.</p>
            </div>
            <div className="flex flex-col font-inter font-medium justify-center min-w-full not-italic relative shrink-0 text-[16px] text-neutral-1000 mt-2">
              <p className="leading-[24px]">{`"Tengo un trabajo de tiempo completo y 3 hijos. Necesitaba la flexibilidad ofrecida por Coursera Plus para alcanzar mis metas. Mi suscripción a Coursera Plus me motivó a seguir aprendiendo."`}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative w-full bg-white rounded-xl shadow-sm p-8">
            <div className="relative rounded-[72px] shrink-0 size-[69px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[72px] size-full" src={imgFrame32} />
            </div>
            <div className="flex flex-col font-inter font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black whitespace-nowrap mt-4">
              <p className="leading-[33px]">Shi Jie F.</p>
            </div>
            <div className="flex flex-col font-inter font-medium justify-center min-w-full not-italic relative shrink-0 text-[16px] text-neutral-1000 mt-2">
              <p className="leading-[24px]">{`"Coursera Plus me mantiene motivado a aprender. Con cada curso, obtengo más valor de mi suscripción. ¡Puedo acceder a casi cualquier cosa con Coursera Plus!"`}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative w-full bg-white rounded-xl shadow-sm p-8">
            <div className="relative rounded-[72px] shrink-0 size-[69px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[72px] size-full" src={imgFrame32} />
            </div>
            <div className="flex flex-col font-inter font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black whitespace-nowrap mt-4">
              <p className="leading-[33px]">Inés K.</p>
            </div>
            <div className="flex flex-col font-inter font-medium justify-center min-w-full not-italic relative shrink-0 text-[16px] text-neutral-1000 mt-2">
              <p className="leading-[24px]">{`"Realmente valoro la flexibilidad que me ofrece Coursera Plus. Puedo probar cualquier curso y cambiar a otro sin costo adicional. ¡Esto me motiva a aprender aún más!"`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[10px] py-[60px] relative shrink-0 w-full mt-4">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-secondary-full inset-0" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgFrame15} />
        </div>
        <div className="content-stretch flex items-center container mx-auto overflow-clip p-[10px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center not-italic overflow-clip p-[10px] relative text-white text-center">
            <a className="block font-inter font-black leading-tight relative shrink-0 text-[36px] md:text-[46px]" href="https://italianementi.wixsite.com/home">
              <p className="cursor-pointer">Inizia oggi stesso</p>
            </a>
            <p className="font-inter font-bold leading-[33px] w-full relative shrink-0 text-[22px] mt-2">
              Contattaci per scoprire tutte le offerte attualmente disponibili per iniziare
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-wrap gap-[10px] items-start justify-center relative shrink-0 mt-6 max-w-lg w-full">
          <div className="bg-secondary-100 border border-secondary-400 border-solid content-stretch flex items-center overflow-clip p-3 relative rounded-6 w-full md:w-auto flex-1">
            <input type="email" placeholder="Email" className="bg-transparent border-none outline-none w-full font-inter font-medium text-[16px] text-black" />
          </div>
          <div className="w-full md:w-auto bg-primary-full border border-primary-full border-solid content-stretch flex gap-xs items-center justify-center overflow-clip p-3 px-8 relative rounded-xl shrink-0 cursor-pointer hover:opacity-90 transition">
            <div className="flex flex-col font-inter font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-inverse text-center whitespace-nowrap">
              <p className="leading-[27px]">Invita</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-200 content-stretch flex flex-col items-center justify-center overflow-clip p-[40px] relative shrink-0 w-full mt-auto">
        <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-1 md:grid-cols-5 container mx-auto overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between overflow-clip relative">
            <Logo className="h-[259px] overflow-clip relative shrink-0 w-[242px]" />
            <div className="content-stretch flex flex-col font-inter font-medium items-start leading-[27px] not-italic relative shrink-0 text-[16px] text-secondary-full mt-8 md:mt-0">
              <p className="relative shrink-0">Buenos aires, Argentina</p>
              <p className="relative shrink-0">2026</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic overflow-clip relative text-left">
            <div className="flex flex-col font-inter font-bold justify-center relative shrink-0 text-[20px] text-secondary-full">
              <p className="leading-[33px] uppercase">{`corsi di lingua`}</p>
            </div>
            <div className="content-stretch flex flex-col gap-[10px] font-inter font-medium items-start relative shrink-0 text-[16px] text-secondary-400">
              <a href="#" className="hover:underline">Primo quadrimestre</a>
              <a href="#" className="hover:underline">Secondo quadrimestre</a>
              <a href="#" className="hover:underline">Terzo quadrimestre</a>
              <a href="#" className="hover:underline">Ultimo quadrimestre</a>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic overflow-clip relative text-left">
            <div className="flex flex-col font-inter font-bold justify-center relative shrink-0 text-[20px] text-secondary-full">
              <p className="leading-[33px]">Caffè italiano</p>
            </div>
            <div className="content-stretch flex flex-col gap-[10px] font-inter font-medium items-start relative shrink-0 text-[16px] text-secondary-400">
              <a href="#" className="hover:underline">Esperienze recenti</a>
              <a href="#" className="hover:underline">Prossimi incontri</a>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic overflow-clip relative text-left">
            <div className="flex flex-col font-inter font-bold justify-center relative shrink-0 text-[20px] text-secondary-full">
              <p className="leading-[33px]">Risorse</p>
            </div>
            <div className="content-stretch flex flex-col gap-[10px] font-inter font-medium items-start relative shrink-0 text-[16px] text-secondary-400">
              <a href="#" className="hover:underline">Letture consigliate</a>
              <a href="#" className="hover:underline">Documentari</a>
              <a href="#" className="hover:underline">Testi del corso</a>
              <a href="#" className="hover:underline">Esercitazioni</a>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic overflow-clip relative text-left">
            <div className="flex flex-col font-inter font-bold justify-center relative shrink-0 text-[20px] text-secondary-full">
              <p className="leading-[33px]">Social media</p>
            </div>
            <div className="content-stretch flex flex-col gap-[10px] font-inter font-medium items-start relative shrink-0 text-[16px] text-secondary-400">
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Reddit</a>
              <a href="#" className="hover:underline">X</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
