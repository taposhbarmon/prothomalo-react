import React, { Component } from "react";
import styleClass from "./entertainment.module.css";
import replaceNumbers from "./engToBagNumber";
import MiliConverter from "./miliToDatetime";

class Entertainment extends Component {
  state = { leftColumn: [], middelColumn: [], rightColumn: [] };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=9";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    //console.log(allStories.stories[0]);
    this.setState({
      middelColumn: allStories.stories.slice(8, 9),
      leftColumn: allStories.stories.slice(1, 5),
      rightColumn: allStories.stories.slice(3, 7)
    });
  }

  render() {
    return (
      <div>
        <article>বিনোদন</article>
        <div className={styleClass.entertainContainer}>
          <div className={styleClass.leftColumn}>
            {this.state.leftColumn.map(story => (
              <div className={styleClass.leftImageStory}>
                <div className={`imageLeftToRight ${styleClass.imageHide}`}>
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
                <div>
                  <div className="title-midiam">{story.headline}</div>
                  <div className="section-time">
                    <span>{story.sections[0]["display-name"]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styleClass.middleColumn}>
            {this.state.middelColumn.map(story => (
              <div>
                <div className="image-ratio">
                  <img
                    className="image-content"
                    src={
                      "http://thumbor-stg.assettype.com/" +
                      story["hero-image-s3-key"]
                    }
                    alt=""
                  />
                </div>
                <div className="title-lead">{story.headline}</div>
                <div className="underline-gray"></div>
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
          <div className={styleClass.rightColumn}>
            {this.state.rightColumn.map(story => (
              <div className={styleClass.leftImageStory}>
                <div className={styleClass.imageHide}>
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
                <div>
                  <div className="title-midiam">{story.headline}</div>
                  <div className="section-time">
                    <span>{story.sections[0]["display-name"]}</span>
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

export default Entertainment;
