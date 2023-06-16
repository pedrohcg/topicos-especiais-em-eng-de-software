export const setLSToken = (token: string) => {
  return localStorage.setItem("token", token);
};

export const getLSToken = () => {
  return localStorage.getItem("token");
};
