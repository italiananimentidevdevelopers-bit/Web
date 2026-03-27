import React from 'react';
import { Button } from '@/components/ui/Button';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

// Using actual assets from previous page.tsx and Figma design where hashes match
const imgHeroBg = "/assets/897757f44d219e8bfba914e95fbdd08aa2ea2d1f.jpg";
const imgAnnalisa = "/assets/cd30af201b8f1551203e6673056b5a7d336ffee9.png";
const imgRomanBuilding = "/assets/0842adaba6003557b1795d415fd38b2bdfd779ab.png";

const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-6 h-6 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function CoursePage() {
  return (
    <div className="flex flex-col items-center bg-secondary-100 min-h-screen">
      <Navbar />

      {/* Italian Flag Line */}
      <div className="flex w-full container mx-auto px-4 py-4">
        <div className="bg-green-600 flex-1 h-1 md:h-1.5" />
        <div className="bg-white flex-1 h-1 md:h-1.5" />
        <div className="bg-red-600 flex-1 h-1 md:h-1.5" />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 w-full">
        <div className="relative rounded-2xl overflow-hidden min-h-[550px] w-full flex flex-col justify-end p-8 md:p-12 mb-8">
          <div className="absolute inset-0 z-0">
            <img 
              src={imgHeroBg} 
              alt="Hero Background" 
              className="w-full h-full object-cover object-top"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-full via-transparent opacity-90"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl flex flex-col items-start gap-4">
            <h1 className="text-white text-5xl md:text-6xl font-source-sans font-bold">corsi di lingua e cultura</h1>
            
            <div className="flex items-center gap-4 mt-2">
              <img src={imgAnnalisa} alt="Annalisa Pensiero" className="w-12 h-12 rounded-full object-cover border-2 border-white/20 bg-gray-300" />
              <p className="text-white font-medium text-lg">Annalisa Pensiero</p>
            </div>
            
            <p className="text-white font-medium text-lg leading-relaxed mt-2">
              ItalianeMenti organizza Corsi di Lingua e Cultura nelle modalità INDIVIDUALE e in GRUPPO.
            </p>
            <p className="text-white text-md font-medium max-w-3xl leading-relaxed">
              I gruppi non superano mai le 5 persone, per dare la possibilità a tutti di partecipare, specialmente nei momenti di conversazione, che saranno frequenti fin dai primi incontri.
            </p>
            
            <Button variant="solid" size="lg" className="mt-4 px-8">
              Iscriviti ora
            </Button>
            
            <p className="text-white mt-2">
              <span>Sono rimasti </span>
              <span className="font-bold">5 </span>
              <span>posti disponibili</span>
            </p>
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start gap-2">
            <h3 className="font-bold text-2xl md:text-3xl text-secondary-full">15 lezioni</h3>
            <p className="text-secondary-400 font-medium text-lg">15 lezioni da 4 ore distribuite su 3 mesi</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start gap-2">
            <h3 className="font-bold text-2xl md:text-3xl text-secondary-full">Livello avanzato</h3>
            <p className="text-secondary-400 font-medium text-lg">È richiesta una conoscenza preliminare della lingua</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start gap-2">
            <h3 className="font-bold text-2xl md:text-3xl text-secondary-full">15/ jun / 2026</h3>
            <p className="text-secondary-400 font-medium text-lg">Data di inizio per i gruppi</p>
          </div>
        </div>
      </div>

      {/* Course Information & What You Will Learn */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informazioni sul corso */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-full font-inter">Informazioni sul corso</h2>
            <p className="text-secondary-400 text-lg font-medium leading-relaxed">
              I Corsi di Lingua effettivamente danno priorità alla conversazione e alla ripetizione delle espressioni fino ad averne padronanza.
            </p>
          </div>

          {/* Cosa imparerai */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-full font-inter mb-2">Cosa imparerai</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="text-secondary-400 text-lg font-medium leading-relaxed">Acquisisci le competenze pratiche più aggiornate che i data scientist utilizzano nel loro lavoro quotidiano</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="text-secondary-400 text-lg font-medium leading-relaxed">Importa e pulisci set di dati, analizza e visualizza i dati, e crea modelli e flussi di machine learning</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="text-secondary-400 text-lg font-medium leading-relaxed">Acquisisci le competenze pratiche più aggiornate che i data scientist utilizzano nel loro lavoro quotidiano</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckIcon />
                <p className="text-secondary-400 text-lg font-medium leading-relaxed">Importa e pulisci set di dati, analizza e visualizza i dati, e crea modelli e flussi di machine learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full bg-secondary-100 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-start md:items-center text-left md:text-center mb-10">
            <p className="text-secondary-full font-medium text-lg">Cosa ottengono gli iscritti grazie alla formazione</p>
            <h2 className="text-3xl md:text-4xl font-black text-secondary-full mt-2 font-inter">Testimonianze dei nostri studenti</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>

      {/* Compiti e materiali */}
      <div className="container mx-auto px-4 pb-20 w-full">
        <div className="mb-10 text-center md:text-left flex flex-col items-start w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-full font-inter">Compiti e materiali</h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {[
            {
              title: "Introduzione",
              text: "Presentazione del corso di questo semestre, dei materiali didattici e della piattaforma.",
            },
            {
              title: "Comprensione del testo",
              text: "Cominciamo con il primo testo del nostro corso; con questo potremo dare inizio alla nostra lezione",
            },
            {
              title: "Analisi del testo",
              text: "Approfondiremo le tecniche di analisi testuale e discuteremo dei principali strumenti critici.",
            },
            {
              title: "Discussione di gruppo",
              text: "Organizzeremo una sessione di discussione in piccoli gruppi per scambiare opinioni e idee.",
            },
            {
              title: "Compiti per casa",
              text: "Assegneremo un compito da completare che metterà in pratica quanto appreso nella lezione.",
            },
            {
              title: "Feedback degli studenti",
              text: "Raccoglieremo feedback sui materiali e le lezioni per migliorare l'esperienza didattica.",
            },
            {
              title: "Progetto finale",
              text: "Introdurremo il progetto finale che gli studenti dovranno completare entro la fine del corso.",
            },
            {
              title: "Riflessioni conclusive",
              text: "Chiuderemo il corso con una riflessione finale, discutendo dei risultati e delle esperienze acquisite.",
            },
            {
              title: "Risorse aggiuntive",
              text: "Forniremo una lista di risorse utili per approfondire ulteriormente gli argomenti trattati.",
            },
            {
              title: "Sviluppo delle competenze",
              text: "Ci concentreremo sullo sviluppo delle competenze pratiche attraverso esercitazioni e attività pratiche.",
            },
            {
              title: "Prossimi passi",
              text: "Discuteremo dei prossimi passi dopo il completamento del corso, tra cui opportunità di apprendimento continuo.",
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-secondary-300 rounded-xl p-4 flex items-center justify-between gap-4 cursor-pointer hover:shadow-md transition">
              <div className="flex items-center gap-6 flex-1">
                <div className="w-16 h-16 md:w-[83px] md:h-[83px] shrink-0 rounded-lg overflow-hidden border border-gray-100">
                  <img src={imgRomanBuilding} alt="Icon" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary-full">{item.title}</h3>
                  <p className="text-secondary-400 font-medium text-base md:text-lg">{item.text}</p>
                </div>
              </div>
              <ArrowRightIcon />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
