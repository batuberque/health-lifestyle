/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";

const Cocuk: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 mr-20 ml-20">
      <h2 className="text-2xl font-bold mb-4">Çocuklarda Akdeniz Diyeti</h2>
      <p className="text-gray-700">
        Çocukluk çağı obezite prevalansı tüm dünyada olduğu gibi Türkiye'de de
        artmaktadır. Dengesiz beslenme ve yetersiz fiziksel aktivite obezitenin
        başlıca nedenleridir. Obezitenin azaltılmasında çocukluktan itibaren
        doğru beslenme ve fiziksel aktivite alışkanlığının edinilmesi önemlidir.
        Yetişkinlikte obezite ve obeziteye neden olan alışkanlıkların izleri
        ergenlik dönemine kadar uzanabildiğinden, sağlıklı beslenme ve fiziksel
        aktivitenin erken yaşlarda takip edilmesi ve bireylerin bireysel
        değerlendirmeleri yapılarak uygun müdahalelerin yapılması oldukça
        önemlidir.
      </p>
      <p className="text-gray-700 mt-4">
        Ancak klinik uygulamalarda, özellikle Birinci Basamak Sağlık
        Hizmetlerinde zamanın kısıtlı olması, kapsamlı beslenme
        değerlendirmelerinin uygulanmasını zorlaştırmaktadır. Dolayısıyla kısa
        tarama araçları bireylerin ve grupların yeme alışkanlıklarını
        belirlemede faydalı araçlardır.
      </p>
      <p className="text-gray-700 mt-4">
        Beslenme alışkanlıklarını ve yeme davranışını önerilen beslenme
        stratejileri açısından değerlendirmek için kullanılan birçok anket ve
        ölçek bulunmaktadır. Bunlardan biri Majem ve arkadaşları tarafından
        geliştirilen Akdeniz Diyeti Kalite İndeksi (KIDMED)'dir. Akdeniz tarzı
        beslenmeyi değerlendirmek için kullanılmaktadır. Sebze, meyve ve tam
        tahıllı gıdaların tüketimine dayalı bir diyettir.
      </p>
      <p className="text-gray-700 mt-4">
        Çalışmalar, Akdeniz diyetinin kalp-damar hastalıklarını önleyici bir
        diyet olduğunu, diyabet, obezite ve kanser riskini azalttığını
        göstermiştir. KIDMED'in çocuklara ve ergenlere uygulandığı çalışmalarda,
        Akdeniz diyetine daha fazla uyum gösteren kişiler daha az obezdir ve
        sağlıkla ilgili yaşam kaliteleri daha iyidir.
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

export default Cocuk;
