import React from 'react';
import Link from 'next/link';

const imgFrame68 = "http://localhost:3845/assets/30b706c6f89433e8d7cf6bfe5355df2f18790934.png";
const imgGroup = "http://localhost:3845/assets/ec5b75ecd53c1ac02e877dee977a42e9ed8a10eb.svg";

export default function Login() {
  return (
    <div className="bg-neutral-100 flex flex-col md:flex-row items-stretch relative min-h-screen w-full">
      {/* Left Panel */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-hidden p-[10px] relative hidden md:flex">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-secondary-full inset-0" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgFrame68} />
        </div>
        <div className="h-[489px] relative w-[457px] flex-shrink-0">
          <p className="absolute font-vollkorn font-normal inset-[80.31%_5.79%_3.77%_6.2%] leading-[normal] text-[66.73px] text-white">
            Italianementi
          </p>
          <div className="absolute inset-[6.18%_65.1%_22.58%_6.61%]">
            <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
          </div>
        </div>
      </div>
      
      {/* Right Panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-[10px] relative w-full">
        <div className="flex flex-col gap-6 items-start relative w-full max-w-[539px]">
          <div className="flex items-center pb-8 relative w-full">
            <Link href="/">
              <span className="absolute -top-16 left-0 text-secondary-400 hover:text-secondary-full transition text-sm cursor-pointer block md:hidden">
                &larr; Volver
              </span>
            </Link>
            <h1 className="font-inter font-black text-[38px] text-secondary-full leading-[57px] tracking-tight">
              Bienvenido de vuelta
            </h1>
          </div>
          
          <div className="flex flex-col gap-2 items-start relative w-full">
            <label className="font-inter font-normal text-[16px] text-secondary-400">
              Email
            </label>
            <input 
              type="email" 
              placeholder="Email" 
              className="border border-secondary-300 rounded-6 p-4 w-full font-inter font-medium text-[18px] text-secondary-full outline-none focus:border-secondary-full transition" 
            />
          </div>
          
          <div className="flex flex-col gap-2 items-start relative w-full">
            <label className="font-inter font-normal text-[16px] text-secondary-400">
              Contraseña
            </label>
            <input 
              type="password" 
              placeholder="*****" 
              className="border border-secondary-300 rounded-6 p-4 w-full font-inter font-medium text-[18px] text-secondary-full outline-none focus:border-secondary-full transition" 
            />
          </div>
          
          <a href="#" className="font-inter font-medium text-[16px] text-primary-full hover:underline mt-[-8px]">
            Olvidaste tu contraseña
          </a>
          
          <button className="bg-primary-full border border-primary-full text-inverse font-inter font-normal text-[16px] leading-[24px] p-m rounded-m w-full mt-4 hover:opacity-90 transition cursor-pointer flex justify-center items-center">
            Login
          </button>
          
          <div className="flex font-inter font-medium gap-2 items-center justify-center text-[16px] w-full mt-6">
            <span className="text-secondary-300">
              ¿No tienes una cuenta?
            </span>
            <a href="#" className="text-primary-full hover:underline">
              Crear cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
