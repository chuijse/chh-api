import React, { useEffect } from "react";

var caption = "";

const captions = ({ value }) => {
  caption = value?.caption;

  return (
    <div style={{ display: "flex", flexShrink: "0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          width: "100px",
          objectFit: "cover",
          overflow: "hidden",
        }}
      >
        <img src={value?.url} width="130px"></img>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <p>Caption: {value?.caption}</p>
        {value && <p>Slug: /{value.slug?.current}/</p>}
      </div>
    </div>
  );
};

/*;*/

export default {
  name: "photo",
  title: "Photo",
  type: "object",
  preview: {
    select: {
      file: "photo",
      url: "photo.asset.url",
      caption: "caption",
      slug: "slug",
    },
    component: captions,
  },

  fields: [
    {
      name: "photo",
      type: "image",
      title: "Image",
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
        source: () => `${caption}`,
        maxLength: 96,
      },
    },
  ],
};
