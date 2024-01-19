import React, { FC } from "react";

const AkdenizDiyetiNasilYapilir: FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Akdeniz Diyeti Nasıl Yapılır?</h2>
      <p className="mb-2">
        Sağlık üzerine olumlu etkileri ile bilinen ve birçok kronik hastalığın
        oluşumunu önlemede etkili bulunan Akdeniz diyeti, günümüzde önerilen
        beslenme modellerinin başında gelmektedir.
      </p>
      <p className="mb-2">
        Besin çeşitliliği açısından zengin içeriğe sahip Akdeniz diyetinde,
        sağlıklı bir yetişkin ortalama şu besinleri tüketmelidir:
      </p>
      <ul className="list-disc pl-6 mb-2">
        <li>Her gün 8 porsiyon tahıl (Tercihen tam tahıl)</li>
        <li>
          Her gün en az 5 porsiyon çeşitli renklerde sebze-meyve (Patates sebze
          olarak sayılmamaktadır.)
        </li>
        <li>Her gün 2 porsiyon az yağlı süt ve süt ürünleri</li>
        <li>Her gün 1-2 porsiyon sert kabuklu yemişler</li>
        <li>Haftada 2-4 porsiyon yumurta</li>
        <li>Haftada en az 2 porsiyon kurubaklagiller</li>
        <li>
          Haftada en az 2 porsiyon balık ve deniz ürünleri ile 2 porsiyon beyaz
          et (tavuk, hindi)
        </li>
        <li>Haftada en fazla 2 porsiyon kırmızı et</li>
        <li>Haftada en fazla 1 porsiyon işlenmiş et</li>
        <li>
          Yağ çeşitleri arasından ağırlıklı olarak zeytinyağı tüketmelidir.
        </li>
      </ul>
      <p className="mb-2">
        Çok az sıklıkla tüketilmesi gereken besinler; işlenmiş etler, şeker,
        tatlılar ve hamur işleridir. Yerel, mevsimlik, taze ve minimum işlenmiş
        besinler tercih edilmeli, ana öğünler için üç önemli besin grubu yani
        sebze, meyve, tahıllar mutlaka yer almalıdır. Yemeklerde zeytinyağı
        tercih edilmeli, meyve, sebze tüketiminde çeşitlilik sağlanmalıdır. Tuz
        yerine daha fazla baharatların, soğan ve sarımsak kullanılmalıdır.
        Günlük ortalama 1,5-2 litre (8-10 su bardağı) tüketilmesine özen
        gösterilmelidir. Sıvı gereksinimini karşılamak için suya ek olarak
        şekersiz bitki çayları ve siyah çay tüketilebilir. Düzenli fiziksel
        aktivite ile birlikte biyoçeşitlilik ve mevsime uygun beslenmeye dikkat
        edilmelidir.
      </p>
      <p className="text-sm text-gray-600">
        KAYNAK: TOKAY A, YILMAZ C, BÖLÜK S, BOYRAZ Ö, BÜLBÜL N. Sürdürülebilir
        Beslenme Modellerinden Akdeniz Diyetinin Sürdürülebilirlikteki Yeri.
        TOGÜ Sağlık Bilimleri Dergisi. 2022;2(2):187-201. TÜBER-2022
      </p>
    </div>
  );
};

export default AkdenizDiyetiNasilYapilir;
