import React from "react";
import styles from "./staff.module.css";
import EmployeeCard from "./EmployeeCard";

function Staff() {
  const employees = [
    { name: "ДАНИИЛ", role: "Руководитель техпод", image: "path_to_image" },
    { name: "ЕГОР", role: "Team Lead PHP", image: "path_to_image" },
    {
      name: "ЕКАТЕРИНА",
      role: "PHP Developer / Frontend Developer",
      image: "path_to_image",
    },
    { name: "АЛЕКСАНДР", role: "Руководитель техпод", image: "path_to_image" },
    {
      name: "МАРГО",
      role: "Менеджер по подбору персонала",
      image: "path_to_image",
    },
    { name: "ИРИНА", role: "PHP Developer", image: "path_to_image" },
    { name: "ВЛАДИМИР", role: "Java Developer", image: "path_to_image" },
    { name: "ЕВГЕНИЙ", role: "Генеральный директор", image: "path_to_image" },
  ];

  return (
    <div className={styles.staffContainer}>
      <h1 className={styles.title}>Сотрудники</h1>
      <p className={styles.description}>
        Все наши сотрудники имеют многолетний опыт работы и являются
        высококлассными специалистами. Специалисты с радостью ответят на все
        интересующие вопросы и проконсультируют по оптимальным решениям с учетом
        специфики вашего бизнеса.
      </p>
      <div className={styles.employeeGrid}>
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            name={employee.name}
            role={employee.role}
            image={employee.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Staff;
