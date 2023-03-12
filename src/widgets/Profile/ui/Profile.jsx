import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

import { transformUpdateData } from "../../../shared/lib/transformData";
import * as actions from "../../../shared/api/actions_all";

import classes from "./Profile.module.scss";

const Profile = ({ dispatchupdateUserInfoFunc, isLoggedIn, username, email, image, hasError, clearHasErrorFunc }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    dispatchupdateUserInfoFunc(transformUpdateData(data));
    clearHasErrorFunc();
  };
  // console.log(errors);
  if (!isLoggedIn) {
    return <Redirect to="/sign-in" />;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.profile}
      >
        <span className={classes.title}>Edit Profile</span>
        <div>
          Username
          <input
            type="text"
            placeholder="Username"
            defaultValue={username}
            {...register("username", {
              required: "Username is required",
              minLength: { value: 3, message: "Your login needs to be at least 3 characters" },
              maxLength: { value: 20, message: "Login maximux length is 20 characters" },
            })}
          />
        </div>
        {errors.username?.message && <span className={classes.errorMessage}>{errors.username.message}</span>}
        {hasError === 422 && (
          <span className={classes.errorMessage}>Username or Email already taken. Please, try another</span>
        )}
        <span>
          Email address
          <input
            type="email"
            placeholder="Email"
            defaultValue={email}
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
          <span className={classes.errorMessage}>Username or Email already taken. Please, try another</span>
        )}
        <div>
          New password
          <input
            name="password"
            type="password"
            placeholder="New password"
            {...register("password", {
              required: "Your password needs to be at least 6 characters. Maximum length: 40",
              minLength: { value: 6, message: "Your password needs to be at least 6 characters" },
              maxLength: { value: 40, message: "Login maximux length is 40 characters" },
            })}
          />
        </div>
        {errors.password?.message && <span className={classes.errorMessage}>{errors.password.message}</span>}

        <div>
          Avatar image (url)
          <input
            type="url"
            placeholder="Avatar image"
            defaultValue={image}
            {...register("image", {
              required: true,
              maxLength: 500,
              pattern: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/i,
            })}
          />
        </div>

        {errors["image"] && <p>{errors["image"]?.message}</p>}

        <input
          type="submit"
          value="Save"
          className={isValid ? classes.profileButton : classes.profileButtonDisabled}
          disabled={!isValid}
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
  username: state.signInReducer.username,
  email: state.signInReducer.email,
  hasError: state.signInReducer.hasError,
  image: state.profileUsernameReducer.image,
});

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(mapStateToProps, actions)(Profile);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SignIn);
