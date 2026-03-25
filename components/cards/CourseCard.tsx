import React from 'react';
import { Button } from '../ui/Button';

export type CourseCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  className?: string;
};

export function CourseCard({ title, description, imgSrc, className = '' }: CourseCardProps) {
  return (
    <div className={`content-stretch flex flex-col h-full items-start justify-start overflow-clip relative shrink-0 ${className}`}>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full flex-grow">
        <div className="bg-[#ff0a0a] h-[313px] overflow-clip relative rounded-6 shrink-0 w-full">
          <div className="absolute inset-0">
            <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSrc} />
          </div>
        </div>
        <div className="flex flex-col font-inter font-black justify-center leading-tight not-italic relative shrink-0 text-[32px] text-neutral-1000 mt-4">
          <p className="leading-[48px]">{title}</p>
        </div>
        <div className="flex flex-col font-inter font-medium justify-center min-w-full not-italic relative shrink-0 text-[18px] text-neutral-1000 w-full mt-2">
          <p className="leading-[27px]">{description}</p>
        </div>
      </div>
      <div className="mt-auto pt-6 w-full flex justify-start">
        <Button variant="solid" size="lg">Vedi altro</Button>
      </div>
    </div>
  );
}
