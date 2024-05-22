import styles from "./ViewFormApprovalForm.module.css";

const ViewFormApprovalForm = () => {
  return (
    <div className={styles.viewFormApprovalForm}>
      <div className={styles.container3}>
        <b className={styles.sopepayysApprovalForm}>Approval Form</b>
        <img
          className={styles.keyboardBackspace1}
          alt=""
          src="/keyboard-backspace-1@2x.png"
        />
        <div className={styles.container31}>
          <div className={styles.textbox149}>
            <div className={styles.textfield}>
              <div className={styles.inputText}>Input text</div>
            </div>
            <b className={styles.newNameOf}>New name of animal</b>
          </div>
          <div className={styles.textbox1491}>
            <div className={styles.textfield}>
              <div className={styles.inputText}>Input text</div>
            </div>
            <b className={styles.newNameOf}>Date adopted</b>
          </div>
          <div className={styles.button41}>
            <div className={styles.save}>save</div>
          </div>
          <div className={styles.button411}>
            <div className={styles.cancel}>cancel</div>
          </div>
        </div>
      </div>
      <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
    </div>
  );
};

export default ViewFormApprovalForm;
