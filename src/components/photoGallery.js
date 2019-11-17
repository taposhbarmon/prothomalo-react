import React, { Component } from "react";
import galleryStyle from "./photoGallery.module.css";

class PhotoGallery extends Component {
  state = { leftColumn: [], rightTopRow: [], rightBottomRow: [] };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?offset=7";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    this.setState({
      leftColumn: allStories.stories.slice(0, 1),
      rightTopRow: allStories.stories.slice(2, 3),
      rightBottomRow: allStories.stories.slice(3, 5)
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
                  <div
                    className={`photo-title font-l ${galleryStyle.leadTitle}`}
                  >
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
                  <div
                    className={`photo-title font-m ${galleryStyle.leadTitle}`}
                  >
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
                  <div
                    className={`photo-title font-s ${galleryStyle.leadTitle}`}
                  >
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
