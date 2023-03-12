import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

import { transformUpdateData } from "../../../shared/lib/transformData";
import * as actions from "../../../shared/api/actions_all";

import classes from "./Profile.module.scss";

const Profile = ({ dispatchupdateUserInfoFunc, isLoggedIn, username, email, image }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatchupdateUserInfoFunc(transformUpdateData(data));
  // const onSubmit = (data) => console.log("Будем отправлять вот эти данные на сервер: ", transformData(data));
  console.log(errors);
  if (!isLoggedIn) {
    return <Redirect to="/sign-in" />;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.profile}
      >
        <h2>Edit Profile</h2>
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
        {errors.username?.message && <p>{errors.username.message}</p>}
        <input
          type="email"
          placeholder="Email"
          defaultValue={email}
          {...register("email", { required: "E-mail have to be correct", pattern: /^\S+@\S+$/i })}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <input
          name="password"
          type="password"
          placeholder="New Password"
          {...register("password", {
            // eslint-disable-next-line no-undef
            required: "Minimum length: 6. Maximum length: 40",
            minLength: 6,
            maxLength: 40,
          })}
        />
        {/* <p>{errors["Repeat Password"]?.message}</p> */}
        {errors["password"] && <p>{errors["password"]?.message}</p>}
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
        {errors["image"] && <p>{errors["image"]?.message}</p>}

        <input
          type="submit"
          value="Save"
        />
        <p> Красивая синяя кнопка Create</p>
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
