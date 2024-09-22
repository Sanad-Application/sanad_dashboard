import axiosInstance from "./config";
const authService = {
  login: (email: string, password: string) => {
    return axiosInstance.post("auth/login", {
      email,
      password,
      fcmToken: "..",
    });
  },
};
export default authService;
