export const apiURL = () => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    return "http://localhost:3001";
  }
  return "https://budget-app-jfm.netlify.app/";
};
