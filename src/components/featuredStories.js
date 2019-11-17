import React, { Component } from "react";
import styleClass from "./featuredStories.module.css";
import AdPlace from "./adSquare";
import replaceNumbers from "./engToBagNumber";
import MiliConverter from "./miliToDatetime";

class FeaturedSroties extends Component {
  state = {
    leadStory: [],
    leftTop: [],
    topMiddle: [],
    leftTop: [],
    rightColumn: [],
    leftBottom: []
  };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=16";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    //console.log(allStories);
    this.setState({
      leadStory: allStories.stories.slice(1, 2),
      topMiddle: allStories.stories.slice(2, 3),
      leftTop: allStories.stories.slice(3, 6),
      leftBottom: allStories.stories.slice(1, 7),
      rightColumn: allStories.stories.slice(4, 7)
    });
  }

  render() {
    return (
      <div className={styleClass.featureContainer}>
        <div className={styleClass.leadStory}>
          {this.state.leadStory.map(story => (
            <div className={styleClass.span2col}>
              <div className={styleClass.leadNews}>
                <div className={styleClass.leadOverlay}>
                  <div className={`title-lead ${styleClass.leadTitle}`}>
                    {story.headline}
                  </div>
                  <div className="excerpt excerpt-hide">
                    {story.subheadline}
                  </div>
                  <div className={`section-time ${styleClass.sectionTime}`}>
                    <span>{story.sections[0]["display-name"]}</span> |{" "}
                    <span>
                      {replaceNumbers(
                        MiliConverter(
                          story["published-at"],
                          "dd/MM/yyyy"
                        ).toString()
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="">
                    <img
                      className=""
                      src={
                        "http://thumbor-stg.assettype.com/" +
                        story["hero-image-s3-key"]
                      }
                      alt=""
                    />
                  </div>
                  <div className="caption caption-hide">
                    ছবি ক্যাপশন ছবি ক্যাপশন
                  </div>
                </div>
              </div>
            </div>
          ))}
          <AdPlace adStyle={styleClass.adRightTab} />
        </div>
        <div className={styleClass.topMiddle}>
          {this.state.topMiddle.map(story => (
            <div>
              <div className="title-large">{story.headline}</div>
              <div className="excerpt">{story.subheadline}</div>
              <div className="section-time">
                <span>{story.sections[0]["display-name"]}</span> |{" "}
                <span>
                  {replaceNumbers(
                    MiliConverter(
                      story["published-at"],
                      "dd/MM/yyyy"
                    ).toString()
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styleClass.leftTop}>
          {this.state.leftTop.map(story => (
            <div className={styleClass.noImageStory}>
              <div className="title-large">{story.headline}</div>
              <div className="excerpt">{story.subheadline}</div>
              <div className="section-time">
                <span>{story.sections[0]["display-name"]}</span> |{" "}
                <span>
                  {replaceNumbers(
                    MiliConverter(
                      story["published-at"],
                      "dd/MM/yyyy"
                    ).toString()
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styleClass.leftBottom}>
          {this.state.leftBottom.map(story => (
            <div className={styleClass.thumNews}>
              <div className={styleClass.thumNewsList}>
                <div className={styleClass.imageRight}>
                  <div className="image-ratio image-pad15">
                    <img
                      className="image-content"
                      src={
                        "http://thumbor-stg.assettype.com/" +
                        story["hero-image-s3-key"]
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="title-midiam">{story.headline}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styleClass.rightColumn}>
          <AdPlace adStyle={styleClass.adRight} />
          {this.state.rightColumn.map((story, i) => (
            <div className={styleClass.rightColNews}>
              {(() => {
                if (i == 0) {
                  return (
                    <div className={styleClass.videoLeadNews}>
                      <div className={styleClass.imgPos}>
                        <div className="image-ratio image-tabpad20">
                          <img
                            className="image-content"
                            src={
                              "http://thumbor-stg.assettype.com/" +
                              story["hero-image-s3-key"]
                            }
                            alt=""
                          />
                        </div>
                        <i
                          className={`${styleClass.playIcon} fas fa-play-circle`}
                        ></i>
                      </div>
                      <div className="title-midiam">{story.headline}</div>
                    </div>
                  );
                } else {
                  return (
                    <div className={styleClass.videoNews}>
                      <div className={styleClass.imgPos}>
                        <div className="image-ratio image-pad20">
                          <img
                            className="image-content"
                            src={
                              "http://thumbor-stg.assettype.com/" +
                              story["hero-image-s3-key"]
                            }
                            alt=""
                          />
                        </div>
                        <i
                          className={`${styleClass.playIconS} fas fa-play-circle`}
                        ></i>
                      </div>
                      <div className="title-midiam">{story.headline}</div>
                    </div>
                  );
                }
              })()}
            </div>
          ))}
        </div>
        <div className={styleClass.adBottom}>
          <img
            className="responsive-img"
            src="https://cdn.zeplin.io/5ced78643480691e05dc561c/assets/3C73975B-6C89-410B-BA80-B7944117F091.png"
          />
        </div>
      </div>
    );
  }
}

export default FeaturedSroties;
