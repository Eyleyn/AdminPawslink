import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import styles from "./AddEvent.module.css";
import upload_photo from "../assets/image-38@3x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom


const AddEvent = () => {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleBack = () => {
    navigate("/dashboard"); // Navigate to the login route on logout
  };

  const [imageSrc, setImageSrc] = useState("/image-38@2x.png");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [textfieldDateTimePickerValue, setTextfieldDateTimePickerValue] =
    useState(new Date("2024-05-28"));
  return (
    <LocalizationProvider>
      <div className={styles.addEvent}>
        <img
          className={styles.image23Icon}
          loading="lazy"
          alt=""
          src="/image-23@2x.png"
        />
        <main className={styles.container3Wrapper}>
          <section className={styles.container3}>
            <div className={styles.childContainer}>
              <div className={styles.keyboardBackspace1Wrapper}>
                <img
                  className={styles.keyboardBackspace1}
                  onClick={handleBack}
                  loading="lazy"
                  alt=""
                  src= {back_button}
                />
              </div>
              <p className={styles.addAnEvent}>Add an Event</p>
            </div>
            <div className={styles.container3Container}>
              <div className={styles.container31}>
                <img
                  className={styles.image46Icon}
                  loading="lazy"
                  alt=""
                  src={upload_photo}
                />
                <div className={styles.button19}>
            <label htmlFor="photo-upload" className={styles.chooseAPhoto}>
              Choose a Photo
            </label>
            <input 
              type="file"
              id="photo-upload"
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
            />
            <img
              className={styles.dataUploadIcon}
              alt=""
              src="/data-upload@2x.png"
            />
          </div>
                <div className={styles.frameParent}>
                  <div className={styles.eventNameParent}>
                    <b className={styles.eventName}>Event Name</b>
                    <textarea 
                      className={styles.textfield}
                    />
                      
                  
                  </div>
                  <div className={styles.eventDateParent}>
                  <b className={styles.eventDate}>Date and Time</b>
                  <input type="date" className={styles.textfield1}/>
    
                  </div>



                  

                      {/* <DateTimePicker
                        label="Date and Time"
                        value={textfieldDateTimePickerValue}
                        onChange={(newValue) => {
                          setTextfieldDateTimePickerValue(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "#d2628a",
                            borderTopWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderLeftWidth: 1,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "#d2628a" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "#d2628a",
                            },
                          },
                          "& input::placeholder": {
                            textColor: "#171a1f",
                            fontSize: 14,
                          },
                          input: {
                            color: "#171a1f",
                            fontSize: 14,
                            paddingLeft: 0,
                            textAlign: "left",
                            fontWeight: "400",
                          },
                          "& .MuiInputBase-root": {
                            backgroundColor: "#fff",
                            height: 52,
                            gap: "22px",
                            flexDirection: { flexDirection: "row-reverse" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            name: "Date and Time",
                            size: "medium",
                            fullWidth: false,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                            placeholder: "Date and Time",
                          },
                          openPickerIcon: {
                            component: () => (
                              <img
                                width="16px"
                                height="16px"
                                src="/calendar.svg"
                              />
                            ),
                          },
                        }}
                      /> */}
                    
                  <div className={styles.locationParent}>
                    <b className={styles.location}>Location</b>
                    <textarea
                      className={styles.textfield2}
                    />
                  </div>
                  <div className={styles.parentEventDetails}>
                    <b className={styles.eventDescription}>Event Description</b>
                    <textarea
                      className={styles.textfield3}
                      rows={6}
                      cols={27}
                    />
                  </div>
                  <div className={styles.cancelSaveButtonsWrapper}>
                    <div className={styles.cancelSaveButtons}>
                      <button className={styles.button22}>
                        <div className={styles.cancel}>Cancel</div>
                      </button>
                      <button className={styles.button221}>
                        <div className={styles.save}>Save</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default AddEvent;
