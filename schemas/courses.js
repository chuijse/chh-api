export default {
  name: "courses",
  title: "Courses",
  type: "document",
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
        source: "title",
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
      name: "assistant",
      title: "Assistant",
      type: "string",
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
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "abstract",
      title: "Abstract",
      type: "text",
    },
    {
      name: "vimeoLink",
      title: "Link de Vimeo",
      type: "url",
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        {
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
        },
      ],
    },

    {
      name: "imageGallery",
      title: "Image gallery",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "image",
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
        },
      ],
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
