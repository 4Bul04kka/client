import React from "react";
import styles from "./ourAwards.module.css";
import AwardCard from "./AwardCard";

function OurAwards() {
  const awards = [
    { title: "Lunaris Generations Innovation Award", image: "path_to_image" },
    {
      title: "Обновленный сайт сети магазинов 'Спортмаг'",
      image: "path_to_image",
    },
    { title: "Сайт КБ 'Энергопромбанк'", image: "path_to_image" },
    { title: "Интернет-магазин 'Спорт есть'", image: "path_to_image" },
    { title: "Группа компаний 'Сант-Плюс'", image: "path_to_image" },
    {
      title: "Сайт Екатеринбургского муниципального банка",
      image: "path_to_image",
    },
    { title: "Рекламное агентство 'Fine Design'", image: "path_to_image" },
    { title: "Сайт компании 'Транснефтьпрогресс'", image: "path_to_image" },
  ];

  return (
    <div className={styles.awardsContainer}>
      <h1 className={styles.title}>Наши Награды</h1>
      <p className={styles.description}>
        Компания «Lunaris» участвует и побеждает во всероссийских
        интернет-конкурсах, что говорит о признании качества и оригинальности
        веб-решений компании на профессиональном уровне.
      </p>
      <div className={styles.awardsGrid}>
        {awards.map((award, index) => (
          <AwardCard key={index} title={award.title} image={award.image} />
        ))}
      </div>
    </div>
  );
}

export default OurAwards;
