export const authReducer = (state, action) => {
  if (action.type === "LOGIN") {
    console.log(action);
  }
  if (action.type === "SIGN_UP") {
    console.log(action);
  }
};
