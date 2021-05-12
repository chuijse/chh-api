import React from "react";

//<pre>{JSON.stringify(value, null, 4)}</pre>;

const ImageRender = ({ value }) => (
  <div style={{ padding: "10px", marginTop: "50px" }}>
    {value ? (
      <div
        style={{
          border: "1px solid gray",
          marginBottom: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={value.url} style={{ width: "100%" }} />
        <p>
          {value.file
            ? `${value.caption ? value.caption : ` No caption`}`
            : "No hay Imagen"}
        </p>
      </div>
    ) : null}
  </div>
);

export default {
  name: "blockImage",
  title: "Image",
  type: "object",
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
  ],
  preview: {
    select: {
      file: "photo",
      url: "photo.asset.url",
      caption: "caption",
    },
    component: ImageRender,
  },
};
