import Image from "next/image";
import React, { FC } from "react";

const AkdenizDiyetiBesinleri: FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Akdeniz Diyetinde Yer Alan Besinler Nelerdir?
      </h2>

      <p className="mb-2 mt-5">
        Akdeniz diyetinde işlem görmüş besinler yer almazken, et ve ürünleri
        (özellikle kırmızı et) çok az yer kaplamaktadır. Diyette daha çok tam
        tahıllar, sebze ve meyveler, kuru baklagiller, yağlı tohumlar, balık ve
        zeytinyağı yer almaktadır.
      </p>
      <p className="mb-2">
        <strong>Tam Tahıl Kaynağı Besinleri:</strong> Tahıl ve ürünlerinin
        (yulaf, arpa, buğday, çavdar vb.) yüksek düzeyde (günlük ortalama 8
        porsiyon) tüketimi, geleneksel Akdeniz diyetinin bir parçasıdır. Tam
        tahıl kaynağı besinlerin koroner kalp hastalığı, tip 2 diyabet, kanser
        gibi kronik hastalıkların ortaya çıkış riskinin azalmasında önemli rol
        oynar. Buna ek olarak tam tahıllar ağırlık kontrolünü sağlamakta ve
        sindirim sisteminin düzenli çalışmasına yardımcı olmaktadır. Akdeniz
        diyetinde önerilen günlük en az 3 porsiyon tam tahıl tüketiminin
        BKİ’ini, abdominal yağlanmayı ve ilerleyen yaşlarda ağırlık artışı
        eğilimini azalttığı araştırmalarda belirtilmektedir.
      </p>
      <p className="mb-2">
        <strong>Sebze ve Meyveler:</strong> Akdeniz diyetinde önemli bir yere
        sahip olan sebze ve meyvelerin günlük tüketim miktarı en az 5
        porsiyondur. Meyve ve sebzeden zengin bir diyet kalp-damar
        hastalıklarına karşı koruyucudur. Bağırsak hareketlerine yardımcı olup,
        sindirim sistemini düzenlerler.
      </p>
      <p className="mb-2">
        <strong>Kuru Baklagiller:</strong> Kuru baklagil tüketimi vücut ağırlığı
        ve bel çevresi değerinin azalmasını sağlamaktadır. Araştırmalara göre
        kuru baklagil tüketimi ile kardiyovasküler hastalık, tip 2 diyabet riski
        azaltılabilir. Hem protein hem mineral içeriğinden zengin olan kuru
        baklagiller düşük kolesterol, vücut ağırlığında düşüş, özellikle bel
        bölgesinde incelme ile ilişkilidir. Haftada en az 2-3 kez
        tüketilmelidir.
      </p>
      <p className="mb-2">
        <strong>Yağlı Tohumlar:</strong> Yağlı tohumlar olarak nitelendirdiğimiz
        ceviz, badem, fındık, Antep fıstığı gibi besinlerin Akdeniz diyetinde
        rolü büyüktür. Yağlı tohumların, kalp için faydalı yağları içermesinden
        dolayı günlük 1 avuç çiğ olarak tüketilmesi gerekmektedir. Kolesterolün
        düşmesine ve kalp-damar sağlığının korunmasına yardımcı olmaktadır.
      </p>
      <p className="mb-2">
        <strong>Zeytinyağı:</strong> Zeytinyağı, Akdeniz diyet piramidinin tam
        orta noktasında yer alır ve diyetin en temel besin ögesini oluşturur.
        Akdeniz diyetinin en önemli özelliklerinden biri zeytinyağının yağdan
        gelen enerjinin temeli olmasıdır. Tipik Akdeniz diyetinde zeytinyağı
        tüketimi genellikle 25-50ml/gün arasındadır. Kolesterol ve tansiyon
        düşürücü, kardiyovasküler hastalıklara karşı koruyucu etkisi vardır.
      </p>
      <p className="mb-2">
        <strong>Balık:</strong> Omega 3 yağ asitlerine sahip olan balık bu
        özellikleri bakımından, trigliseriti düşürmeye, kalp ve damar sağlığını
        korumaya yardımcıdır. İyi kalite protein örneği olan balık tipik Akdeniz
        diyetinde haftada en az 2-3 porsiyon tüketilmelidir.
      </p>
      <p className="text-sm text-gray-600 mb-5">
        KAYNAK: Barbaros B, Kabaran S. Akdeniz Diyeti ve Sağlığı Koruyucu
        Etkileri. Bes Diy Derg [Internet]. 15 Ağustos 2014 [a.yer 03 Aralık
        2023];42(2):140-7. Erişim adresi:
        https://www.beslenmevediyetdergisi.org/index.php/bdd/article/view/177
        ÖZER, E. R., & TEKİNŞEN, K. (2021). Akdeniz Diyeti ve Sağlık. Akademik
        Et Ve Süt Kurumu Dergisi(2), 13-23.
      </p>
      <div className="flex justify-center">
        <Image
          priority={false}
          src="/akdeniz3.jpeg"
          alt="akdeniz3"
          width={400}
          height={325}
        />
      </div>
    </div>
  );
};

export default AkdenizDiyetiBesinleri;
