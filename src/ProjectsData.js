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
    features: [
      {
        id: 1,
        text: 'After a quick sign up you will be redirected to the home page where you can select a course, track progress of your courses, chat with friends and more!',
        image: new URL(
          `/src/assets/images/learnEnglishBre/MainPage.png`,
          import.meta.url
        ),
      },
      {
        id: 2,
        text: 'Variety of different courses to choose from based on your requirements and skill level.',
        image: new URL(
          `/src/assets/images/learnEnglishBre/feature1.png`,
          import.meta.url
        ),
      },
      {
        id: 3,
        text: 'Our Libary contains a large amount of extra content like videos, dictionary and more! ',
        image: new URL(
          `/src/assets/images/learnEnglishBre/feature2.png`,
          import.meta.url
        ),
      },
      {
        id: 4,
        text: 'Grab a friend a challenge them in our daily chalanges and see who has the better knowlegde about certain topics.',
        image: new URL(
          `/src/assets/images/learnEnglishBre/feature3.png`,
          import.meta.url
        ),
      },
    ],
    content: {
      mainImage: new URL(
        `/src/assets/images/learnEnglishBre/MainImage.png`,
        import.meta.url
      ),
      lastImage: new URL(
        `/src/assets/images/learnEnglishBre/signup.png`,
        import.meta.url
      ),

      lastImageMobile: new URL(
        `/src/assets/images/learnEnglishBre/signupMobile.png`,
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
