const App = {
  data() {
    return {
      posts: [
        {
            /* Based on rendering lists from LinkedInLearning*/
          id: 'Tim1',
          name: 'Tim',
          description: '@Timmothy',
          image:
            'https://thumbs.dreamstime.com/b/tricolor-cat-steals-sausage-table-106802684.jpg',
        },
        {
          id: 'Sam1',
          name: 'Sam',
          description: '@SamMan',
          image:
            'https://archives.bulbagarden.net/media/upload/thumb/8/8e/0137Porygon.png/250px-0137Porygon.png',
        },
        {
          id: 'Joe1',
          name: 'Joe',
          description: '@WhosJoe',
          likeamount: '41',
          image:
            'https://i.pinimg.com/736x/fe/2e/20/fe2e20be452313015a52c01322303fc8.jpg',
        },
      ],
    };
  },
  methods: {
    submitForm() {
      alert('Your comment has been sent.');
    },
    /*Code From Transition Delays slide  https://codepen.io/planetoftheweb/pen/pobegYW?editors=1010*/
    /*Cards fade in when loaded */
    preLoad(pl) {
      pl.style.opacity = 0
    },
    loaded(pl) {
      pl.style.opacity = 1
      pl.style.transition="all .5s 1s ease-in-out"
      pl.style.transitionDelay = pl.dataset.index * .15 +'s'  
    },
  },
};

Vue.createApp(App).mount('#app');
