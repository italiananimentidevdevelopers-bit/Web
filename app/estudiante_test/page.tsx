"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EstudianteTestPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const netlifyIdentity = (window as any).netlifyIdentity;
    
    if (netlifyIdentity) {
      netlifyIdentity.init();
      const currentUser = netlifyIdentity.currentUser();
      
      if (!currentUser) {
         // Si no hay usuario logueado, lo mandamos al login local
         router.push("/login");
      } else {
         // Si hay usuario logueado, seteamos el estado
         setUser(currentUser);
      }
    } else {
      // Netlify identity widget no cargó o no está listo
      setTimeout(() => {
         const ni = (window as any).netlifyIdentity;
         if(ni && ni.currentUser()){
            setUser(ni.currentUser());
         } else {
            router.push("/login");
         }
      }, 1000);
    }
    
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    const netlifyIdentity = (window as any).netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.logout();
      netlifyIdentity.on("logout", () => {
        router.push("/");
      });
    }
  };

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center h-screen bg-secondary-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-full"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
        <div className="size-20 bg-secondary-200 rounded-full flex items-center justify-center mx-auto mb-6">
           <span className="text-3xl">🎓</span>
        </div>
        <h1 className="text-3xl font-black text-secondary-full mb-2">¡Benvenuto!</h1>
        <h2 className="text-xl font-bold text-neutral-1000 mb-4">{user.user_metadata?.full_name || 'Estudiante de Prueba'}</h2>
        
        <p className="text-lg text-neutral-800 mb-6 bg-green-50 text-green-700 p-3 rounded-xl border border-green-200">
          Esta es tu área protegida. ¡El login con Netlify Identity fue un éxito!
        </p>

        <div className="bg-neutral-50 p-4 rounded-xl text-left mb-8 border border-neutral-200">
           <p className="text-sm text-neutral-500 font-bold mb-1">Información de la cuenta:</p>
           <p className="text-sm text-neutral-800">✉️ {user.email}</p>
        </div>
        
        <div className="flex flex-col gap-3 justify-center">
          <Link href="/" className="bg-secondary-200 hover:bg-secondary-300 transition-colors text-secondary-full px-6 py-3 rounded-xl font-bold w-full">
            Volver a la página principal
          </Link>
          <button 
            onClick={handleLogout}
            className="bg-primary-full hover:bg-red-600 transition-colors text-white px-6 py-3 rounded-xl font-bold w-full shadow-md"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
