export interface Product {
    name: string;
    author: string;
    category_id: number;
    author_id:number;
    id: number;
    description: string;
    rating: string;
    price: string;
    image: string;
    url: string;
}
export const allProducts: Product[] = [
    {   name: 'Staying Ahead',
        author: 'Kiera Cass',
        category_id: 1,
        author_id:1001,
        id: 112,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319574/lw/cover_2.jpeg?access_key=d61da49857d86ebde4a0ec7d476e8f4a',
        url: 'https://www.blurb.com/b/10025656-staying-ahead'
    },
    {   name: 'Time Tracker',
        author: 'Kiera Cass',
        category_id: 1,
         author_id:1001,
        id: 113,
       description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15284106/md/cover_2.jpeg?access_key=cbcc61711e0052836213241f879619bb',
        url: 'https://www.blurb.com/b/9993817-time-tracker'
    },
    {   name: 'Hiding Behind the Juniper',
      author: 'Kiera Cass',
        category_id: 1,
         author_id:1001,
        id: 114,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15318158/md/cover_2.jpeg?access_key=980d3fc9f7b40f4f60f332cc5b8fba64',
        url: 'https://www.blurb.com/b/10024361-hiding-behind-the-juniper'
    },
    {   name: 'The Mirror Is Me',
        author: 'Kiera Cass',
        category_id: 1,
         author_id:1001,
        id: 115,
        description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15315485/md/cover_2.jpeg?access_key=0e250776d201e9b8f2ff19ee584ff4f6',
        url: 'https://www.blurb.com/b/10021914-the-mirror-is-me'
    },
    {   name: 'Lament for Our Sister the Earth',
        category_id: 1,
         author_id:1001,
        id: 116,
      author: 'Kiera Cass',
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319683/md/cover_2.jpeg?access_key=0adb6e5fab0b35f66883ccba3258acea',
        url: 'https://www.blurb.com/b/10025759-lament-for-our-sister-the-earth'
    },
    {   name: 'Black Coffee',
      author: 'Gillian Flynn',
        category_id: 3,
         author_id:1002,
        id: 117,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322693/md/cover_2.jpeg?access_key=edc5a7d5e4f9f27787a0e2ce995ae8a6',
        url: 'https://www.blurb.com/b/10028456-black-coffee'
    },
    {   name: 'Missed Me',
      author: 'Gillian Flynn',
        category_id: 2,
         author_id:1002,
        id: 118,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15314046/md/cover_2.jpeg?access_key=a967c49063e36a0f37d5c1515624dc7a',
        url: 'https://www.blurb.com/b/10020669-missed-me'
    },
    {   name: 'Candy apple red rum punch',
      author: 'Gillian Flynn',
        category_id: 3,
         author_id:1002,
        id: 119,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://globalassets.starbucks.com/assets/7313a28bd5174ef5bd68f6c1d159797a.jpg?impolicy=1by1_wide_1242',
        url: 'https://bookshow.blurb.com/bookshow/cache/P15304036/md/cover_2.jpeg?access_key=a8071d5ebfd360a2ec4f297b4f0d7466'
    },
  {name: 'Blue skies and butterflies',
    author: 'Gillian Flynn',
        category_id: 6,
         author_id:1002,
        id: 120,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322058/lw/cover_2.jpeg?access_key=be836081f25eda4afa1a467fcd2fbde4',
        url: 'https://www.blurb.com/b/10027874-blue-skies-and-butterflies'
    },
    {   name: 'Staying Ahead',
        author: 'Lora Shroff',
        category_id: 4,
         author_id:1003,
        id: 121,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319574/lw/cover_2.jpeg?access_key=d61da49857d86ebde4a0ec7d476e8f4a',
        url: 'https://www.blurb.com/b/10025656-staying-ahead'
    },
    {   name: 'Time Tracker',
        author: 'Lora Shroff',
        category_id: 3,
         author_id:1003,
        id: 122,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15284106/md/cover_2.jpeg?access_key=cbcc61711e0052836213241f879619bb',
        url: 'https://www.blurb.com/b/9993817-time-tracker'
    },
    {   name: 'Hiding Behind the Juniper',
        author: 'John Boyne',
        category_id: 6,
         author_id:1004,
        id: 123,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15318158/md/cover_2.jpeg?access_key=980d3fc9f7b40f4f60f332cc5b8fba64',
        url: 'https://www.blurb.com/b/10024361-hiding-behind-the-juniper'
    },
    {   name: 'The Mirror Is Me',
        author: 'John Boyne',
        category_id: 5,
         author_id:1004,
        id: 124,
        description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          // tslint:disable-next-line:max-line-length
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15315485/md/cover_2.jpeg?access_key=0e250776d201e9b8f2ff19ee584ff4f6',
        url: 'https://www.blurb.com/b/10021914-the-mirror-is-me'
    },
    {   name: 'Lament for Our Earth',
        author: 'John Boyne',
        category_id: 4,
         author_id:1004,
        id: 125,
        description: '24 sonnets on climate change in the Pushkin form accompanied by artwork.' +
      'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319683/md/cover_2.jpeg?access_key=0adb6e5fab0b35f66883ccba3258acea',
        url: 'https://www.blurb.com/b/10025759-lament-for-our-sister-the-earth'
    },
    {   name: 'Black Coffee',
        author: 'John Boyne',
        category_id: 6,
         author_id:1004,
        id: 126,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322693/md/cover_2.jpeg?access_key=edc5a7d5e4f9f27787a0e2ce995ae8a6',
        url: 'https://www.blurb.com/b/10028456-black-coffee'
    },
    {   name: 'Missed Me',
        author: 'John Boyne',
        category_id: 5,
         author_id:1004,
        id: 127,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15314046/md/cover_2.jpeg?access_key=a967c49063e36a0f37d5c1515624dc7a',
        url: 'https://www.blurb.com/b/10020669-missed-me'
    },
    {   name: 'Candy apple red rum punch',
        author: 'Alan Brennert',
        category_id: 6,
         author_id:1005,
        id: 128,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
       rating: '4.9/5',
        price: '11.7',
        image: 'https://globalassets.starbucks.com/assets/7313a28bd5174ef5bd68f6c1d159797a.jpg?impolicy=1by1_wide_1242',
        url: 'https://bookshow.blurb.com/bookshow/cache/P15304036/md/cover_2.jpeg?access_key=a8071d5ebfd360a2ec4f297b4f0d7466'
    },
  {     name: 'Blue skies and butterflies',
      author: 'Alan Brennert',
        category_id: 4,
         author_id:1005,
        id: 129,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322058/lw/cover_2.jpeg?access_key=be836081f25eda4afa1a467fcd2fbde4',
        url: 'https://www.blurb.com/b/10027874-blue-skies-and-butterflies'
    },
    {   name: 'Staying Ahead',
        author: 'Alan Brennert',
        category_id: 1,
         author_id:1005,
        id: 130,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319574/lw/cover_2.jpeg?access_key=d61da49857d86ebde4a0ec7d476e8f4a',
        url: 'https://www.blurb.com/b/10025656-staying-ahead'
    },
    {   name: 'Time Tracker',
        author: 'Alan Brennert',
        category_id: 1,
         author_id:1005,
        id: 131,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15284106/md/cover_2.jpeg?access_key=cbcc61711e0052836213241f879619bb',
        url: 'https://www.blurb.com/b/9993817-time-tracker'
    },
    {   name: 'Hiding Behind the Juniper',
        author: 'Martin Amis',
        category_id: 2,
         author_id:1006,
        id: 132,
        description: 'Hiding Behind the Juniper is a book of poetry filled with emotion and beauty' +
      'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
       rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15318158/md/cover_2.jpeg?access_key=980d3fc9f7b40f4f60f332cc5b8fba64',
        url: 'https://www.blurb.com/b/10024361-hiding-behind-the-juniper'
    },
    {   name: 'The Mirror Is Me',
        author: 'Martin Amis',
        category_id: 4,
         author_id:1006,
        id: 133,
        description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15315485/md/cover_2.jpeg?access_key=0e250776d201e9b8f2ff19ee584ff4f6',
        url: 'https://www.blurb.com/b/10021914-the-mirror-is-me'
    },
    {   name: 'Lament for Our Sister the Earth',
      author: 'Martin Amis',
        category_id: 2,
         author_id:1006,
        id: 134,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319683/md/cover_2.jpeg?access_key=0adb6e5fab0b35f66883ccba3258acea',
        url: 'https://www.blurb.com/b/10025759-lament-for-our-sister-the-earth'
    },
    {   name: 'Black Coffee',
        author: 'Martin Amis',
        category_id: 2,
         author_id:1006,
        id: 135,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322693/md/cover_2.jpeg?access_key=edc5a7d5e4f9f27787a0e2ce995ae8a6',
        url: 'https://www.blurb.com/b/10028456-black-coffee'
    },
    {   name: 'Missed Me',
        author: 'Martin Amis',
        category_id: 3,
         author_id:1006,
        id: 136,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15314046/md/cover_2.jpeg?access_key=a967c49063e36a0f37d5c1515624dc7a',
        url: 'https://www.blurb.com/b/10020669-missed-me'
    },
    {   name: 'Candy apple red rum punch',
        author: 'Martin Amis',
        category_id: 4,
         author_id:1006,
        id: 137,
       description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',

        rating: '4.9/5',
        price: '11.7',
        image: 'https://globalassets.starbucks.com/assets/7313a28bd5174ef5bd68f6c1d159797a.jpg?impolicy=1by1_wide_1242',
        url: 'https://bookshow.blurb.com/bookshow/cache/P15304036/md/cover_2.jpeg?access_key=a8071d5ebfd360a2ec4f297b4f0d7466'
    },
  {name: 'Blue skies and butterflies',
      author: 'Paulo Coelho',
        category_id: 2,
         author_id:1007,
        id: 138,
     description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',

        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322058/lw/cover_2.jpeg?access_key=be836081f25eda4afa1a467fcd2fbde4',
        url: 'https://www.blurb.com/b/10027874-blue-skies-and-butterflies'
    },
    {   name: 'Staying Ahead',
        author: 'Paulo Coelho',
        category_id: 1,
         author_id:1007,
        id: 140,
       description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',

        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319574/lw/cover_2.jpeg?access_key=d61da49857d86ebde4a0ec7d476e8f4a',
        url: 'https://www.blurb.com/b/10025656-staying-ahead'
    },
    {   name: 'Time Tracker',
        author: 'Paulo Coelho',
        category_id: 5,
         author_id:1007,
        id: 141,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15284106/md/cover_2.jpeg?access_key=cbcc61711e0052836213241f879619bb',
        url: 'https://www.blurb.com/b/9993817-time-tracker'
    },
    {   name: 'Hiding Behind the Juniper',
        author: 'Kate Christensen',
        category_id: 4,
         author_id:1008,
        id: 142,
         description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15318158/md/cover_2.jpeg?access_key=980d3fc9f7b40f4f60f332cc5b8fba64',
        url: 'https://www.blurb.com/b/10024361-hiding-behind-the-juniper'
    },
    {   name: 'The Mirror Is Me',
        author: 'Kate Christensen',
        category_id: 3,
         author_id:1008,
        id: 143,
        description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15315485/md/cover_2.jpeg?access_key=0e250776d201e9b8f2ff19ee584ff4f6',
        url: 'https://www.blurb.com/b/10021914-the-mirror-is-me'
    },
    {   name: 'Lament for Our Sister the Earth',
        author: 'Sandra Dallas',
        category_id: 5,
         author_id:1009,
        id: 144,
        description: '24 sonnets on climate change in the Pushkin form accompanied by artwork.' +
      'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
       rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319683/md/cover_2.jpeg?access_key=0adb6e5fab0b35f66883ccba3258acea',
        url: 'https://www.blurb.com/b/10025759-lament-for-our-sister-the-earth'
    },
    {   name: 'Black Coffee',
        author: 'Sandra Dallas',
        category_id: 4,
         author_id:1009,
        id: 145,
        description: 'Black Coffee is a real, raw, and uncut narration of the life that many of us have faced.'+
           'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. '+
           'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322693/md/cover_2.jpeg?access_key=edc5a7d5e4f9f27787a0e2ce995ae8a6',
        url: 'https://www.blurb.com/b/10028456-black-coffee'
    },
    {   name: 'Missed Me',
        author: 'Sandra Dallas',
        category_id: 6,
         author_id:1009,
        id: 146,
        description: 'Missed Me is a book about a girl who has been killed, reliving her life through flashbacks of the people who visit her grave. Throughout the book events are revealed and relationships are explored, including her own relationship with her mental health. It is only when her killer visits her grave that the true extent of her mental health and the reality ' +
          'of her death unfolds.' + 'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. '+
           'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15314046/md/cover_2.jpeg?access_key=a967c49063e36a0f37d5c1515624dc7a',
        url: 'https://www.blurb.com/b/10020669-missed-me'
    },
    {   name: 'Candy apple red rum punch',
        author: 'Robby Doyle',
        category_id: 2,
         author_id:1010,
        id: 147,
        description: 'a young man spirals into madness when he takes off for his first year in college.' +
      'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. '+
           'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://globalassets.starbucks.com/assets/7313a28bd5174ef5bd68f6c1d159797a.jpg?impolicy=1by1_wide_1242',
        url: 'https://bookshow.blurb.com/bookshow/cache/P15304036/md/cover_2.jpeg?access_key=a8071d5ebfd360a2ec4f297b4f0d7466'
    },
  {   name: 'The Mirror Is Me',
      author: 'Robby Doyle',
        category_id: 5,
         author_id:1010,
        id: 148,
        description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15315485/md/cover_2.jpeg?access_key=0e250776d201e9b8f2ff19ee584ff4f6',
        url: 'https://www.blurb.com/b/10021914-the-mirror-is-me'
    },
    {   name: 'Lament for Our Sister the Earth',
      author: 'Robby Doyle',
        category_id: 5,
         author_id:1010,
        id: 149,
        description: '24 sonnets on climate change in the Pushkin form accompanied by artwork.' +
      'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. '+
           'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319683/md/cover_2.jpeg?access_key=0adb6e5fab0b35f66883ccba3258acea',
        url: 'https://www.blurb.com/b/10025759-lament-for-our-sister-the-earth'
    },
    {   name: 'Black Coffee',
        author: 'Robby Doyle',
        category_id: 5,
         author_id:1010,
        id: 150,
        description: 'Black Coffee is a real, raw, and uncut narration of the life that many of us have faced.' +
      'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. '+
           'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322693/md/cover_2.jpeg?access_key=edc5a7d5e4f9f27787a0e2ce995ae8a6',
        url: 'https://www.blurb.com/b/10028456-black-coffee'
    },
    {   name: 'Missed Me',
        author: 'Louise Erdrich',
        category_id: 3,
         author_id:1011,
        id: 151,
      description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          // tslint:disable-next-line:max-line-length
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15314046/md/cover_2.jpeg?access_key=a967c49063e36a0f37d5c1515624dc7a',
        url: 'https://www.blurb.com/b/10020669-missed-me'
    },
    {   name: 'candy apple red rum punch',
        author: 'Louise Erdrich',
        category_id: 5,
         author_id:1011,
        id: 152,
      description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          // tslint:disable-next-line:max-line-length
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://globalassets.starbucks.com/assets/7313a28bd5174ef5bd68f6c1d159797a.jpg?impolicy=1by1_wide_1242',
        url: 'https://bookshow.blurb.com/bookshow/cache/P15304036/md/cover_2.jpeg?access_key=a8071d5ebfd360a2ec4f297b4f0d7466'
    },
  {   name: 'blue skies and butterflies',
      author: 'Louise Erdrich',
        category_id: 6,
         author_id:1011,
        id: 153,
        description: 'A journal for the anxious hearted. A place to ' +
          'release your thoughts and worries. With calming nature drawings to color.' +
          '\'It has laid gently upon my heart. It has shown me just how human my mother really was. \' +\n' +
          '          \'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. \' +\n' +
          '          \'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. \'',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15322058/lw/cover_2.jpeg?access_key=be836081f25eda4afa1a467fcd2fbde4',
        url: 'https://www.blurb.com/b/10027874-blue-skies-and-butterflies'
    },
   {   name: 'The Mirror Is Me',
      author: 'Louise Erdrich',
        category_id: 6,
         author_id:1011,
        id: 154,
       // tslint:disable-next-line:max-line-length
        description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          // tslint:disable-next-line:max-line-length
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15315485/md/cover_2.jpeg?access_key=0e250776d201e9b8f2ff19ee584ff4f6',
        url: 'https://www.blurb.com/b/10021914-the-mirror-is-me'
    },
    {   name: 'Lament for Our Sister the Earth',
        author: 'Dave Eggers',
        category_id: 6,
         author_id:1012,
        id: 155,
        description: '24 sonnets on climate change in the Pushkin form accompanied by artwork.' +
      'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
        rating: '4.9/5',
        price: '11.7',
        image: 'https://bookshow.blurb.com/bookshow/cache/P15319683/md/cover_2.jpeg?access_key=0adb6e5fab0b35f66883ccba3258acea',
        url: 'https://www.blurb.com/b/10025759-lament-for-our-sister-the-earth'
    },
  {
    name: 'A Hawaiian Honeycreeper - Palila',
    author: 'Dave Eggers',
    category_id: 2,
    author_id:1012,
    id: 156,
    description: 'A bilingual non-fiction book written in both English and Hawaiian on a Hawaiian Honeycreeper – the Palila. Illustrations completed by children of Hawaii.' +
    'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
    rating: '4.9/5',
        price: '11.7',
    image: 'https://bookshow.blurb.com/bookshow/cache/P15308656/md/cover_2.jpeg?access_key=a6fb070c42e1d1ec992320824d33dd5b' ,
    url: 'https://www.blurb.com/b/10015843-a-hawaiian-honeycreeper-palila'
  },
  {
    name: 'Misère et Pauvreté',
    author: 'Dave Eggers',
    category_id: 2,
    author_id:1012,
    id: 157,
    // tslint:disable-next-line:max-line-length
    description: 'A bilingual non-fiction book written in both English and Hawaiian on a Hawaiian Honeycreeper – the Palila. Illustrations completed by children of Hawaii.' +
    'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
    rating: '4.9/5',
        price: '11.7',
    image: 'https://bookshow.blurb.com/bookshow/cache/P15311853/md/cover_2.jpeg?access_key=bb53da8f6507e29847d337d0476e43dc' ,
    url: 'https://www.blurb.com/b/10018727-mis-re-et-pauvret'
  },
  {
    name: 'Kopfgeburt',
    author: 'Dave Eggers',
    category_id: 3,
    author_id:1012,
    id: 158,
    description: 'A bilingual non-fiction book written in both English and Hawaiian on a Hawaiian Honeycreeper – the Palila. Illustrations completed by children of Hawaii.+' +
      '\'It has laid gently upon my heart. It has shown me just how human my mother really was. \' +\n' +
      '          \'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. \' +\n' +
      '          \'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. \'' ,
    rating: '4.9/5',
        price: '11.7',
    image: 'https://bookshow.blurb.com/bookshow/cache/P15308688/md/cover_2.jpeg?access_key=ebbe66a8853980752741bc417e950212' ,
    url: 'https://www.blurb.com/b/10015866-kopfgeburt'
  },
  {
    name: 'Misère et Pauvreté',
    author: 'Dave Eggers',
    category_id: 3,
    author_id:1012,
    id: 159,
    description: 'A bilingual non-fiction book written in both English and Hawaiian on a Hawaiian Honeycreeper – the Palila. Illustrations completed by children of Hawaii.' +
    'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ',
    rating: '4.9/5',
        price: '11.7',
    image: 'https://bookshow.blurb.com/bookshow/cache/P15311853/md/cover_2.jpeg?access_key=bb53da8f6507e29847d337d0476e43dc' ,
    url: 'https://www.blurb.com/b/10018727-mis-re-et-pauvret'
  },
  {
    name: 'Human Resources Professional CHRP',
    author: 'Dave Eggers',
    category_id: 4,
    author_id:1012,
    id: 159,
    // tslint:disable-next-line:max-line-length
    description: 'This book The mirror is me truly has been enlightening. ' +
          'It has laid gently upon my heart. It has shown me just how human my mother really was. ' +
          'I always seen her as a wonder woman, thinking my mom can do anything, she can fix everything. ' +
          'I was so wrong.I followed her led thinking this is how it is to be, i became wonder woman. ' +
          // tslint:disable-next-line:max-line-length
          'I now see how badly we crashed and burned yet, we evolved into and to the exact place we were meant to be found in.( Sigh), i can now gently move ' +
          'on and be kind to myself no matter what life wants to throw at me. ',

   rating: '4.9/5',
    price: '11.7',
    image: 'https://bookshow.blurb.com/bookshow/cache/P15307297/md/cover_2.jpeg?access_key=6190b6714e92996603c8c2647db7dac8' ,
    url: 'https://www.blurb.com/b/10014622-certified-human-resources-professional-chrp-body'
  },

];
