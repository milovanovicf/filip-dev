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
    slug: 'learn-english-bre',
    overview:
      'Online English language learning platform for improving overall language skills for speaking, writing and most importantly understanding.',
    goals:
      'Help Serbo-Croatian speaking people to learn Enlgish faster and easier.',
    thumbnail: new URL(
      `/src/assets/images/learnEnglishBre/Preview.png`,
      import.meta.url
    ),
    platform: 'Desktop',
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
];

export default projectsData;
