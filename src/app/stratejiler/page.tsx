import Image from "next/image";
import React, { FC } from "react";

const Stratejiler: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">
        Akdeniz Diyetine Uygun Alışveriş Stratejileri
      </h2>
      <Image
        priority={false}
        src="/akdeniz5.jpeg"
        alt="akdeniz"
        width={500}
        height={325}
      />
      <p className="text-gray-700 mt-5">
        Sürdürülebilir beslenme, çevresel etkileri düşük, gıda ve beslenme
        güvenliğine, şimdiki ve gelecek nesillerin sağlıklı yaşamına katkıda
        bulunan beslenme biçimidir. Sürdürülebilir beslenme, biyolojik
        çeşitliliğe ve ekosistemlere koruyucu ve saygılı, kültürel açıdan kabul
        edilebilir, erişilebilir, ekonomik açıdan adil ve uygun maliyetlidir;
        beslenme açısından yeterli, güvenli ve sağlıklı olup; doğal kaynakları
        ve insan kaynaklarını optimize eder.
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>
          Alışverişe çıkmadan önce bir alışveriş listesi hazırlayın ve
          ihtiyacınızdan fazlasını almayın. Gıdalarınızı israf etmeyin.
          Alışverişe aç karnına gitmeyin.
        </li>
        <li>
          Geri dönüştürülebilir ve sağlık açısından daha az riskli olan ambalaj
          malzemesine sahip ürünleri almaya özen gösterin. Bu hususta paket
          üzerindeki “geri dönüştürülebilir” logosunu kontrol edebilirsiniz.
        </li>
        <li>
          Günlük beslenme rutininizde “bu beslenme rehberinde” önerilen
          miktarlarda hayvansal kaynaklı besinlere yer verin ve satın alın.
          Bitkisel kaynaklı besinleri daha fazla satın almaya özen gösterin.
        </li>
        <li>
          Alışverişinizde çevre için risk teşkil eden “plastik poşetler” ve
          yapımında ağaçların kesimini gerektiren “kese kağıtları” yerine
          tekrarlı olarak kullanılabilen bez poşetler, özel taşıma-alışveriş
          çantalarını kullanmaya özen gösterin ve doğayı koruyun.
        </li>
        <li>
          Fast-food akımının tersine geleneksel beslenme kültürümüzü korumaya
          çalışın. Coğrafi işaret tescilleri (Menşe, mahreç veya geleneksel ürün
          tescili) almış ürünlerimizin ve değerlerimizin sürdürülmesine destek
          olun.
        </li>
        <li>
          İşlenmiş ve paketli gıdalar yerine; doğal ve/veya minimum işlenmiş
          gıdaları satın almaya özen gösterin.
        </li>
        <li>
          Sürdürülebilir tarım uygulamalarının (organik, iyi tarım uygulamaları
          gibi) yapıldığı ürünlere öncelik vermeye çalışın. Bu kapsamda
          paketlerin üzerindeki sürdürebilir tarım logolarını ve/veya
          beyanlarını kontrol edebilirsiniz.
        </li>
        <li>
          İthalat sıklıkla karbon ayak izini artırır. İthal olmayan ve ülkemizde
          üretilen yerli ürünleri satın almaya çalışın. Üretici pazarlarını
          ve/veya ekolojik pazarları destekleyin.
        </li>
      </ul>
      <p className="text-gray-700 mt-4">
        <strong>KAYNAK:</strong>
        <br />
        TÜBER 2022
        <br />
        Dernini S and Berry EM (2015) Mediterranean diet: from a healthy diet to
        a sustainable dietary pattern. Front. Nutr. 2:15. doi:
        10.3389/fnut.2015.00015
      </p>
    </div>
  );
};

export default Stratejiler;
