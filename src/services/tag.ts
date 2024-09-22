import axiosInstance from "./config";
const tagService = {
  getTags: () => {
    return axiosInstance.get("admins/tags");
  },

  addTag: (title: string) => {
    return axiosInstance.post("admins/create/tag", {
      name: title,
    });
  },

  deleteTag: (id: Number) => {
    return axiosInstance.delete(`admins/delete/tag/${id}`);
  },
};
export default tagService;
