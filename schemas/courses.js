export default {
  name: "courses",
  title: "Courses",
  type: "document",
  initialValue: {
    bestWork: false,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "semester",
      title: "Semester",
      type: "number",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.title}-${doc.semester}-${doc.year}`,
        maxLength: 96,
      },
    },
    {
      name: "colleagues",
      title: "Colleagues",
      type: "array",
      of: [{ type: "reference", to: { type: "colleagues" } }],
    },
    {
      name: "role",
      title: "Role in Course",
      type: "reference",
      to: { type: "role" },
    },
    {
      name: "bestWork",
      title: "Best work ?",
      type: "boolean",
    },
    {
      name: "courseContent",
      title: "Course Contents",
      type: "array",
      of: [{ type: "reference", to: { type: "areaContent" } }],
    },
    {
      name: "universities",
      title: "Universities",
      type: "reference",
      to: { type: "universities" },
    },
    {
      name: "tecnologies",
      title: "Tecnologies",
      type: "array",
      of: [{ type: "reference", to: { type: "tecnologies" } }],
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "mainImage",
    },

    {
      name: "abstract",
      title: "Abstract",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "imageGallery",
      title: "Image gallery",
      type: "imageGallery",
    },
  ],

  preview: {
    select: {
      title: "title",
      semester: "semester",
      year: "year",
      universities: "universities.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { universities, semester, year } = selection;
      return Object.assign({}, selection, {
        subtitle: `${universities} ${year} ${semester}°S`,
      });
    },
  },
};
