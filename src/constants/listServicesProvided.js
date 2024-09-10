import iconCurve from '../images/icons/listServices/systemVentilation/curve.svg';
import iconFan from '../images/icons/listServices/systemVentilation/fan.svg';
import iconExtractor from '../images/icons/listServices/systemVentilation/extractor.svg';
import iconHumidity from '../images/icons/listServices/systemVentilation/humidity.svg';
import iconAirCooler from '../images/icons/listServices/systemVentilation/air-cooler.svg';
import iconVentilation from '../images/icons/listServices/systemVentilation/ventilation.svg';
import contentImageSystemVentilation from '../images/Components/ListServices/system-ventilation.jpg';

import iconAirConditioner from '../images/icons/listServices/conditioning/air-conditioner.svg';
import iconAirFilter from '../images/icons/listServices/conditioning/air-filter.svg';
import iconCeiling from '../images/icons/listServices/conditioning/ceiling.svg';
import iconCondenser from '../images/icons/listServices/conditioning/condenser.svg';
import iconSplit from '../images/icons/listServices/conditioning/split.svg';
import contentImageConditioning from '../images/Components/ListServices/conditioning.jpeg';

const listForSystemVentilation = {
  contentImage: {
    path: contentImageSystemVentilation,
    alt: "Изображение, на котором рабочий монтирует вентиляцию"
  },

  data: [
    {
      text: 'Проектирование систем вентиляции любой сложности',
      icon: iconCurve,
      alt: 'Иконка - построение кривой линии',
    },

    {
      text: 'Монтаж приточной вентиляции',
      icon: iconFan,
      alt: 'Иконка - вентилятор',
    },

    {
      text: 'Монтаж вытяжной вентиляции',
      icon: iconExtractor,
      alt: 'Иконка - печь',
    },

    {
      text: 'Монтаж вентиляции с увлажнением воздуха',
      icon: iconHumidity,
      alt: 'Иконка - капля с потоком воздуха',
    },

    {
      text: 'Монтаж вентиляции с рекуператором',
      icon: iconAirCooler,
      alt: 'Иконка - внешний силовой блок вентиляцинной системы',
    },

    {
      text: `Монтаж вентиляции
      с осушением для бассейна`,
      icon: iconVentilation,
      alt: 'Иконка - вентиляционная решётка',
    },
  ]
};


const listForConditioning = {
  contentImage: {
    path: contentImageConditioning,
    alt: 'Изображение смонтированного блока за окном квартиры в новостройке'
  },
  data: [
    {
      text: 'Проектирование систем кондиционирования',
      icon: iconCurve,
      alt: 'Иконка - построение кривой линии',
    },

    {
      text: 'Монтаж сплит-систем',
      icon: iconAirConditioner,
      alt: 'Иконка - сплит-система',
    },

    {
      text: 'Монтаж мульти сплит-систем',
      icon: iconSplit,
      alt: 'Иконка - мульти сплит-система',
    },

    {
      text: 'Монтаж VRV и VRF систем',
      icon: iconCondenser,
      alt: 'Иконка - внешний блок фанкойла',
    },

    {
      text: 'Монтаж фанкойлов',
      icon: iconCeiling,
      alt: 'Иконка - фанкойл',
    },

    {
      text: `Монтаж настенных, канальных
и кассетных кондиционеров`,
      icon: iconAirFilter,
      alt: 'Иконка - блок воздушного фильтра',
    },

  ]
}



export { listForSystemVentilation, listForConditioning }