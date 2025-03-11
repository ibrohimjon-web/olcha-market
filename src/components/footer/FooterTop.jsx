import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="footer-top-wrapper">
          <h2>Yangiliklar</h2>
          <div className="news-grid">
            <div className="news-item">
              <img
                src="https://olcha.uz/uploads/312x184/blogs/images/geDqpXRucjyEbv7KGZuKa83bKUrrQQFBoDrimn3T.png"
                alt="News 1"
              />
              <h3>ReTimer 3 - Endi hech kim uyqusizlikdan aziyat chekmaydi!</h3>
              <p>
                ReTimer 3 ko'zoynaklari: uyqusizlikni yengishda innovatsion
                yechim! Zamonaviy texnologiyalar hayotimizga juda ko'p qulaylik
                olib kelmoqda.
              </p>
            </div>
            <div className="news-item">
              <img
                src="https://olcha.uz/uploads/312x184/blogs/images/auCBXkAqFMWHDdJqHKUC7zjyrFEbwvyASrwCemUf.png"
                alt="News 2"
              />
              <h3>2024 yilda noutbukni qanday tanlash mumkin</h3>
              <p>
                Noutbuk tanlash bugungi kunda juda murakkab jarayon bo'lib,
                ko'plab omillarni e'tiborga olishni talab qiladi.
              </p>
            </div>
            <div className="news-item">
              <img
                src="https://olcha.uz/uploads/312x184/blogs/images/9XUOi2mw52nWGwQ7ZRnWROruSxPjkKFT6Nu6jo5B.png"
                alt="News 3"
              />
              <h3>
                Parij 2024: O'zbekiston sportchilari oltin medallarga erishdi
              </h3>
              <p>
                Parij 2024 Olimpiya o'yinlari O'zbekiston sportchilari uchun
                haqiqiy muvaffaqiyat keltirdi!
              </p>
            </div>
            <div className="news-item">
              <img
                src="https://olcha.uz/uploads/312x184/blogs/images/eEhDbNLH39LxBILyIEvmaDOTgrgHJWSoJMorpwkC.gif"
                alt="News 4"
              />
              <h3>
                iPhone 16 taqdimotini kutayotganlar soni ko'pligi ajablanarli
                emas
              </h3>
              <p>
                Apple har yili o'zining yangi smartfon modellari bilan
                hayratlantiradi. 2024 yil qanday yangiliklar olib keladi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
