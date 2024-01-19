"use client";

import React, { FC } from "react";
import { NavLink } from "@/components";

const topics = [
  { id: 1, title: "Akdeniz Diyeti Nedir?" },
  { id: 2, title: "Akdeniz Diyeti Tarihçesi" },
  { id: 3, title: "Akdeniz Diyeti Piramidi" },
  { id: 4, title: "Akdeniz Diyetinde Yer Alan Besinler Nelerdir?" },
  { id: 5, title: "Akdeniz Diyeti Nasıl Yapılır?" },
  { id: 6, title: "Uzak Durulması Gereken Besinler" },
];

const AkdenizDiyeti: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">AKDENİZ DİYETİ</h1>
      <ul className="list-disc space-y-2 pl-5">
        {topics.map((topic) => (
          <li key={topic.id} className="text-xl">
            <NavLink to={`/akdeniz-diyeti/${topic.id}`}>{topic.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AkdenizDiyeti;
