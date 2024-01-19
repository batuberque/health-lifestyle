/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const OrnekMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white-100 p-4 rounded-md shadow-md mr-10 ml-10">
      <h2 className="text-2xl font-bold mb-4">Akdeniz Diyeti Örnek Menü</h2>
      <Image
        priority={false}
        src="/menu1.png"
        alt="menu"
        width={700}
        height={325}
      />
      <Image
        priority={false}
        src="/menu2.png"
        alt="menu-2"
        width={500}
        height={325}
      />
      <p className="text-gray-700 mt-4">
        <strong>KAYNAK:</strong>
        Baysal, Ayşe. "Sağlıklı beslenme ve Akdeniz diyeti." Beslenme ve Diyet
        Dergisi 25.1 (1996): 21-29.{" "}
      </p>
    </div>
  );
};

export default OrnekMenu;
