import React from 'react';

const imgGroup = "/assets/af9a1eb55b3b43dcf0d08101e38346021139cf23.svg";

export type LogoProps = {
  className?: string;
  propiedad1?: "Long" | "Default";
};

export function Logo({ className, propiedad1 = "Long" }: LogoProps) {
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
