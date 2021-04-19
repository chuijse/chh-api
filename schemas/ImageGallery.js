export default {
  name: "imageGallery",
  title: "Image gallery",
  type: "array",
  options: {
    layout: "grid",
  },
  of: [
    {
      name: "photos",
      title: "Photos",
      type: "photos",
    },
  ],
};
