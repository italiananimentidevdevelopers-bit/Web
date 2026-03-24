"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const imgFrame68 = "http://localhost:3845/assets/30b706c6f89433e8d7cf6bfe5355df2f18790934.png";
const imgGroup = "http://localhost:3845/assets/ec5b75ecd53c1ac02e877dee977a42e9ed8a10eb.svg";

export default function Login() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Si ya hay usuario logueado en Identity, lo mandamos al área privada
    const netlifyIdentity = (window as any).netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.init();
      if (netlifyIdentity.currentUser()) {
        router.push("/estudiante_test");
      }
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const netlifyIdentity = (window as any).netlifyIdentity;
    if (!netlifyIdentity) {
       setError("Sistema de autenticación todavía no cargado. Intenta de nuevo.");
       setLoading(false);
       return;
    }

    try {
      // Netlify Identity provee la librería GoTrue nativamente bajo 'gotrue'
      await netlifyIdentity.gotrue.login(email, password, true);
      
      // Lanzar el evento global por si el widget necesita saberlo y navegar
      window.dispatchEvent(new Event('netlifyIdentityLogin'));
      router.push("/estudiante_test");
    } catch (err: any) {
      console.error("Error logging in:", err);
      // Extraemos el error descriptivo de GoTrue si existe
      setError(err?.json?.error_description || err?.message || "Email o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleLogin} className="flex flex-col gap-6 items-start relative w-full max-w-[539px]">
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

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 relative w-full rounded-md shadow-sm" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          <div className="flex flex-col gap-2 items-start relative w-full">
            <label className="font-inter font-normal text-[16px] text-secondary-400">
              Email
            </label>
            <input 
              type="email" 
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-secondary-300 rounded-6 p-4 w-full font-inter font-medium text-[18px] text-secondary-full outline-none focus:border-secondary-full transition" 
            />
          </div>
          
          <button 
            type="button" 
            onClick={() => {
              // Si el usuario quiere restaurar contraseña, abrimos el widget oficial sólo para el módulo de recuperación
              const netlifyIdentity = (window as any).netlifyIdentity;
              if (netlifyIdentity) {
                netlifyIdentity.open();
              }
            }}
            className="font-inter font-medium text-[16px] text-primary-full hover:underline mt-[-8px] text-left appearance-none bg-transparent border-none cursor-pointer p-0"
          >
            Olvidaste tu contraseña
          </button>
          
          <button 
            type="submit"
            disabled={loading}
            className="bg-primary-full border border-primary-full text-inverse font-inter font-normal text-[16px] leading-[24px] p-m rounded-m w-full mt-4 hover:opacity-90 transition cursor-pointer flex justify-center items-center disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Login"}
          </button>
          
          {/* Ocultamos el div de crear cuenta porque los administradores controlan los accesos */}
          {/*
          <div className="flex font-inter font-medium gap-2 items-center justify-center text-[16px] w-full mt-6">
            <span className="text-secondary-300">
              ¿No tienes una cuenta?
            </span>
            <a href="#" className="text-primary-full hover:underline">
              Crear cuenta
            </a>
          </div>
          */}
        </form>
      </div>
    </div>
  );
}
