const projectsData = [
  {
    id: 1,
    name: 'Chatter',
    slug: 'chatter',
    overview:
      'Dating app that provides new and exciting ways to find your significant other.',
    goals:
      'Provide a safest and fastest way for people who are looking for a long term partner to find their perfect match.',
    thumbnail: new URL(
      `/src/assets/images/chatter/Preview.png`,
      import.meta.url
    ),
    platform: 'Mobile',
    link: null,
    technologies: ['Figma'],
    overviewImage: new URL(
      `/src/assets/images/chatter/Overview.png`,
      import.meta.url
    ),
    nextProject: new URL(
      `/src/assets/images/chatter/NextProject.png`,
      import.meta.url
    ),
    content: [
      new URL(`/src/assets/images/chatter/Homepage.png`, import.meta.url),
      new URL(`/src/assets/images/chatter/Profile2.png`, import.meta.url),
      new URL(`/src/assets/images/chatter/TopPicks.png`, import.meta.url),
      new URL(`/src/assets/images/chatter/Interests.png`, import.meta.url),
      new URL(`/src/assets/images/chatter/Messages1.png`, import.meta.url),
    ],
    onboarding: new URL(
      `/src/assets/images/chatter/onboarding.png`,
      import.meta.url
    ),
    onboardingMobile: new URL(
      `/src/assets/images/chatter/onboarding-mobile.png`,
      import.meta.url
    ),
    colors: ['#F9ADA0', '#82B591', '#FFF'],
    fonts: ['Lobster', 'Quicksand'],
  },
  {
    id: 2,
    name: 'Learn English Bre!',
    slug: 'learnenglishbre',
    overview:
      'Online English language learning platform for improving overall language skills for speaking, writing and most importantly understanding.',
    goals:
      'Help Serbo-Croatian speaking people to learn Enlgish faster and easier.',
    thumbnail: new URL(
      `/src/assets/images/learnEnglishBre/Preview.png`,
      import.meta.url
    ),
    platform: 'Desktop',
    link: null,
    technologies: ['Figma'],
    mainImage: new URL(
      `/src/assets/images/learnEnglishBre/LandingPage.png`,
      import.meta.url
    ),
    overviewImage: new URL(
      `/src/assets/images/learnEnglishBre/Overview.png`,
      import.meta.url
    ),
    nextProject: new URL(
      `/src/assets/images/learnEnglishBre/NextProject.png`,
      import.meta.url
    ),
    colors: ['#85D09F', '#F55D4D', '#FFF', '#292929'],
    fonts: ['Raleway', 'Rock Salt'],
  },
  {
    id: 3,
    name: 'Steamy Savings',
    slug: 'steamysavings',
    overview:
      'Steamy Savings is all about finding the best prices on digital game downloads for PC',
    goals: 'Easy way to find best deals of your favourite PC game.',
    thumbnail: new URL(
      `/src/assets/images/steamySavings/Preview.png`,
      import.meta.url
    ),
    platform: 'Desktop',
    link: 'https://steamysavings.netlify.app/',
    technologies: ['VueJs', 'Illustrator', 'Photoshop'],
    mainImage: new URL(
      `/src/assets/images/steamySavings/LandingPage.png`,
      import.meta.url
    ),
    overviewImage: new URL(
      `/src/assets/images/steamySavings/Overview1.png`,
      import.meta.url
    ),
    nextProject: new URL(
      `/src/assets/images/steamySavings/NextProject.png`,
      import.meta.url
    ),
    colors: ['#273047', '#161a26', '#292940', '#c5d2f5'],
    fonts: ['TT Supermolot Neue Condensed Regular'],
  },
];

export default projectsData;
