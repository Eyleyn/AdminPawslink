import styles from "./AdoptedDogs.module.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const AdoptedDogs = () => {

  const navigate = useNavigate();

  const backToAdoptedAnimals = () => {
    navigate('/adopted-animals'); // This will navigate to Dashboard when called
  };

  return (

    
    <div className={styles.adoptedDogs}>
      <img
        className={styles.image23Icon}
        loading="lazy"
        alt=""
        src="/image-23@2x.png"
      />
      <main className={styles.container3Wrapper}>
        <section className={styles.container3}>
          <div className={styles.keyboardBackspace1Wrapper}>
            <img
              onClick={backToAdoptedAnimals}
              className={styles.keyboardBackspace1}
              alt=""
              src="/keyboard-backspace-1@2x.png"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.adoptedDogsWrapper}>
              <h1 className={styles.adoptedDogs1}>adopted dogs</h1>
            </div>
            <form className={styles.table3}>
              <div className={styles.frameGroup}>
                <div className={styles.frame} />
                <div className={styles.frameContainer}>
                  <div className={styles.frame1}>
                    <div className={styles.name}>NAME</div>
                  </div>
                  <div className={styles.frame2}>
                    <div className={styles.status}>STATUS</div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frame3}>
                    <input
                      className={styles.sterilization}
                      placeholder="STERILIZATION"
                      type="text"
                    />
                  </div>
                  <div className={styles.frame4}>
                    <div className={styles.age}>AGE</div>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.frame5}>
                    <div className={styles.dewormDate}>DEWORM DATE</div>
                  </div>
                  <div className={styles.frame6}>
                    <div className={styles.vaccination}>{`VACCINATION `}</div>
                  </div>
                </div>
                <div className={styles.frame7} />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frame8}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.frame9}>
                    <button className={styles.frame10}>
                      <div className={styles.alive}>ALIVE</div>
                    </button>
                  </div>
                  <div className={styles.frame11}>
                    <b className={styles.mimi}>Mimi</b>
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.frame12}>
                    <button className={styles.frame13}>
                      <div className={styles.spayed}>SPAYED</div>
                    </button>
                  </div>
                  <div className={styles.frame14}>
                    <div className={styles.div}>3</div>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.frame15}>
                    <div className={styles.div1}>12/11/2022</div>
                  </div>
                  <div className={styles.frame16}>
                    <div className={styles.div2}>08/01/2021</div>
                  </div>
                </div>
                <div className={styles.frame17}>
                  <button className={styles.button83}>
                    <div className={styles.viewWrapper}>
                      <img className={styles.viewIcon} alt="" src="/view.svg" />
                    </div>
                    <div className={styles.view}>view</div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frame18}>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image-1@2x.png"
                  />
                </div>
                <div className={styles.frameParent7}>
                  <div className={styles.frame19}>
                    <b className={styles.molly}>Molly</b>
                  </div>
                  <div className={styles.frame20}>
                    <button className={styles.frame21}>
                      <div className={styles.alive1}>ALIVE</div>
                    </button>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.frame22}>
                    <button className={styles.frame23}>
                      <div className={styles.spayed1}>SPAYED</div>
                    </button>
                  </div>
                  <div className={styles.frame24}>
                    <div className={styles.div3}>1</div>
                  </div>
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.frame25}>
                    <div className={styles.div4}>14/08/2022</div>
                  </div>
                  <div className={styles.frame26}>
                    <div className={styles.div5}>26/08/2020</div>
                  </div>
                </div>
                <div className={styles.frame27}>
                  <button className={styles.button831}>
                    <div className={styles.viewContainer}>
                      <img
                        className={styles.viewIcon1}
                        alt=""
                        src="/view.svg"
                      />
                    </div>
                    <div className={styles.view1}>view</div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.frame28}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
                <div className={styles.frameParent11}>
                  <div className={styles.frame29}>
                    <b className={styles.odette}>Odette</b>
                  </div>
                  <div className={styles.frame30}>
                    <button className={styles.frame31}>
                      <div className={styles.alive2}>ALIVE</div>
                    </button>
                  </div>
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.frame32}>
                    <button className={styles.frame33}>
                      <div className={styles.spayed2}>SPAYED</div>
                    </button>
                  </div>
                  <div className={styles.frame34}>
                    <div className={styles.div6}>2</div>
                  </div>
                </div>
                <div className={styles.frameParent13}>
                  <div className={styles.frame35}>
                    <div className={styles.div7}>28/03/2020</div>
                  </div>
                  <div className={styles.frame36}>
                    <div className={styles.div8}>23/09/2022</div>
                  </div>
                </div>
                <div className={styles.frame37}>
                  <button className={styles.button832}>
                    <div className={styles.viewFrame}>
                      <img
                        className={styles.viewIcon2}
                        alt=""
                        src="/view.svg"
                      />
                    </div>
                    <div className={styles.view2}>view</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdoptedDogs;
