import React from "react";
import "./splashForm.scss";
import InputFileUpload from "../uploadInput/uploadInput";
import DefaultPhoto from "../../assests/img/download.jpeg";
const form = {};
const SplashForm = () => {
  let testLogo = null;
  return (
    <section className='splash'>
      <form>
        <div className='fileInput'>
          <h3>Upload Logo</h3>
          <img src={testLogo ? testLogo : DefaultPhoto} alt='' />
          <InputFileUpload />
        </div>
        <div className='fileInput'>
          <h3>Upload Video</h3>
          <img src={testLogo ? testLogo : DefaultPhoto} alt='' />
          <InputFileUpload />
        </div>
      </form>
    </section>
  );
};

export default SplashForm;
