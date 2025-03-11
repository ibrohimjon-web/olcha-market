import "./FooterMiddle.css";

const FooterMiddle = () => {
  return (
    <div className="footer-middle">
      <div className="container">
        <div className="footer-middle-wrapper">
          <div className="footer-section">
            <h2>Olcha marketpleysi - xarid qilish uchun qulay gipermarket</h2>
            <p>
              Har qanday insonning hayoti va qulay sharoitlarini zamonaviy
              texnologiyalarsiz tasavvur qilib bo'lmaydi. Ish va shaxsiy
              savollar - smartfonda, sevimli filmlar, seriallar va
              teleko'rsatuvlar - <a href="#">televizor</a>, tozalash,
              yig'ishtirish - changyutgich, pishirish, tayyorlash - pechka, pech
              va ko'plab kichikroq, ammo undan kam bo'lmagan foydali qurilmalar
              va mahsulotlar.
            </p>
          </div>
          <div className="footer-section">
            <h2>O'zbekistonda texnikalarni qayerdan sotib olish mumkin?</h2>
            <p>
              Mamlakatda elektronika - texnikalarni sotib olish uchun juda ko'p
              do'kon va imkoniyatlar mavjud, ammo assortiment, tanlov, narx,
              buyurtma berishning shartlari mijozga mos kelishi muhimdir.
            </p>
            <a href="#" className="show-all">
              Barchasini ko'rsatish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
