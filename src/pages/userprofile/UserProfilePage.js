import React from "react";
import Header from "../home/header/Header";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import PosterUser from "./components/PosterUser";
import ModalUser from "../../components/modal/ModalUser.js";
import FormInput from "./components/FormInput.js"
import {userInputs} from "./inputdata.js"

const UserProfilePage = () => {
  return (
    <>
      <div className="bg-[#111]">
        <Header></Header>
        <PosterUser></PosterUser>
        <div className="main px-[9%] py-[30px] flex">
          <ContentLeft></ContentLeft>
          <ContentRight></ContentRight>
        </div>
      </div>
      <ModalUser>
        <FormInput inputs={userInputs}></FormInput>
      </ModalUser>
    </>
  );
};

export default UserProfilePage;
