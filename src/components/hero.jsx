"use client";

import { Button } from "./button";
import debtCollector from "@/assets/debt-collect.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="px-2 bg-indigo-50 m-auto block max-w-[1280px] rounded-lg hover:no-underline mb-4">
      <div className="px-9 py-5 relative grid grid-cols-4 gap-4">
        <div className="col-span-3 flex flex-col items-start pt-4">
          <h2 className="text-black text-2xl font-bold">
            Tagih Hutang Tanpa Beban
          </h2>
          <p className="text-black text-sm font-normal mt-6 mb-4">
            <b>Bayar Utang Lo 🐒</b> adalah platform{" "}
            <i>debt collector as a service</i>. Kamu cukup kasih tahu kami
            detail tentang hutang yang kamu berikan lalu debt collector kami
            akan menagih hutangnya hingga terbayar.
          </p>
          <Button clickMethod="open-form" />
        </div>
        <div className="w-[350px] h-auto col-span-1">
          <Image
            src={debtCollector}
            alt="this is my image"
            className="object-fit"
          />
        </div>
      </div>
    </div>
  );
};
