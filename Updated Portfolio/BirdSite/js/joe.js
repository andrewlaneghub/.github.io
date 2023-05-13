const App = {
    data() {
      return {
        posts: [
          {
              /* Based on rendering lists from LinkedInLearning*/
            id: '123',
            name: 'Cool bird',
            description: 'Look at him',
            likeamount: '72',
            image:
              'https://th.bing.com/th/id/R.7f5f791f6c3ebe5b05b3863d72879842?rik=w9PtnOCMPbVjHQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-g9STQqFQ9Ik%2fUScse2IifqI%2fAAAAAAAAA08%2fmh1immEtVZo%2fs1600%2fbluebird.jpg&ehk=44UmxZu2nViF8%2bm3dyZBvrJiQ7p4JrbD3d6f%2b4CghyE%3d&risl=&pid=ImgRaw&r=0',
              date: new Date('2023-04-22'),
              liked: false,
          },
          {
            id: '456',
            name: 'Wish I still had the disc...',
            description: 'Had this as a kid but my brother lost it 10 years ago. The ebay listings go for so much...',
            likeamount: '23',
            image:
              'https://dodo.ac/np/images/thumb/b/ba/PG_Player_Out_of_House.png/240px-PG_Player_Out_of_House.png',
              date: new Date('2023-04-10'),
              liked: false,
          },
          {
            id: '789',
            name: 'LETS GO!',
            description: 'Aw, wait, I cant get the flap to open.',
            likeamount: '41',
            image:
              'https://th.bing.com/th/id/R.cb7c72eefaf0f027886d28ab1da2cbd7?rik=mVVL7OXMYD%2bwnw&pid=ImgRaw&r=0',
              date: new Date('2023-03-11'),
              liked: false,
          },
          {
            id: '101',
            name: 'Who stacks donuts like this?',
            description: 'Now the bottom is all sticky.',
            likeamount: '27',
            image:
              'https://th.bing.com/th/id/OIP.ouyG2NgPxPDWvvCzZMlSQAHaFj?pid=ImgDet&rs=1',
              date: new Date('2022-02-14'),
              liked: false,
          },
          {
            id: '112',
            name: 'AD Buy our insurance!',
            description: 'You will never escape us. Customize and save. Customize and save. Customize and save. Customize and save. Customize and save. Customize and save. Customize and save. Customize and save.',
            likeamount: '120',
            image:
              'https://th.bing.com/th/id/OIP.5_mTxECY2cvcI8DMhr7NWQHaHa?pid=ImgDet&rs=1',
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
  