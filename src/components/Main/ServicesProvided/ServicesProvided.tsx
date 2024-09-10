import React from 'react';
import ListServices from './ListServices/ListServices';

function ServicesProvided() {
  return (
    <section className='services-provided'>
      <div className='services-provided__box-text'>
        <h2 className='services-provided__subtitle'>
          <span>Предоставляемые</span> Услуги
        </h2>
        <p>
          При разработке проекта предложим техническое решение оптимальное по
          соотношению цены и качества, оно идеально впишется в ваш дизайн, а
          также будет учитывать все ваши пожелания.
        </p>

        <p>
          Монтаж выполняется опытными бригадами с соблюдением всех действующих
          технических норм, правил безопасности и строго по согласованному
          проекту.
        </p>

        <p>
          Одинаково эффективно выполняем проектирование и монтаж на объектах
          любой сложности – от небольшой квартиры, до объектов со сложными
          технологическими процессами на основе действующей нормативной
          документации.
        </p>
      </div>

      <ListServices />
    </section>
  );
}

export default ServicesProvided;
