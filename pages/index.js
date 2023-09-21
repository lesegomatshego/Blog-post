import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';


 const DUMMY_POSTS =[
    { slug: 'getting-started-with-next.js1',
     title: 'Getting-started-with-next.js',
      date: '2023-09-21=', 
      excerpt: 'Next.js is a react framework for production', 
      image: 'getting-started-next.js.png'
    },

    { slug: 'getting-started-with-next.js2',
    title: 'Getting-started-with-next.js',
     date: '2023-09-21=', 
     excerpt: 'Next.js is a react framework for production', 
     image: 'getting-started-next.js.png'
   },

   { slug: 'getting-started-with-next.js3',
   title: 'Getting-started-with-next.js',
    date: '2023-09-21=', 
    excerpt: 'Next.js is a react framework for production', 
    image: 'getting-started-next.js.png'
  },

  { slug: 'getting-started-with-next.js4',
  title: 'Getting-started-with-next.js',
   date: '2023-09-21=', 
   excerpt: 'Next.js is a react framework for production', 
   image: 'getting-started-next.js.png'
 },
 ];
function HomePage() {
    return (
    <Fragment>
          <Hero />
          <FeaturedPosts posts={DUMMY_POSTS}/>
          
    </Fragment>
    );
}


export default HomePage;