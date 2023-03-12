import { fetchArticles, dispatchArticlesFunc } from "../../widgets/ArticleList/models/actions";
import { fetchOneArticle } from "../../features/Article/models/actions";
import { dispatchNewUserDataFunc } from "../../widgets/SignUp/models/actions";
import { dispatchupdateUserInfoFunc } from "../../widgets/Profile/models/actions";
import {
  checkLocalStorageCredentials,
  dispatchLoggedInUserDataFunc,
  logOut,
  clearHasErrorFunc,
} from "../../widgets/SignIn/models/actions";
import { dispatchProfileUsernameFunc } from "../../widgets/Header/model/actions";

export {
  fetchArticles,
  dispatchArticlesFunc,
  fetchOneArticle,
  dispatchNewUserDataFunc,
  dispatchLoggedInUserDataFunc,
  checkLocalStorageCredentials,
  dispatchProfileUsernameFunc,
  logOut,
  dispatchupdateUserInfoFunc,
  clearHasErrorFunc,
};
