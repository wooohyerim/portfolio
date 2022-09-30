import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <section id="sec1" className="w-full h-full">
        <div className={styles.background}>
          <Image
            src="/back.jpg"
            alt="back"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="fixed z-10 w-full">
            <ul className="flex justify-around py-3 text-2xl text-white">
              <li>
                <Link href="#sec1">HOME</Link>
              </li>
              <li>
                <Link href="#sec2">ABOUT</Link>
              </li>
              <li>
                <Link href="#sec3">PROJECT</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sec2" className="w-full h-full bg-lime-100">
        <p>ABOUT ME</p>
        <div>
          <div>
            <Image src="/intro.JPG" alt="me" width={500} height={500} />
            <p>
              우혜림 | Woo Hyerim
              <br />
              1994.02.28
            </p>
            <ul>
              <li>#Front-end</li>
              <li>#HTML</li>
              <li>#Styled-Components</li>
              <li>#JavaScript</li>
              <li>#React</li>
              <li>#노력형</li>
              <li>#ISFJ</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sec3" className="w-full h-full bg-yellow-200">
        <p>PROJECT</p>
        <div></div>
      </section>

      <footer className="py-2">
        <p className="text-5xl text-center text-slate-700">[contact]</p>
        <div className="flex justify-between w-2/5 mx-auto my-3">
          <div>
            <Link href="tel:01030953414" title="tel">
              <Image src="/call.jpg" alt="phone" width={100} height={100} />
            </Link>
          </div>
          <div>
            <Link href="mailto:hyerim3414@gmail.com" title="mail">
              <Image src="/email.jpg" alt="mail" width={100} height={100} />
            </Link>
          </div>
          <div>
            <Link href="http://velog.io/@_woo" title="blog">
              <Image src="/blog.jpg" alt="blog" width={100} height={100} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
