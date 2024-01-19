import React, { FC } from "react";

const UzakDurulmasiGerekenBesinler: FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Akdeniz Diyetinde Uzak Durulması Gereken Besinler
      </h2>
      <p className="mb-2">
        Kolesterolden zengin besinlerin (karaciğer, beyin, böbrek, kelle, paça,
        dil, yürek, dalak gibi sakatatlar; salam, sucuk, sosis, pastırma,
        kavurma, kuyruk yağı, iç yağı, tam yağlı krema, kremanın girmiş olduğu
        pasta, börek vb. pastacılık ürünler) tüketimleri sınırlandırılmalıdır.
      </p>
      <p className="mb-2">
        Kanatlı hayvanlar (tavuk, hindi, ördek, kaz vb.) derisi ayrılarak
        tüketilmelidir.
      </p>
      <p className="mb-2">
        Günlük beslenmede tüketilen her türlü trans yağ kaynağı olabilecek
        besinlerden uzak durulmalıdır. Ambalajlı besinlerde bulunan trans yağ
        asidi miktarına sınır getirilmekle birlikte yağda ve fırında yapılan
        kızartmalar, bazı unlu mamuller, fast-food besinler ile patlamış mısır
        vb. besinler trans yağ asidi içermektedir.
      </p>
      <p className="mb-2">Hazır paketli gıdalar</p>
      <p className="mb-2">Şekerli, gazlı içecekler</p>
      <p className="mb-2">
        Ultra-işlenmiş Besinler (şişelenmiş içecekler, tatlı ve iştah açıcı
        paketlenmiş hazır ürünler, yeniden yapılandırılmış et ürünleri, yarı
        hazır dondurulmuş ürünler vb)
      </p>
      <p className="text-sm text-gray-600">KAYNAK: TÜBER-2022</p>
    </div>
  );
};

export default UzakDurulmasiGerekenBesinler;
