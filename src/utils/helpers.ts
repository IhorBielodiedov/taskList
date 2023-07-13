import React from "react";
//Функция генерации компонентов на основе массива данных
export const generateComponents = <T>(
  data: T[],
  component: React.ComponentType<{ data: T }>
) => {
  return data.map((item: T, index: number) => {
    return React.createElement(component, { data: item, key: index });
  });
};
