"use client";

import React, { FC } from "react";
import {
  AkdenizDiyetiNedir,
  AkdenizDiyetiTarihcesi,
  AkdenizDiyetiPiramidi,
  AkdenizDiyetiBesinleri,
  AkdenizDiyetiNasilYapilir,
  UzakDurulmasiGerekenBesinler,
} from ".";
import { usePathname } from "next/navigation";

const AkdenizDiyetiSayfasi: FC = () => {
  const path = usePathname();

  const renderContent = () => {
    switch (path) {
      case "/akdeniz-diyeti/1":
        return <AkdenizDiyetiNedir />;
      case "/akdeniz-diyeti/2":
        return <AkdenizDiyetiTarihcesi />;
      case "/akdeniz-diyeti/3":
        return <AkdenizDiyetiPiramidi />;
      case "/akdeniz-diyeti/4":
        return <AkdenizDiyetiBesinleri />;
      case "/akdeniz-diyeti/5":
        return <AkdenizDiyetiNasilYapilir />;
      case "/akdeniz-diyeti/6":
        return <UzakDurulmasiGerekenBesinler />;
      default:
        return <div>İçerik bulunamadı.</div>;
    }
  };

  return <div className="container mx-auto p-4">{renderContent()}</div>;
};

export default AkdenizDiyetiSayfasi;
