import ChanelVideo from "../assets/video/bag/chanel_fashion.mp4";
import jennieVideo from "../assets/video/bag/jennie.mp4";
import jennieImg from "../assets/images/background/otherBg/jenni_bg.webp";
import jenniImg from "../assets/images/background/otherBg/jenni_bigBg.webp";
import lillyVideo from "../assets/video/bag/Lily_Rose_CHANEL Bag.mp4";
import lillyImg from "../assets/images/background/otherBg/lilly_bg.webp";

const Fashion = () => {
  return (
    <main>
      <section className="fashion">
        <div className="container">
          <div className="chanelBag">
            <div className="video">
              <video src={ChanelVideo} autoPlay muted controls={false}></video>
            </div>
            <div className="chanelTitle">
              <h2>THE CHANEL 22 BAG</h2>
              <p>
                In the sagacity of cities, the plenitude of open spaces or the
                daydream of a villa, CHANEL ambassadors Whitney Peak, Margaret
                Qualley, Lily-Rose Depp and JENNIE play the game of
                autobiographical fiction. Like a page of a diary written in an
                affable, imaginary ink, they tell their stories, and ours.
                <br />
                On their arm, the CHANEL 22 bag, a genuine ally for daily life
                captured by Inez & Vinoodh through four films.
                <br />
                Music « L’Amour et la Violence » written and composed by
                Sébastien Tellier.
              </p>
              <button>See the Film</button>
            </div>
          </div>
        </div>
      </section>
      <section className="jennieSection">
        <div className="container">
          <div className="nameTitle">
            <h2>Jennie</h2>
          </div>
          <div className="jennieShow">
            <p>
              All around JENNIE, K-pop icon whose fame whips up crowds and stirs
              hearts, everything sparkles. The paparazzi flashes and the lights
              on stage, all reveal the speed and effervescence of her daily
              life.
            </p>
            <button>See the Film</button>
          </div>
          <div className="jennieChanelInfo">
            <video src={jennieVideo} autoPlay muted controls={false}></video>
            <img src={jennieImg} alt="jennieImg" />
          </div>
          <img src={jenniImg} alt="jenniImg" />
        </div>
      </section>
      <section className="lillySection">
        <div className="container">
          <div className="lilyChanelInfo">
            <h2>Lilly</h2>
            <div className="lillyAbout">
              <div className="video">
                <video src={lillyVideo} autoPlay muted controls={false}></video>
                <video src={lillyVideo} autoPlay muted controls={false}></video>
              </div>

              <img src={lillyImg} alt="lillyImg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fashion;
