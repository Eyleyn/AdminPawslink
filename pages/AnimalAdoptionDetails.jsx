import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import cat_image from "../assets/image@2x.png";
import qr_code from "../assets/pen.png";
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const AdoptionData = [
  {
    name: "Bingo",
    sterilization: 'SPAYED',
    age: "3",
    vaccinationDate: "08/01/2021",
    dewormDate: "12/11/2022",
    status: "ON CAMPUS",
    neuterspayDate: "30/01/2023"
  },
];
const AnimalAdoptionDetails = () => {
  return(
    <div style={styles.mainContainer}>
      <div style={styles.mainContentContainer}>
          <div style={styles.SecondMContainer}>
            <img style={styles.topLogoPawslink} src = {top_logo} />
            <div style={styles.ContentContainer}>
              <div style = {styles.buttonContainer}>
                <button style={styles.BackButton} >
                  <img style={styles.keyboardBackspace1} src = {back_button}/>
                </button>
                <b style={styles.CatTextStyle}>
                  Adoption Details
                </b>
              </div>
              <div style={styles.DetailsContainer}>

              </div>
            </div>
          </div>
      </div>
    </div>                  
  )
}

const styles = {
  mainContainer:{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems : 'center',
      justifyContent: 'center',
      backgroundColor: Color.colorWhitesmoke,
  },
  mainContentContainer:{
      width: '75vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
  },
  topLogoPawslink: {
      width: '200px',
      height: '80px',
      objectFit: 'cover',
      marginLeft: '20px',
  },
  SecondMContainer: {
      width: '75vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: Color.colorWhite,
      flexDirection: 'column',
  },
  ContentContainer:{
      flexDirection: 'column',
      height: '100vh',
      width: '91%',
      marginRight: '150px',
      marginLeft: '50px',
      backgroundColor: Color.colorWhite,
      flex: 1,
      alignItems: 'center',
  },
  CatTextStyle: {
      fontSize: '30px',
      color: Color.colorPalevioletred,
      marginLeft: '5px',
      display: 'inline-block',
      lineHeight: '90px',
      whiteSpace: 'nowrap',
  },

  keyboardBackspace1: {
      width: '44px',
      height: '34px',
      borderColor: Color.colorWhite,
  },
  BackButton: {
      cursor: 'pointer',
      border: '0',
      borderColor: Color.colorWhite,
      width: '54px',
      height: '24px',
      backgroundColor: Color.colorWhite,
      objectFit: 'cover',
  },
  buttonContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      width:  '100px',
      height: '30px',
      backgroundColor: Color.colorWhite,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: '20px',
      marginLeft: '20px',
      borderColor: Color.colorWhite,
  },
  DetailsContainer: {
    width: '80%',
    height: '100%',
    backgroundColor: 'green',
    marginLeft: '50px'
  }
}

export default AnimalAdoptionDetails
