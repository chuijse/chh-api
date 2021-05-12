// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import courses from "./courses";
import colleagues from "./colleagues";
import tecnologies from "./tecnologies";
import universities from "./universities";
import mainImage from "./mainImage";
import twoVideos from "./twoVideos";
import videoFile from "./videoFile";
import image from "./image";
import ImageGallery from "./ImageGallery";
import videoEmbed from "./videoEmebed";
import threeVideos from "./oneVideo";
import oneVideo from "./threeVideos";
import blockImage from "./bockImage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    videoEmbed,
    category,
    courses,
    colleagues,
    tecnologies,
    universities,
    mainImage,
    twoVideos,
    videoFile,
    threeVideos,
    oneVideo,
    image,
    ImageGallery,
    blockImage,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
