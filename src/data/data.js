export const headerTxt = {
  title: 'Cześć, nazywam się Łukasz',
}

export const heroData = {
  title: 'Zapraszam Cię do obejrzenia moich projektów ',
  img: '/logo.svg',
  description:
    'Jestem Junior Frontend Developerem z podstawami React, mam pewne doświadczenie komercyjne i kilka projektów osobistych...',
}

export const contactData = {
  phone: 'tel:504-654-093',
  email: 'mailto: lmarciszewski1@gmail.com',
  github: 'https://github.com/LukaszMarciszewski1',
  phoneTxt: '504-654-093',
  emailTxt: 'lmarciszewski1@gmail.com',
  githubTxt: 'github',
}

export const projects = [
  {
    index: 1,
    img: '/img/ptvs.webp',
    title: 'Strona internetowa PTVS',
    github: 'https://github.com/LukaszMarciszewski1/PTVS',
    live: 'https://ptvs-app.herokuapp.com/',
    description:
      'Strona internetowa w trakcie budowy, aktualnie umożliwia odtwarzanie filmów oraz logowanie użytkownika.',
    technologies: [
      {
        name: 'React',
      },
      {
        name: 'Material-UI',
      },
      {
        name: 'Node',
      },
      {
        name: 'Express',
      },
      {
        name: 'MongoDB',
      },
    ],
  },
  {
    index: 2,
    img: '/img/kalkulator.webp',
    title: 'Kalkulator druku cyfrowego',
    github: 'https://github.com/LukaszMarciszewski1/PrintingHouse-calculator',
    live: 'https://cennik-druku.netlify.app/',
    description:
      'Aplikacja do obliczania cen bazowych dla produktów poligraficznych z opcją dodawania listy dostawców i wprowadzania notatek.',
    technologies: [
      {
        name: 'HTML',
      },
      {
        name: 'Scss',
      },
      {
        name: 'JavaScript',
      },
    ],
  },
  {
    index: 3,
    img: '/img/RML.webp',
    title: 'Rajdowa Liga Mazowsza RC',
    github: 'https://github.com/LukaszMarciszewski1/RLM-stopwatch',
    live: 'https://rlm-stoper.netlify.app/',
    description:
      'Aplikacja stworzona dla RLM, umożliwia ustawienie odstępu czasu pomiędzy startem zawodników. Istnieje możliwość wczytania listy zawodników z pliku Exela (xlsx).',
    technologies: [
      {
        name: 'HTML',
      },
      {
        name: 'Scss',
      },
      {
        name: 'JavaScript',
      },
    ],
  },
  {
    index: 4,
    img: '/img/olejnik.webp',
    title: 'Strona internetowa Olejnik',
    github: 'https://github.com/LukaszMarciszewski1/Olejnik',
    live: 'http://www.olejnik.com.pl/',
    description: 'Projekt strony internetowej stworzony dla firmy Olejnik.',
    technologies: [
      {
        name: 'HTML',
      },
      {
        name: 'Scss',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'PHP',
      },
    ],
  },
]
