import React, { useRef } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";

import { transformLoginData } from "../../../shared/lib/transformData";
import * as actions from "../../../shared/api/actions_all";

import classes from "./SignIn.module.scss";

const SignIn = ({ dispatchLoggedInUserDataFunc, isLoggedIn, hasError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => dispatchLoggedInUserDataFunc(transformLoginData(data));
  const password = useRef({});
  password.current = watch("password", "");

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.signIn}
      >
        <span className={classes.title}>Sign In</span>
        <span>
          Email address
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "E-mail required",
              pattern: {
                value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i,
                message: "E-mail have to be correct",
              },
            })}
          />
        </span>
        {errors.email?.message && <span className={classes.errorMessage}>{errors.email.message}</span>}
        {hasError === 422 && (
          <span className={classes.errorMessage}>Email or Password is incorrect. Please, try another</span>
        )}
        <div>
          Password
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
        </div>
        {errors.password?.message && <span className={classes.errorMessage}>{errors.password.message}</span>}
        {hasError === 422 && (
          <span className={classes.errorMessage}>Email or Password is incorrect. Please, try another</span>
        )}

        <input
          type="submit"
          value="Login"
          className={isValid ? classes.signInButton : classes.signInButtonDisabled}
          disabled={!isValid}
        />
        <span className={classes.haveAccount}>
          Already have an account?&nbsp;
          <Link to="sign-in">Sign In</Link>.
        </span>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
  isLoggedIn: state.signInReducer.isLoggedIn,
  hasError: state.signInReducer.hasError,
});

export default connect(mapStateToProps, actions)(SignIn);
