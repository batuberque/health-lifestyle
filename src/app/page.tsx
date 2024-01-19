import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center bg-white-100 p-4 rounded-md shadow-md mr-10 ml-10">
      <h2 className="text-2xl font-bold mb-4">Sağlıklı Beslenme Nedir?</h2>
      <Image
        priority={false}
        src="/saglik.png"
        alt="Sağlıklı Beslenme"
        width={500}
        height={325}
      />
      <p className="text-gray-700 mt-4">
        Beslenme, insanın büyümesi, gelişmesi, sağlıklı ve üretken olarak uzun
        süre yaşaması için gerekli olan besin öğelerini alıp vücudunda
        kullanmasıdır. Bu öğelerden herhangi biri alınmadığında ya da gereğinden
        az ya da çok alındığında büyüme ve gelişmenin engellendiği, sağlığın
        bozulduğu bilimsel olarak ortaya koyulmuştur. Beslenmede amaç; bireyin
        yaşına, cinsiyetine, çalışma ve özel durumuna göre ihtiyacı olan enerji
        ve besin öğelerinin her birinin yeterli miktarlarda sağlanmasıdır.
      </p>
      <p className="text-gray-700 mt-4">
        Sağlıklı yemek tabağında 5 besin grubu yer alır.{" "}
        <strong>
          Hedef her öğünde tabakta yer alan her gruptan bir yiyeceğin seçilerek
          tüketilmesidir.
        </strong>
        Tabağın yanında yer alan suyun da günlük beslenmede önerilen miktarda
        sağlanması ve yine günlük beslenmede zeytinyağının yer alması, aktif
        yaşamın desteklenmesi sağlıklı yaşam biçiminin tamamlayıcısı olarak önem
        taşımaktadır.
      </p>
    </div>
  );
}
