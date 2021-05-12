import React from "react";

//<pre>{JSON.stringify(value, null, 4)}</pre>

const twoVideosRender = ({ value }) => (
  <div>
    {value ? (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
      >
        <div
          style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <video
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            loop
            autoPlay
            controls
          >
            <source src={value.file ? value.url : null} />
          </video>
          <p>
            {value.file
              ? ` ${value.file.caption ? value.file.caption : ` No caption`}`
              : "No video"}
          </p>
        </div>
        <div
          style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <video
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            loop
            autoPlay
            controls
          >
            <source src={value.file2 ? value.url2 : null} />
          </video>
          <p>
            {value.file2
              ? ` ${value.file2.caption ? value.file2.caption : ` No caption`}`
              : "No hay video"}
          </p>
        </div>
      </div>
    ) : null}
  </div>
);

export default {
  name: "twoVideos",
  title: "Two Videos",
  type: "object",
  preview: {
    select: {
      file: "video1",
      url: "video1.asset.url",
      file2: "video2",
      url2: "video2.asset.url",
    },
    component: twoVideosRender,
  },
  fields: [
    {
      name: "video1",
      title: "Video1",
      type: "videoFile",
    },
    {
      name: "video2",
      title: "Video2",
      type: "videoFile",
    },
  ],
};
