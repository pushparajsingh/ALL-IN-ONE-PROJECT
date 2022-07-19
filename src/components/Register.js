import React from "react";
import { useForm } from "react-hook-form";
import { Register } from "../action/action";
import { useDispatch, useSelector } from "react-redux";
import Registrationnavbar from "../header/Registrationnavbar";
import { ToastContainer, toast } from "react-toastify";
import "./register.css";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Registered() {
  const [radio, setradio] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const notify = (message) => toast(message);
  //  const data = useSelector(state => state.Reducer.dashboard);
  const onSubmit = (data) => {
    function uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    }
    if (radio) {
      const a = JSON.parse(localStorage.getItem("info"));
      const b = a?.filter((item) => item.email == data.email);

      if (b && b?.length > 0) {
        notify("please enter unique email");
      } else {
        var userID = uuid();
        data.token = userID;
        data.Identity = radio;
        dispatch(Register(data));
        notify("now,you have successfully register");
        reset();
      }
    }
  };
  return (
    <div className="bgcolor">
      <Registrationnavbar />
      {/* <div>
        <input
          type="radio"
          value={"Admin"}
          className={"t2"}
          name="n1"
          id="s1"
        />
        <span className={"t2"} id="t3">
          Admin
        </span>
        <input type="radio" value={"User"} className={"t2"} name="n1" id="s2" />
        <span className={"t2"} id="t4">
          User
        </span>
      </div> */}

      <div
        style={{
          border: "2px solid black",
          width: "38%",
          borderRadius: "25px",
          margin: "30px auto 30px auto",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255,0.1)",
        }}
        id="resize"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>
              <h1 style={{ color: "red" }}>Registration Form</h1>
            </legend>
            <input
              {...register("name", { required: true })}
              placeholder="Enter name"
              className="put"
            />
            <br />
            {errors.name && (
              <span
                style={{
                  color: "red",
                  backgroundColor: "white",
                  padding: "3px",
                  borderRadius: "24px",
                  position: "relative",
                  top: "4px",
                }}
              >
                This field is required
              </span>
            )}
            <br />
            <br />
            {/* register your input into the hook by invoking the "register" function */}
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
              })}
              placeholder="Enter Email"
              className="put"
            />
            <br />
            {errors.email && (
              <span
                style={{
                  color: "red",
                  backgroundColor: "white",
                  padding: "3px",
                  borderRadius: "24px",
                  position: "relative",
                  top: "4px",
                }}
              >
                This field is required
              </span>
            )}
            <br />
            <br />
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("password", { required: true })}
              placeholder="Enter Password"
              className="put"
            />
            <br />
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <span
                style={{
                  color: "red",
                  backgroundColor: "white",
                  padding: "3px",
                  borderRadius: "24px",
                  position: "relative",
                  top: "4px",
                }}
              >
                This field is required
              </span>
            )}
            <br />
            <br />
            <input
              {...register("phone", {
                required: true,
                pattern:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              })}
              placeholder="phone"
              className="put"
            />
            <br />
            {errors.phone && (
              <span
                style={{
                  color: "red",
                  backgroundColor: "white",
                  padding: "3px",
                  borderRadius: "24px",
                  margin: "40px",
                  position: "relative",
                  top: "4px",
                }}
              >
                correct phone number field is required
              </span>
            )}
            <br />
            <input
              type="radio"
              name="n2"
              id="name"
              onClick={() => setradio("Admin")}
            />{" "}
            &nbsp;
            <label
              style={{
                color: "white",
                display: "inline-block",
                marginRight: "20px",
              }}
              for="name"
            >
              Admin
            </label>
            <input
              type="radio"
              name="n2"
              id="e"
              onClick={() => setradio("User")}
            />
            &nbsp; &nbsp;
            <label
              style={{ color: "white", display: "inline-block" }}
              for={"e"}
            >
              User
            </label>{" "}
            &nbsp; &nbsp;
            {radio ? (
              ""
            ) : (
              <span style={{ color: "gold" }}>
                <br />
                Field is required
              </span>
            )}
            <br />
            <br />
            <Button variant="contained" color="warning" type="submit">
              Submit
            </Button>
          </fieldset>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
// console.log(data.email);
//something like: "ec0c22fa-f909-48da-92cb-db17ecdb91c5"
// var b = arr
// console.log("arr",b);
