import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import React from "react";
import "./SearchPage.css";
import "./ChannelRow.css";
import ChannelRow from "./ChannelRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="photo.jpeg"
        channel="Clone Coding"
        verified
        subs="1K"
        noOfVideos={382}
        description="You can do it."
      />
      {/* ChannelRow */}
      {/* VideoRow */}
    </div>
  );
}

export default SearchPage;
