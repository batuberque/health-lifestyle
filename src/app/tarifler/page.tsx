import React, { FC } from "react";

const Tarifler: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {/* Brokoli Çorbası Tarifi */}
      <div className="bg-blue-50 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-2">Brokoli Çorbası</h2>
        <p className="text-gray-700 mb-4">İçindekiler:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>1 yemek kaşığı zeytinyağı</li>
          <li>2 diş sarımsak</li>
          <li>1 adet soğan</li>
          <li>1 küçük boy brokoli</li>
          <li>4 bardak su</li>
          <li>1 kutu beyaz fasulye, durulanmış ve süzülmüş</li>
        </ul>
        <p className="text-gray-700 mt-2">Yapılışı:</p>
        <ol className="list-decimal list-inside text-gray-700">
          <li>
            Çorba tenceresinde yağı, sarımsağı, soğanı ve brokoliyi yaklaşık 10
            dakika soteleyin.
          </li>
          <li>
            Suyu ve fasulyeyi ekleyin. Çorbayı el blenderiyle püre haline
            getirin. Tuz ve karabiberle tatlandırın. Kaynatın ve 10 dakika
            pişirin.
          </li>
          <li>
            Limon suyu, yoğurt, taze soğanı, tuz ve karabiberi karıştırın. Sıcak
            çorbanın üzerine gezdirip servis yapın.
          </li>
        </ol>
      </div>

      {/* Nohut Salatası Tarifi */}
      <div className="bg-blue-50 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-2">Nohut Salatası</h2>
        <p className="text-gray-700 mb-4">İçindekiler:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>1 su bardağı pişmiş veya konserve nohut</li>
          <li>1 adet salatalık</li>
          <li>½ yemek kaşığı kıyılmış taze maydanoz</li>
          <li>1 adet domates</li>
          <li>
            3 yemek kaşığı kıyılmış taze dereotu veya ¼ çay kaşığı kurutulmuş
            dereotu
          </li>
          <li>½ yemek kaşığı limon suyu</li>
          <li>1 yemek kaşığı zeytinyağı</li>
        </ul>
        <p className="text-gray-700 mt-2">Yapılışı:</p>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Orta boy bir kapta tüm malzemeleri birleştirin.</li>
          <li>
            Tatların karışmasına izin vermek için birkaç saat buzdolabında
            saklayın.
          </li>
          <li>
            Salatayı marul yaprakları üzerinde veya tam buğdaylı pide ekmeği
            ceplerinde servis edin.
          </li>
          <li>
            Ayrıca nohut ezmesi yapmak için salatayı mutfak robotunda püre
            haline getirebilirsiniz.
          </li>
        </ol>
      </div>

      {/* Fırında Somon Tarifi */}
      <div className="bg-blue-50 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-2">Fırında Somon</h2>
        <p className="text-gray-700 mb-4">İçindekiler:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>2 yemek kaşığı bal</li>
          <li>1 çay kaşığı kurutulmuş kekik</li>
          <li>2 çay kaşığı hardal</li>
          <li>1 çay kaşığı ince rendelenmiş limon kabuğu rendesi</li>
          <li>1 çay kaşığı karabiber</li>
          <li>1 parça somon balığı</li>
        </ul>
        <p className="text-gray-700 mt-2">Yapılışı:</p>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Fırını 180 derecede önceden ısıtın.</li>
          <li>
            Bal, kekik, hardal, limon kabuğu rendesi ve kara biberi küçük bir
            kasede birleştirin. Somonu deri tarafı aşağı bakacak şekilde fırın
            tepsisine yerleştirin. Bal karışımını her filetonun üstünü
            kaplayacak şekilde yayın.
          </li>
          <li>
            20 dakika boyunca veya iç sıcaklık 65 dereceye ulaşıncaya ve et
            opaklaşıp çatalla pul pul oluncaya kadar kapağı açık şekilde
            pişirin.
          </li>
        </ol>
      </div>

      {/* Piyaz Tarifi */}
      <div className="bg-blue-50 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-2">Piyaz</h2>
        <p className="text-gray-700 mb-4">İçindekiler:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>1 su bardağı kuru fasulye (200 g)</li>
          <li>2 adet orta boy mor soğan</li>
          <li>1 kase ayıklanmış maydanoz</li>
          <li>¼ adet limon</li>
          <li>3 yemek kaşığı sirke</li>
          <li>2 çay kaşığı tuz</li>
          <li>2 çay kaşığı sumak</li>
          <li>1 çay kaşığı karabiber</li>
          <li>4 yemek kaşığı zeytinyağı</li>
          <li>1 adet haşlanmış yumurta (arzuya göre)</li>
        </ul>
        <p className="text-gray-700 mt-2">Yapılışı:</p>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Kuru fasulyeleri bir gece önceden suya koyun.</li>
          <li>
            Ertesi gün fasulyenin suyunu süzün, yıkayın ve tencereye alarak
            üzerini iki parmak geçene kadar su koyun ve haşlamaya bırakın. Çok
            yumuşak olup dağılmaması için kontrollü olarak 35-40 dakika pişirin.
          </li>
          <li>
            Haşlanan fasulyeleri süzün, soğuduktan sonra derin bir kaba alın.
            Üzerin ayıklamış olduğunuz maydanoz yapraklarını ekleyin.
          </li>
          <li>
            Mor soğanları ince ince piyazlık, yani yarım ay şeklinde, doğrayın
            ve kaseye alın. Üzerine tuz, limonun suyu ve sirkeyi ilave edin.
          </li>
          <li>
            Son olarak kalan baharatlarını ve zeytinyağını ekleyip güzelce
            karıştırın.
          </li>
          <li>
            Arzuya göre haşlanmış yumurta ile soğuk veya ılık servis edin.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Tarifler;
