import Image from "next/image";
import React, { FC } from "react";

const Hastaliklar: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">
        Akdeniz Diyeti Hangi Hastalıklara İyi Gelir?
      </h2>
      <Image
        priority={false}
        src="/kalp-hastaliklari.jpeg"
        alt="kalp-hastaliklari"
        width={500}
        height={325}
      />
      <p className="text-gray-700 mt-5">
        Akdeniz diyeti, geleneksel olarak Akdeniz bölgesine özgü olan ve
        sağlıklı beslenmeyi vurgulayan bir diyet modelidir. Bu diyetin
        kalp-damar sağlığı üzerinde olumlu etkileri olduğu birçok araştırma
        tarafından desteklenmektedir. İşte Akdeniz diyetinin kalp-damar
        sağlığına olan olumlu etkilerine dair bazı önemli noktalar:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2 ml-6">
        <li>
          <strong>Sağlıklı Yağlar:</strong> Akdeniz diyeti, doymamış yağlar
          açısından zengindir, özellikle de zeytinyağı. Bu yağlar, kandaki kötü
          kolesterolü (LDL) düşürebilir ve iyi kolesterolü (HDL) artırabilir, bu
          da kalp-damar hastalıkları riskini azaltabilir.
        </li>
        <li>
          <strong>Antioksidanlar:</strong> Meyve, sebze, kuruyemiş ve tohumlar
          gibi Akdeniz diyetinin temel besinleri antioksidanlar bakımından
          zengindir. Antioksidanlar, serbest radikallerle savaşarak iltihaplanma
          ve oksidatif stresi azaltabilir, bu da kalp-damar hastalıkları riskini
          azaltabilir.
        </li>
        <li>
          <strong>Balık Tüketimi:</strong> Akdeniz diyeti, düzenli olarak balık
          tüketmeyi içerir. Balık, omega-3 yağ asitleri bakımından zengin bir
          kaynaktır. Bu yağ asitleri, kalp sağlığını destekleyebilir, kan
          basıncını düzenleyebilir ve damarları esnek tutabilir.
        </li>
        <li>
          <strong>Meyve ve Sebze Çeşitliliği:</strong> Akdeniz diyetinde bol
          miktarda meyve ve sebze tüketimi önerilmektedir. Bu besinler, lif,
          vitamin ve mineral açısından zengindir ve genel sağlığı
          iyileştirebilir.
        </li>
        <li>
          <strong>Düşük Kırmızı Et Tüketimi:</strong> Akdeniz diyeti, kırmızı et
          tüketimini sınırlar ve bunun yerine tavuk, hindi, baklagiller ve deniz
          ürünlerini teşvik eder. Bu, doymuş yağ alımını azaltabilir ve kalp
          sağlığını olumlu yönde etkileyebilir.
        </li>
      </ul>
      <p className="text-gray-700 mt-4">
        Akdeniz diyeti ayrıca diyabet yönetimi için de olumlu etkileri
        olabilecek bir beslenme tarzı olarak kabul edilmektedir. İşte Akdeniz
        diyetinin diyabet üzerindeki olası etkileri:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2 ml-6">
        <li>
          <strong>Düşük Glisemik İndeks:</strong> Akdeniz diyeti, genellikle
          düşük glisemik indeksli yiyecekleri içerir. Bu, kan şekerinin yavaş
          yükselmesine ve düşmesine yardımcı olabilir.
        </li>
        <li>
          <strong>Yüksek Lif İçeriği:</strong> Akdeniz diyeti, meyve, sebze,
          baklagiller ve tam tahıllar gibi yüksek lifli gıdaları içerir. Lif,
          kan şekerinin dengelenmesine yardımcı olabilir, sindirimi yavaşlatarak
          glisemik tepkiyi azaltabilir.
        </li>
        <li>
          <strong>Sağlıklı Yağlar:</strong> Zeytinyağı gibi doymamış yağlar,
          Akdeniz diyetinin bir parçasıdır. Bu yağlar, insülin hassasiyetini
          artırabilir ve kan şekerinin kontrolünü destekleyebilir.
        </li>
        <li>
          <strong>Balık ve Omega-3 Yağ Asitleri:</strong> Akdeniz diyeti, balık
          gibi omega-3 yağ asitleri içeren gıdaları içerir. Bu yağ asitleri,
          diyabetli bireylerde insülin direncini azaltabilir ve kalp sağlığını
          iyileştirebilir.
        </li>
      </ul>
      <p className="text-gray-700 mt-4">
        Akdeniz diyeti obezite ile mücadelede olumlu etkileri olabileceği
        düşünülen bir beslenme tarzını temsil eder. İşte Akdeniz diyetinin
        obezite üzerindeki olası etkileri:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2 ml-6">
        <li>
          <strong>Dengeli ve Çeşitli Beslenme:</strong> Akdeniz diyeti, çeşitli
          besinleri içerir ve dengeli bir beslenme modelini teşvik eder.
        </li>
        <li>
          <strong>Yüksek Lif İçeriği:</strong> Akdeniz diyeti, meyve, sebze,
          baklagiller ve tam tahıllar gibi lif açısından zengin gıdaları içerir.
          Lif, tokluk hissini artırabilir, sindirimi düzenleyebilir ve
          dolayısıyla obezite riskini azaltabilir.
        </li>
        <li>
          <strong>Sağlıklı Yağlar:</strong> Akdeniz diyeti, zeytinyağı gibi
          doymamış yağları içerir. Bu sağlıklı yağlar, tokluk hissini
          artırabilir ve aynı zamanda metabolizma üzerinde olumlu etkiler
          yapabilir.
        </li>
        <li>
          <strong>Azaltılmış İşlenmiş Gıdalar ve Şeker:</strong> Akdeniz diyeti,
          işlenmiş gıdaların ve şekerin tüketimini sınırlar. Bu da genellikle
          kalori alımını kontrol altına alabilir ve obezite riskini azaltabilir.
        </li>
      </ul>
      <p className="text-gray-700 mt-4">
        Akdeniz diyeti, kanser riskini azaltmaya yardımcı olabileceği düşünülen
        antioksidanlar, sağlıklı yağlar, lif, vitaminler ve mineraller açısından
        zengin bir beslenme tarzını temsil eder.
      </p>
      <p className="text-gray-700 mt-4">
        Ancak, herhangi bir hastalık veya sağlık durumuyla ilgili bir sorunuz
        varsa, bir sağlık profesyoneli veya beslenme uzmanıyla görüşmek
        önemlidir. Her birey farklıdır ve kişiselleştirilmiş beslenme planları,
        sağlık gereksinimlerinizi karşılamak için en iyisi olabilir.
      </p>
      <p className="text-gray-700 mt-4">
        <strong>KAYNAK:</strong>
        Barbaros B, Kabaran S. Akdeniz Diyeti ve Sağlığı Koruyucu Etkileri. Bes
        Diy Derg [Internet]. 15 Ağustos 2014 [a.yer 03 Aralık 2023];42(2):140-7.
        Erişim adresi:
        https://www.beslenmevediyetdergisi.org/index.php/bdd/article/view/177
        ÖZER, E. R., & TEKİNŞEN, K. (2021). Akdeniz Diyeti ve Sağlık. Akademik
        Et Ve Süt Kurumu Dergisi(2), 13-23.
      </p>
    </div>
  );
};

export default Hastaliklar;
