import React from "react";

//<pre>{JSON.stringify(value, null, 4)}</pre>

const videoEmbedRender = ({ value }) => {
  return (
    <div>
      {value.url ? (
        <div>
          <h3 style={{ paddingLeft: "20px" }}>{value.url}</h3>
          <iframe
            width="100%"
            height="500"
            src={value.url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen=""
          ></iframe>
          <p style={{ paddingLeft: "20px" }}>CAPTION: {value.caption}</p>
        </div>
      ) : (
        <p style={{ paddingLeft: "20px" }}>Insert Video embed url</p>
      )}
    </div>
  );
};

export default {
  name: "videoEmbed",
  title: "Videos Embed",
  type: "object",
  fields: [
    {
      name: "videoUrl",
      title: "Videos url",
      type: "url",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
  ],
  preview: {
    select: {
      url: "videoUrl",
      caption: "caption",
    },
    component: videoEmbedRender,
  },
};
