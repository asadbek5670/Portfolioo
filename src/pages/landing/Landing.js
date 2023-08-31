import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/suit.png";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";
import About from "../about/About";
const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "100%",
      marginRight: "300px"
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "var(--text-color)",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <>
      <section className="landing container" style={styles.landing}>
        <Draw />
        <div className="textContainer" style={styles.textContainer}>
          <motion.h1
            className="name"
            style={styles.name}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, type: "spring" }}
          >
            {name}
          </motion.h1>

          <motion.div
            className="description"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <Typewriter
              className="description"
              options={{
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter.changeDelay(50).typeString("WEB DEVELOPER").start();
              }}
            />
          </motion.div>
        </div>
        <div className="image-container">
          <motion.img
            className="landingImage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            style={styles.landingImage}
            src={landingImage}
            alt="PO'LATOV ASADBEK"
          />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
          <SocialIcons />
        </motion.div>
      </section>
      <About />
    </>
  );
};

export default Landing;
