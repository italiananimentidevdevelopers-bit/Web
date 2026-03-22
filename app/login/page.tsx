"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const netlifyIdentity = (window as any).netlifyIdentity;

    if (netlifyIdentity) {
      // Iniciar el widget de netlify
      netlifyIdentity.init();

      // Si el usuario ya está logueado, redirigir a la página de estudiante inmediatamente
      if (netlifyIdentity.currentUser()) {
        router.push("/estudiante_test");
        return;
      }

      // Escuchar el evento de login exitoso
      netlifyIdentity.on("login", () => {
        router.push("/estudiante_test");
        netlifyIdentity.close();
      });

      // Abrir el widget automáticamente cuando carga la página
      netlifyIdentity.open("login");
    }
  }, [router]);

  if (!isClient) return null;

  return (
    <div className="flex h-screen items-center justify-center bg-secondary-100">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-sm w-full mx-4">
        <h1 className="text-3xl font-black text-secondary-full mb-6">Iniciar Sesión</h1>
        <p className="mb-8 font-medium text-neutral-1000">
          Si la ventana flotante no se abre automáticamente, presiona el botón de abajo:
        </p>
        <button 
          onClick={() => {
            const netlifyIdentity = (window as any).netlifyIdentity;
            if (netlifyIdentity) {
              netlifyIdentity.open("login");
            }
          }}
          className="bg-primary-full text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all w-full"
        >
          Abrir Ventana de Acceso
        </button>
      </div>
    </div>
  );
}
