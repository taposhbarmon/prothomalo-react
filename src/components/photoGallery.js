import React, { Component } from "react";
import galleryStyle from "./photoGallery.module.css";

class PhotoGallery extends Component {
  state = { leftColumn: [], rightTopRow: [], rightBottomRow: [] };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=5";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    this.setState({
      leftColumn: allStories.stories.slice(4, 5),
      rightTopRow: allStories.stories.slice(1, 2),
      rightBottomRow: allStories.stories.slice(2, 4)
    });
  }
  render() {
    return (
      <div>
        <article>ছবি</article>
        <div className={galleryStyle.galleryContainer}>
          <div className={galleryStyle.leftColumn}>
            {this.state.leftColumn.map(story => (
              <div className={galleryStyle.relativeLeadPos}>
                <div>
                  <img
                    className="responsive-img"
                    src={
                      "http://thumbor-stg.assettype.com/" +
                      story["hero-image-s3-key"]
                    }
                  />
                </div>
                <div className={galleryStyle.textOverlay}>
                  <div className={`title-large ${galleryStyle.leadTitle}`}>
                    <i class="fas fa-images"></i> {story.headline}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={galleryStyle.rightTopRow}>
            {this.state.rightTopRow.map(story => (
              <div className={galleryStyle.relativeLeadPos}>
                <div>
                  <img
                    className="responsive-img"
                    src={
                      "http://thumbor-stg.assettype.com/" +
                      story["hero-image-s3-key"]
                    }
                  />
                </div>
                <div className={galleryStyle.textOverlay}>
                  <div className={`title-midiam ${galleryStyle.leadTitle}`}>
                    <i class="fas fa-images"></i> {story.headline}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={galleryStyle.rightBottomRow}>
            {this.state.rightBottomRow.map(story => (
              <div className={galleryStyle.relativeLeadPos}>
                <div>
                  <img
                    className="responsive-img"
                    src={
                      "http://thumbor-stg.assettype.com/" +
                      story["hero-image-s3-key"]
                    }
                  />
                </div>
                <div className={galleryStyle.textOverlay}>
                  <div className={`photo-title ${galleryStyle.leadTitle}`}>
                    <i class="fas fa-images"></i> {story.headline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
