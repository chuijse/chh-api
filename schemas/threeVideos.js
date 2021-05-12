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
            width: "32%",
          }}
        >
          <video
            style={{
              width: "100%",
              height: "400px",
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
              ? `${value.file.caption ? value.file.caption : ` No caption`}`
              : "No hay video"}
          </p>
        </div>
        <div
          style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            width: "32%",
          }}
        >
          <video
            style={{
              width: "100%",
              height: "400px",
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
              ? `${value.file2.caption ? value.file2.caption : ` No caption`}`
              : "No hay video"}
          </p>
        </div>
        <div
          style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            width: "32%",
          }}
        >
          <video
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
            loop
            autoPlay
            controls
          >
            <source src={value.file3 ? value.url3 : null} />
          </video>
          <p>
            {value.file3
              ? `${value.file3.caption ? value.file3.caption : ` No caption`}`
              : "No hay video"}
          </p>
        </div>
      </div>
    ) : null}
  </div>
);

export default {
  name: "threeVideos",
  title: "Three Videos",
  type: "object",
  preview: {
    select: {
      file: "video1",
      url: "video1.asset.url",
      file2: "video2",
      url2: "video2.asset.url",
      file3: "video3",
      url3: "video3.asset.url",
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
    {
      name: "video3",
      title: "Video3",
      type: "videoFile",
    },
  ],
};
