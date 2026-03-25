import { Logo } from '@/components/ui/Logo';

export default function Footer() {
    return (
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
                    <div className=" flex flex-col gap-[20px] font-inter font-medium items-start relative text-[16px] text-secondary-400">
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
                    <div className="content-stretch flex flex-col gap-[20px] font-inter font-medium items-start relative shrink-0 text-[16px] text-secondary-400">
                        <a href="#" className="hover:underline">Esperienze recenti</a>
                        <a href="#" className="hover:underline">Prossimi incontri</a>
                    </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic overflow-clip relative text-left">
                    <div className="flex flex-col font-inter font-bold justify-center relative shrink-0 text-[20px] text-secondary-full">
                        <p className="leading-[33px]">Risorse</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[20px] font-inter font-medium items-start relative shrink-0 text-[16px] text-secondary-400">
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
                    <div className="content-stretch flex flex-col gap-[20px] font-inter font-medium items-start relative shrink-0 text-[16px] text-secondary-400">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Facebook</a>
                        <a href="#" className="hover:underline">Reddit</a>
                        <a href="#" className="hover:underline">X</a>
                    </div>
                </div>
            </div>
        </div>
    );
}   