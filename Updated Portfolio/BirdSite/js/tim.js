const App = {
  data() {
    return {
      posts: [
        {
            /* Based on rendering lists from LinkedInLearning*/
          id: '123',
          name: 'Breakfast Thief',
          description: 'Hes been eyeing my ham for a while now.',
          likeamount: '72',
          image:
            'https://thumbs.dreamstime.com/b/tricolor-cat-steals-sausage-table-106802684.jpg',
            date: new Date('2023-04-22'),
            liked: false,
        },
        {
          id: '456',
          name: 'Feast',
          description: 'Happy (Late) Thanksgiving!',
          likeamount: '23',
          image:
            'https://thumbs.dreamstime.com/b/cat-knife-fork-cat-knife-fork-near-pile-dry-food-white-background-121799166.jpg',
            date: new Date('2023-04-10'),
            liked: false,
        },
        {
          id: '789',
          name: 'Learning to cook',
          description: 'I didnt think it was possible, but my cat finally learned to cook!',
          likeamount: '41',
          image:
            'https://thumbs.dreamstime.com/z/cat-chef-holds-glass-tray-chicken-nuggets-white-background-cat-cook-tray-chicken-nuggets-120778363.jpg',
            date: new Date('2023-03-11'),
            liked: false,
        },
        {
          id: '101',
          name: 'MY SAUSAGES!',
          description: 'The new cat is being a little rambunctious today.',
          likeamount: '27',
          image:
            'https://thumbs.dreamstime.com/b/grey-cat-steals-sausages-grey-cat-steals-sausages-wooden-table-168461463.jpg',
            date: new Date('2022-02-14'),
            liked: false,
        },
        {
          id: '112',
          name: 'Looks like I got to get more...',
          description: 'I swear I placed it in the oven, how did he get it?',
          likeamount: '120',
          image:
            'https://thumbs.dreamstime.com/b/mischievous-kitty-has-big-piece-bread-zopf-her-mouth-ears-back-crazy-eyes-growling-unhappy-concept-pets-caught-229448176.jpg',
            date: new Date('2021-01-09'),
            liked: false,
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
    removePost(index) {
      this.posts.splice(index, 1);
    },
    likePost(post) {
      post.liked = !post.liked;
    },
  },
 
};

Vue.createApp(App).mount('#app');
