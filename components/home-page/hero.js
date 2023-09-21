import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
    return (
    <section className={classes.hero}>
<div className={classes.image}>
<Image src="/images/site/lesego.png" 
alt="An image showing Lesego"
width={300}
height={300}/>
    </div>
<h1>Hi, I'm Lesego</h1>
<p>
    I blog about web development -especially frontend framework like React.

</p>
      </section>
      );
}

export default Hero;