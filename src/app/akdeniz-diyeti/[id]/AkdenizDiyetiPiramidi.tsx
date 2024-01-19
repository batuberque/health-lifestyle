import Image from "next/image";
import React, { FC } from "react";

const AkdenizDiyetiPiramidi: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white-100 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Akdeniz Diyeti Piramidi Nedir?
      </h2>

      <Image
        priority={false}
        src="/piramit.png"
        alt="Sağlıklı Beslenme"
        width={400}
        height={425}
      />

      <p className="mb-2">
        Bu piramit yetişkin (18-65 yaş) ve sağlıklı popülasyonun
        gereksinimlerini karşılamayı hedeflemektedir.
      </p>
      <p className="mb-2">
        Piramidin en alt kısmında ekmek, makarna gibi tahıl ürünleri yer
        almaktadır. Tahıl ürünlerinin günlük ve ortalama 8 porsiyon olarak
        tüketilmesi istenir.
      </p>
      <p className="mb-2">
        Tahılların üstünde yer alan meyve ve sebzeler vitamin, mineral,
        antioksidan ve posa açısından çok değerli besinlerdir. Sebzelerin
        öğlen/akşam yemek olarak veya yemeklerin yanında salata olarak günlük en
        az 2 porsiyon tüketilmesi istenir. Meyveler ise tatlı ihtiyacımızı
        karşılamak adına tercih edilmeli ve en az 2 porsiyon günlük olarak
        tüketilmelidir.
      </p>
      <p className="mb-2">
        Piramidin dışında yer alan ancak her gün 1,5-2,0 litre tüketilmesi
        istenen grup, sudur. Vücudun özellikle de yaz aylarında sıvı dengesini
        sağlamak, metabolizmanın çalışmasına yardımcı olmak adına su alımı çok
        önemlidir.
      </p>
      <p className="mb-2">
        Süt ürünlerinde (peynir, yoğurt vb.) az yağlı olanlar tercih edilmeli ve
        günlük olarak ihtiyaca göre porsiyonlar düzenlenerek tüketilmelidir.
      </p>
      <p className="mb-2">
        Akdeniz diyetinin temelini oluşturan zeytinyağı, piramidin temelinde
        bulunarak günlük tüketilmesi istenen grupta yer alır. Ölçüsü ise kişi
        başı 1 yemek kaşığı olmalı ve yemekler dâhil salata soslarında da
        kullanılmalıdır.
      </p>
      <p className="mb-2">
        Tuzu azaltmak ve yiyeceklerin lezzetine çeşitlilik katmak için
        yemeklerde baharatların, otların, sarımsak ve soğanın kullanılması
        önerilmektedir.
      </p>
      <p className="mb-2">
        Haftalık tüketilmesi istenen grupta yer alan besinler, genelde hayvansal
        veya bitkisel protein oranı yüksek olan besinlerdir. Bunlar; Balık ve
        yumurta diyette önemli hayvansal protein kaynaklarıdır. Kırmızı et ve
        işlenmiş et tüketimi az miktar ve sıklıkta olmalıdır.
      </p>
      <p className="mb-2">
        Kuru baklagillerle, tahılların bir arada tüketilmesi protein kalitesini
        arttıracağından birlikte tüketilmelidir.
      </p>
      <p className="mb-2">
        Yağlı tohumların, kalp için faydalı yağları içermesinden dolayı günlük 1
        avuç çiğ olarak tüketilmesi gerekmektedir.
      </p>
      <p className="mb-2">
        Piramitte ara sıra tüketilmesine izin verilen grupta paketli gıdalar,
        şeker ve şeker ilavesi olan tüm yiyecek ve içecekler yer almaktadır.
      </p>
      <p className="text-sm text-gray-600">
        KAYNAK: ÖZER, E. R., & TEKİNŞEN, K. (2021). Akdeniz Diyeti ve Sağlık.
        Akademik Et Ve Süt Kurumu Dergisi(2), 13-23. TÜBER-2022
      </p>
    </div>
  );
};

export default AkdenizDiyetiPiramidi;
