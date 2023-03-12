/* eslint-disable prettier/prettier */
import React, { useRef } from "react";
// import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";

import { transformRegistrationData } from "../../../shared/lib/transformData";
import * as actions from "../../../shared/api/actions_all";

import classes from "./SignUp.module.scss";

const SignUp = ({ dispatchNewUserDataFunc, isLoggedIn, hasError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    // setError,
    // clearErrors,
  } = useForm({
    criteriaMode: "all",
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    dispatchNewUserDataFunc(transformRegistrationData(data));
  };
  // const onSubmit = (data) =>
  const password = useRef({});
  password.current = watch("password", "");

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  // useEffect(() => {
  //   if (hasError) {
  //
  //     setError("root.serverError", {
  //       type: hasError,
  //     });
  //   }
  //   return clearErrors("root.serverError");
  // }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.signUp}
      >
        <span className={classes.title}>Create new account</span>
        <div>
          Username
          <input
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 3, message: "Your login needs to be at least 3 characters" },
              maxLength: { value: 20, message: "Login maximux length is 20 characters" },
            })}
          />
        </div>
        {errors.username?.message && <span className={classes.errorMessage}>{errors.username.message}</span>}

        {/* {errors.root?.serverError.type && "Probably Username already taken. Please, try another"} */}
        {hasError === 422 && (
          <span className={classes.errorMessage}>Username or Email already taken. Please, try another</span>
        )}
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
        {/* {errors.root?.serverError.type && "Probably Email address already taken. Please, try another"} */}
        {hasError === 422 && (
          <span className={classes.errorMessage}>Username or Email already taken. Please, try another</span>
        )}
        <div>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: { value: 6, message: "Your password needs to be at least 6 characters" },
              maxLength: { value: 40, message: "Login maximux length is 40 characters" },
            })}
          />
        </div>
        {errors.password?.message && <span className={classes.errorMessage}>{errors.password.message}</span>}
        <div>
          Repear Password
          <input
            name="Repear_Password"
            type="password"
            placeholder="Repeat Password"
            {...register("Repear_Password", {
              // eslint-disable-next-line no-undef
              validate: (value) => value === password.current || "Passwords must match",
              // required: "Minimum length: 6. Maximum length: 40",
              // minLength: 6,
              // maxLength: 40,
            })}
          />
        </div>
        {/* <p>{errors["Repeat Password"]?.message}</p> */}
        {errors["Repear_Password"] && (
          <span className={classes.errorMessage}>{errors["Repear_Password"]?.message}</span>
        )}
        <hr className={classes.hr} />

        <input
          name="term"
          type="checkbox"
          className={classes.toggle}
          id="idForInput"
          placeholder="I agree to the processing of my personal information"
          defaultChecked
          {...register("Term", { required: "Please, click at checkbox to agree" })}
        />
        <label
          htmlFor="idForInput"
          className={classes.term}
        >
          <span>I agree to the processing of my personal information</span>
        </label>

        {errors?.Term && <span className={classes.errorMessage}>{errors.Term.message}</span>}

        <input
          type="submit"
          value="Create"
          className={isValid ? classes.signUpButton : classes.signUpButtonDisabled}
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

// SignIn.propTypes = {
//   // bla: PropTypes.string,
// };

// SignIn.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = (state) => ({
  state,
  isLoggedIn: state.signInReducer.isLoggedIn,
  hasError: state.registerNewUserReducer.hasError,
});

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(mapStateToProps, actions)(SignUp);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SignIn);
