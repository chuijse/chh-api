export default {
  name: "videoFile",
  title: "Video file",
  type: "file",
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
