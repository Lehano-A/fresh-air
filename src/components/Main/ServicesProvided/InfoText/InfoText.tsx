import React from 'react';

function InfoText() {
  return (
    <div className='services-provided__description'>
      <h2 className='services-provided__subtitle'>
        <span>Предоставляемые</span> Услуги
      </h2>
      <p className='services-provided__text'>
        При разработке проекта предложим техническое решение оптимальное по
        соотношению цены и качества, оно идеально впишется в ваш дизайн, а также
        будет учитывать все ваши пожелания.
      </p>

      <p className='services-provided__text'>
        Монтаж выполняется опытными бригадами с соблюдением всех действующих
        технических норм, правил безопасности и строго по согласованному
        проекту.
      </p>

      <p className='services-provided__text'>
        Одинаково эффективно выполняем проектирование и монтаж на объектах любой
        сложности – от небольшой квартиры, до объектов со сложными
        технологическими процессами на основе действующей нормативной
        документации.
      </p>
    </div>
  );
}

export default InfoText;
