const projectsData = [
  {
    id: 1,
    name: 'Chatter',
<<<<<<< Updated upstream
=======
    slug: 'chatter',
>>>>>>> Stashed changes
    overview:
      'Dating app that provides new and exciting ways to find your significant other.',
    goals:
      'Provide a safest and fastest way for people who are looking for a long term partner to find their perfect match.',
    thumbnail: new URL(
      `/src/assets/images/chatter/Preview.png`,
      import.meta.url
    ),
    platform: 'Mobile',
<<<<<<< Updated upstream
    technologies: 'Figma',
=======
    technologies: ['Figma'],
>>>>>>> Stashed changes
    features: [
      {
        id: 1,
        text: 'After finding a match, start a private conversation with the other person by chatting.',
        image: new URL(
          `/src/assets/images/chatter/feature1.png`,
          import.meta.url
        ),
      },
      {
        id: 2,
        text: 'Make your selection by Interests or see who is today’s Top Pick.',
        image: new URL(
          `/src/assets/images/chatter/feature2.png`,
          import.meta.url
        ),
      },
      {
        id: 3,
        text: 'Adjust the search by filtering depending on age, sex, and distance or randomize it with the Shuffle button',
        image: new URL(
          `/src/assets/images/chatter/feature3.png`,
          import.meta.url
        ),
      },
    ],
    content: {
      mainImage: new URL(
        `/src/assets/images/chatter/MainImage.png`,
        import.meta.url
      ),
      lastImage: new URL(
        `/src/assets/images/chatter/onboarding.png`,
        import.meta.url
      ),
      lastImageMobile: new URL(
        `/src/assets/images/chatter/onboarding-mobile.png`,
        import.meta.url
      ),
      secondary1: new URL(
        `/src/assets/images/chatter/Homepage.png`,
        import.meta.url
      ),
      secondary2: new URL(
        `/src/assets/images/chatter/Profile1.png`,
        import.meta.url
      ),
      secondary3: new URL(
        `/src/assets/images/chatter/TopPicks.png`,
        import.meta.url
      ),
      secondary4: new URL(
        `/src/assets/images/chatter/Interests.png`,
        import.meta.url
      ),
      nextProject: new URL(
        `/src/assets/images/chatter/NextProject.png`,
        import.meta.url
      ),
    },
  },
  {
    id: 2,
    name: 'Learn English Bre!',
<<<<<<< Updated upstream
    description:
      'Online English language learning platform for Serbo-Croatian speaking people.',
=======
    slug: 'learn-english-bre',
    overview:
      'Online English language learning platform for improving overall language skills for speaking, writing and most importantly understanding.',
    goals:
      'Help Serbo-Croatian speaking people to learn Enlgish faster and easier.',
>>>>>>> Stashed changes
    thumbnail: new URL(
      `/src/assets/images/learnEnglishBre/Preview.png`,
      import.meta.url
    ),
<<<<<<< Updated upstream
    client: 'Personal',
    technologies: 'Figma',
=======
    platform: 'Desktop',
    technologies: ['Figma'],
>>>>>>> Stashed changes
    content: {
      mainImage: new URL(
        `/src/assets/images/learnEnglishBre/MainImage.png`,
        import.meta.url
      ),
      secondary1: new URL(
        `/src/assets/images/learnEnglishBre/Secondary1.png`,
        import.meta.url
      ),
      secondary2: new URL(
        `/src/assets/images/chatter/Secondary2.png`,
        import.meta.url
      ),
      secondary3: new URL(
        `/src/assets/images/chatter/Secondary3.png`,
        import.meta.url
      ),
      secondary4: new URL(
        `/src/assets/images/chatter/Secondary4.png`,
        import.meta.url
      ),
      nextProject: new URL(
        `/src/assets/images/learnEnglishBre/NextProject.png`,
        import.meta.url
      ),
    },
  },
];

export default projectsData;
