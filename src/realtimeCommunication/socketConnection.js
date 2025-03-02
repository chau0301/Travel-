import io from "socket.io-client";
import { setReviewInfoInTour } from "../store/review/reviewSlice";

let socket = null;

export const connectWithSocketServer = (user, dispatch) => {
  socket = io(`http://localhost:3002`, {
    // Truyền dữ liệu ng dùng sang backend
    auth: { user },
  });

  socket.on("connect", () => {
    console.log("successful connected with socket.io server");
    // console.log(socket.id);
  });

  socket.on("sendReviewToClient", (review) => {
    console.log(review);
    dispatch(setReviewInfoInTour(review));
  });
};

export const createReview = (data) => {
  socket.emit("create-comment", data);
};

export const joinPlace = (data) => {
  socket.emit("join-place", data);
};
