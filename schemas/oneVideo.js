import React from "react";

//<pre>{JSON.stringify(value, null, 4)}</pre>

const videosRender = ({ value }) => (
  <div style={{ padding: "20px", marginTop: "50px" }}>
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
        <video
          style={{
            width: "100%",
          }}
          loop
          autoPlay
          controls
        >
          <source src={value.file ? value.url : null} />
        </video>
        <p>
          {value.file
            ? `${value.caption ? value.caption : ` No caption`}`
            : "No hay video"}
        </p>
      </div>
    ) : null}
  </div>
);

export default {
  name: "oneVideo",
  title: "One Video",
  type: "object",
  preview: {
    select: {
      file: "video1",
      caption: "video1.caption",
      url: "video1.asset.url",
    },
    component: videosRender,
  },

  fields: [
    {
      name: "video1",
      title: "Video1",
      type: "videoFile",
    },
  ],
};
