const App = {
    data() {
      return {
        posts: [
          {
              /* Based on rendering lists from LinkedInLearning*/
            id: '123',
            name: 'King Dedede looks great in Forgotten Land!',
            description: 'Cant wait to get it when it comes out!',
            likeamount: '72',
            image:
              'https://i.ytimg.com/vi/TMO7LcaltUY/maxresdefault.jpg',
              date: new Date('2023-04-22'),
              liked: false,
          },
          {
            id: '456',
            name: 'WHO',
            description: 'WHO DID THIS??',
            likeamount: '23',
            image:
              'https://i.redd.it/ksbpw7tlbji71.jpg',
              date: new Date('2023-04-10'),
              liked: false,
          },
          {
            id: '789',
            name: 'Lunch',
            description: 'Nothing like some leftover fried chicken to get you through the day!',
            likeamount: '41',
            image:
              'https://www.rd.com/wp-content/uploads/2018/06/shutterstock_520816927.jpg?fit=700,563',
              date: new Date('2023-03-11'),
              liked: false,
          },
          {
            id: '101',
            name: 'Soup',
            description: 'Messed up a little on the spices but it still tastes good.',
            likeamount: '27',
            image:
              'https://static.onecms.io/wp-content/uploads/sites/43/2021/04/13/8814_HomemadeChickenSoup_SoupLovingNicole_LSH-2000.jpg',
              date: new Date('2022-02-14'),
              liked: false,
          },
          
          {
            id: '112',
            name: 'AD Spotify – Want a break from the ads?',
            description: 'Want a break from the ads? If you tap now to watch a short video youll get 30 minutes of ad free music! Yes, really! If you tap now youll get 30 minutes of ad free music! So what are you waiting for? Im still waiting.. Why arent you tapping? Dont you want 30 minutes of ad free music? If you tap now and watch the short video youll get 30 minutes of ad free music! Its that easy! If you want to be free from the ads forever consider buying spotify premium! With spotify premium, you get ad free music, forever! And if you tap below you can get the first 3 months for free!',
            likeamount: '120',
            image:
              'https://th.bing.com/th/id/R.56673c08350e3dabcc1deef71b8e0a1a?rik=%2frvdXQLoXP%2bP1g&pid=ImgRaw&r=0',
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
  