import React from "react";
import Dummy from "./Dummy";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import DeleteModal from "../components/users/Modal/DeleteModal";
import FixedModal from "../components/users/Modal/FixedModal";
import UserSettingForm from "../components/users/UserSettingForm";

const FeedSction = () => {
  const dispatch = useDispatch();
  return (
    <>
      {/* {feeddata.map((user, userid) => { */}
        return (
          <div>
            {/* 유저정보 가져오기 */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  position: "flex",
                  border: "1px solid black",
                  margin: "10px",
                  width: "250px",
                  height: "400px",
                }}
              >
                <div style={{display: "flex" , marginLeft:"60%"}}>
                  <DeleteModal></DeleteModal>
                  <FixedModal></FixedModal>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "40%",
                    border: "1px solid black",
                  }}
                >
                  {db.contentimg}
                </div>
                <div>{db.nickName}님의 00y00m00d TIL</div>
                <div
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    height: "25%",
                  }}
                >
                  content
                </div>
                <button>like</button>
              </div>
            </div>
          </div>
        );
      
    </>
  );
};

export default FeedSction;
