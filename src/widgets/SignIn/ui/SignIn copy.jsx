import React, { useRef } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

import { transformLoginData } from "../../../shared/lib/transformData";
import * as actions from "../../../shared/api/actions_all";

import classes from "./SignIn.module.scss";

const SignIn = ({ dispatchLoggedInUserDataFunc, isLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => dispatchLoggedInUserDataFunc(transformLoginData(data));
  // const onSubmit = (data) => console.log("Будем отправлять вот эти данные на сервер: ", transformData(data));
  const password = useRef({});
  password.current = watch("password", "");
  console.log(errors);
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.signIn}
      >
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "E-mail have to be correct", pattern: /^\S+@\S+$/i })}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <input
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Your password needs to be at least 6 characters. Maximum length: 40",
            minLength: { value: 6, message: "Your password needs to be at least 6 characters" },
            maxLength: { value: 40, message: "Login maximux length is 40 characters" },
          })}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <input
          type="submit"
          value="Login"
          className={classes.signInButton}
        />
      </form>
    </div>
  );
};

// SignIn.propTypes = {
//   // bla: PropTypes.string,
// };

// SignIn.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = (state) => ({
  state,
  isLoggedIn: state.signInReducer.isLoggedIn,
});

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(mapStateToProps, actions)(SignIn);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SignIn);
