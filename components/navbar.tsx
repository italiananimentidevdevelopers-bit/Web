"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

const imgVector = "/assets/fafcd55cceac02a2fdc8a1161b612363df033e03.svg";
const imgVector1 = "/assets/9f4b8341df2e676e83f5b1aad395216a53fcd624.svg";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="content-stretch flex items-center justify-between container mx-auto relative shrink-0 w-full px-[10px] z-50">
            <Link href="/" tabIndex={-1}>
                <div className="overflow-clip relative shrink-0 size-[85px]">
                    <div className="absolute inset-[51.7%_15.8%_24.31%_76.76%]">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
                    </div>
                    <div className="absolute inset-[16.06%_15.79%_15.85%_16.09%]">
                        <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
                    </div>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex content-stretch gap-[10px] items-center relative shrink-0">
                <Link href="/corsi" tabIndex={-1}>
                    <Button variant="ghost" size="sm">Corsi Di lingua</Button>
                </Link>
                <Button variant="ghost" size="sm">Lavoratori</Button>
                <Button variant="ghost" size="sm">Cafe Italiano</Button>
                <Button variant="ghost" size="sm">Nosotros</Button>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex content-stretch gap-[10px] items-center relative shrink-0">
                <Button variant="outline" size="sm">Registro</Button>
                <Link href="/login" tabIndex={-1}>
                    <Button variant="solid" size="sm" className="w-full">Login</Button>
                </Link>
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="md:hidden flex items-center shrink-0">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-gray-800 hover:text-black focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    {isMenuOpen ? (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-full right-[2px] mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl py-3 flex flex-col gap-2 md:hidden">
                    <div className="flex flex-col px-4 gap-1">
                        <Link href="/corsi" tabIndex={-1} onClick={() => setIsMenuOpen(false)} className="w-full">
                            <Button variant="ghost" size="sm" className="justify-start w-full text-left font-medium">Corsi Di lingua</Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="justify-start w-full text-left font-medium" onClick={() => setIsMenuOpen(false)}>Lavoratori</Button>
                        <Button variant="ghost" size="sm" className="justify-start w-full text-left font-medium" onClick={() => setIsMenuOpen(false)}>Cafe Italiano</Button>
                        <Button variant="ghost" size="sm" className="justify-start w-full text-left font-medium" onClick={() => setIsMenuOpen(false)}>Nosotros</Button>
                    </div>
                    <div className="h-px bg-gray-100 my-1 mx-4"></div>
                    <div className="flex flex-col px-4 gap-2 pb-1">
                        <Button variant="outline" size="sm" className="w-full font-medium" onClick={() => setIsMenuOpen(false)}>Registro</Button>
                        <Link href="/login" tabIndex={-1} onClick={() => setIsMenuOpen(false)} className="w-full">
                            <Button variant="solid" size="sm" className="w-full font-medium">Login</Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}