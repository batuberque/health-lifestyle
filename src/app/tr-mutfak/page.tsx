/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { FC } from "react";

const TRMutfak: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 mr-10 ml-10">
      <h2 className="text-2xl font-bold mb-4">
        Türk Mutfağı Akdeniz Diyetine Uyar mı?
      </h2>
      <Image
        priority={false}
        src="/meyve.jpeg"
        alt="meyve"
        width={500}
        height={325}
      />
      <p className="text-gray-700 mt-5">
        Türk halkının sofrasında ekmek esas besindir. Ekmeğin aşırı
        saflaştırılmış beyaz undan üretilmesi uygun olmamakla birlikte diyette
        bulgur ve kuru baklagillerin bulunması bu eksikliği giderilebilmektedir.
        Son yıllarda balık ve tavuk tüketiminde artış olması olumlu bir değişme
        iken, şeker tüketiminin artması olumsuzdur. Diyette görünmez yağ azdır.
        En çok kullanılan görünür yağ türleri; margarin, bitkisel sıvı yağ ve
        zeytinyağıdır. Toplam yağdan gelen enerji % 25’i geçmemektedir. Bu da
        önerilere uygundur. Son yıllarda zeytinyağı tüketiminin azalması,
        margarin tüketiminin artması olumsuz bir değişmedir. Ancak margarin
        yapımında hidrojenlendirme tekniğinin geliştirilmesiyle doymamış yağ
        asitlerini nispeten çok içeren, trans yağ asitlerini ise az içeren
        yumuşak margarin üretimi bu olumsuzluğu bir derece önlemektedir.
        Ortalama diyette süt grubu besinler yetersizdir. Ülkemiz için önerilen
        yeterli ve dengeli beslenme rehberinde besinler 4 temel gruba ayrılmış
        ve süt ve türevleri ayrı bir grupta gösterilmiştir. Böylece diyette süt
        ve türevlerinin arttırılması hedeflenmiştir. Ayrıca bizim önerilerimizde
        kuru baklagiller, yumurta, tavuk, balık, fındık, fıstık, et seçeneği
        olarak gösterilmiştir. Birinci gruptan kuru baklagil, ikinci gruptan
        yoğurt, üçüncü gruptan sebze-meyve. dördüncü gruptan ekmek, bulgur
        içeren tipik Türk halkının diyeti sağlıklı besleme önerilerine uygundur.
        Zaten kebaplar dışındaki Türk yemeklerinde et çok az miktarlarda
        kullanılmaktadır.
      </p>
      <p className="text-gray-700 mt-4">
        Akdeniz diyetine uygun ortalama Türk diyetinde bölgelere ve gelir
        gruplarına göre farklılıklar vardır. Yüksek gelir grupları eti, düşük
        gelir gruplarından 5-6 kat fazla tüketmektedirler. Yüksek gelir
        gruplarında yumurta, tavuk, balık ve şeker tüketimi de yüksektir. Batı
        bölgelerimizde görünür yağ olarak zeytinyağı ve bitkisel sıvı yağ
        kullanılmasına karşın, doğu bölgelerinde tereyağı ve bunun yerini alan
        margarin daha çok tüketilmektedir. Diyetteki bu farklılık kan
        lipitlerine yansımaktadır. İstanbul Amerikan Hastanesi ile Kaliforniya
        Gladstone Kardiyovasküler Hastalıklar Enstitüsü çalışmalarında doymuş
        yağı çok tüketenlerle yüksek gelir gruplarında kan kolesterol düzeyi Ege
        Bölgesi’nde yaşayanlardan daha yüksek bulunmuştur. Türkiye’nin ortalama
        diyeti Akdeniz diyetine uygundur. Diyette yapılan başlıca hatalar; yağın
        yakılarak yemeğe eklenmesi, bazı tatlılarda aşırı şeker ve yağ
        kullanılması, aşırı saflaştırılmış undan ekmek yapımı ve Akdeniz
        beslenme biçim ine uygun zeytinyağı kullanılarak yapılan
        bulgurlu-kurubaklagilli-sebzeli geleneksel yemeklerin yerine batı tipi
        yağ ve doymuş yağ asitlerinden zengin hızlı yemek sistemine yönelmedir.
      </p>
      <p className="text-gray-700 mt-4">
        <strong>KAYNAK:</strong>
        <br />
        Davis C, Bryan J, Hodgson J, Murphy K. Definition of the Mediterranean
        Diet; a Literature Review. Nutrients. 2015 Nov 5;7(11):9139-53. doi:
        10.3390/nu7115459. PMID: 26556369; PMCID: PMC4663587.
        <br />
        ÖZER, E. R., & TEKİNŞEN, K. (2021). Akdeniz Diyeti ve Sağlık. Akademik
        Et Ve Süt Kurumu Dergisi(2), 13-23.
        <br />
        Baysal, Ayşe. "Sağlıklı beslenme ve Akdeniz diyeti." Beslenme ve Diyet
        Dergisi 25.1 (1996): 21-29.
      </p>
    </div>
  );
};

export default TRMutfak;
