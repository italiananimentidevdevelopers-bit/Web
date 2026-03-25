import React from 'react';

export type TestimonialCardProps = {
  name: string;
  text: string;
  imgSrc?: string;
};

export function TestimonialCard({ name, text, imgSrc = "/assets/05b6519713db858961e828db08e90f55c50d44e4.png" }: TestimonialCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative w-full bg-white rounded-xl shadow-sm p-8">
      <div className="relative rounded-[72px] shrink-0 size-[69px]">
        <img alt={name} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[72px] size-full" src={imgSrc} />
      </div>
      <div className="flex flex-col font-inter font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black whitespace-nowrap mt-4">
        <p className="leading-[33px]">{name}</p>
      </div>
      <div className="flex flex-col font-inter font-medium justify-center min-w-full not-italic relative shrink-0 text-[16px] text-neutral-1000 mt-2">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
