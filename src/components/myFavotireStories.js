import React, { Component } from "react";
import favoriteStyle from "./myFavoriteStories.module.css";

class MyFavoriteStories extends Component {
  state = { favoriteRow: [] };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=6";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    this.setState({
      favoriteRow: allStories.stories.slice(1, 5)
    });
  }
  render() {
    return (
      <div>
        <article>আমার পছন্দ</article>
        <div className={favoriteStyle.favoriteContainer}>
          {this.state.favoriteRow.map(story => (
            <div className={favoriteStyle.relativePos}>
              <div className="imageLeftToRight">
                <img
                  className="responsive-img"
                  src={
                    "http://thumbor-stg.assettype.com/" +
                    story["hero-image-s3-key"]
                  }
                />
              </div>
              <div className="title-midiam">{story.headline}</div>
              <div className={favoriteStyle.underlineGray}></div>
              <div
                className={`${favoriteStyle.excerpt} ${favoriteStyle.excerptHide}`}
              >
                {story.subheadline}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyFavoriteStories;
