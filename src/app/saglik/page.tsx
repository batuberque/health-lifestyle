import React, { FC } from "react";

const Saglik: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">
        Akdeniz Diyetinin Sağlıkla İlişkisi Nedir?
      </h2>
      <p className="text-gray-700">
        Akdeniz diyeti, içeriği bakımından meyve ve sebzeden yoğun olması ve
        zeytinyağını merkezinde bulundurması özelliklerinden dolayı sağlıklı
        yaşama destek olmasıyla bilinir. Bu diyet, bulaşıcı olmayan kronik
        hastalıklardan korunmada veya hastalıklardan iyileşmede faydalı etkilere
        sahip olabilir.
      </p>
      <p className="text-gray-700 mt-4">
        Akdeniz diyeti ile ilişkilendirilen bazı sağlık faydaları şunlardır:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2 ml-6">
        <li>
          <strong>Kalp Sağlığı:</strong> Akdeniz diyeti, yeterli n-3 yağ
          asitlerinin alınması, tekli doymamış yağ asitlerinin beslenmenin
          temelinde olması ve doymuş yağ asidi ile kolesterol alımının düşük
          olmasının kardiyovasküler hastalık riskini düşürebilir.
        </li>
        <li>
          <strong>Antioksidan Zengin Besinler:</strong> Meyve, sebze,
          kuruyemişler ve balık gibi Akdeniz diyeti temel besinleri,
          antioksidanlar açısından zengindir. Antioksidanlar, vücudu serbest
          radikallerin zararlı etkilerine karşı koruyabilir ve iltihaplanma
          riskini azaltabilir.
        </li>
        <li>
          <strong>Düşük İnflamasyon:</strong> Akdeniz diyeti, iltihaplanma
          düzeylerini kontrol etmeye yardımcı olabilir. İltihaplanma, birçok
          kronik hastalığın temelinde yatan bir faktördür, bu nedenle bu diyetin
          iltihaplanmayı azaltmaya katkıda bulunabileceği düşünülmektedir.
        </li>
        <li>
          <strong>Diyabet Kontrolü:</strong> Akdeniz diyeti, kan şekerini
          dengelemeye yardımcı olabilir. Yüksek lif içeriği ve düşük glisemik
          indeksli yiyecekler, diyabet riskini azaltabilir.
        </li>
        <li>
          <strong>Kilo Kontrolü:</strong> Akdeniz diyetinde bitkisel kökenli
          yağların ve lif açısından zengin besinlerin kullanılması, tokluk
          süresini uzatmakta ve iştah kontrolü sağlayarak obezitenin önüne
          geçmede yardımcı olabilir.
        </li>
        <li>
          <strong>Beyin Sağlığı:</strong> Akdeniz diyeti, omega-3 yağ asitleri
          açısından zengin balık tüketimini içerir. Bu, beyin sağlığını
          destekleyebilir ve bilişsel fonksiyonları artırabilir.
        </li>
        <li>
          <strong>Kanser:</strong> Kanserden korunmada, kanserin tedavi
          sürecinde ve iyileşme sürecinde etkili bir beslenme şekli olarak kabul
          edilir.
        </li>
      </ul>
      <p className="text-gray-700 mt-4">
        Ancak, unutulmaması gereken önemli bir nokta, herkesin farklı beslenme
        ihtiyaçlarına ve sağlık durumlarına sahip olduğudur. Akdeniz diyeti
        genel olarak sağlıklı kabul edilir, ancak her bireyin kişisel sağlık
        hedeflerini ve ihtiyaçlarını değerlendirmek önemlidir. Ayrıca, dengeli
        ve çeşitli bir beslenme alışkanlığı benimsemek her zaman önemlidir.
        Herhangi bir diyet değişikliği yapmadan önce, bir sağlık profesyoneli
        veya beslenme uzmanıyla görüşmek önerilir.
      </p>
      <p className="text-gray-700 mt-4">
        <strong>KAYNAK:</strong>
        TÜBER-2022 ÖZER, E. R., & TEKİNŞEN, K. (2021). Akdeniz Diyeti ve Sağlık.
        Akademik Et Ve Süt Kurumu Dergisi(2), 13-23. Barbaros B, Kabaran S.
        Akdeniz Diyeti ve Sağlığı Koruyucu Etkileri. Bes Diy Derg [Internet]. 15
        Ağustos 2014 [a.yer 03 Aralık 2023];42(2):140-7. Erişim adresi:
        https://www.beslenmevediyetdergisi.org/index.php/bdd/article/view/177
      </p>
    </div>
  );
};

export default Saglik;
