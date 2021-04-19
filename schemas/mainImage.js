export default {
  name: "mainImage",
  title: "Main image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: "attribution",
      type: "string",
      title: "Attribution",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
