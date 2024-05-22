import { Button } from "@mui/material";
import styles from "./SeeForms.module.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom


const SeeForms = () => {

  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate("/dashboard"); 
  };

  const goToAdoptionForm = () => {
    navigate("/see-adoption-form")
  }

  const goToApprovalForm = () => {
    navigate("/view-form-approval")
  }

  return (
    <div className={styles.seeForms}>
      <div className={styles.container3}>
        <b className={styles.seeForms1}>see forms</b>
        <img
          className={styles.keyboardBackspace1}
          onClick={handleBack}
          alt=""
          src="/keyboard-backspace-1@2x.png"
        />
        <div className={styles.container31}>
          <div className={styles.container96}>
            <img className={styles.image78Icon} alt="" src="/image-78@2x.png" />
            <Button
              className={styles.adoptionForm}
              onClick={goToAdoptionForm}
              disableElevation={true}
              color="secondary"
              size="large"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              adoption form
            </Button>
          </div>
          <div className={styles.container97}>
            <img className={styles.image79Icon} alt="" src="/image-79@2x.png" />
            <Button
              className={styles.adoptionForm}
              disableElevation={true}
              color="secondary"
              size="large"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              approval form
            </Button>
          </div>
        </div>
      </div>
      <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
    </div>
  );
};

export default SeeForms;
