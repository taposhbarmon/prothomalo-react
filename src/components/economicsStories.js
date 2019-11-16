import React, { Component } from "react";
import econoStyle from "./economicsStories.module.css";
import replaceNumbers from "./engToBagNumber";
import MiliConverter from "./miliToDatetime";

class EconomicsStories extends Component {
  state = { leftColumn: [], rightColumn: [] };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=6";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    this.setState({
      leftColumn: allStories.stories.slice(1, 2),
      rightColumn: allStories.stories.slice(3, 6)
    });
  }
  render() {
    return (
      <div>
        <article>অর্থনীতি</article>
        <div className={econoStyle.econoContrainer}>
          <div className={econoStyle.leftColumn}>
            {this.state.leftColumn.map(story => (
              <div>
                <img
                  className="responsive-img"
                  src={
                    "http://thumbor-stg.assettype.com/" +
                    story["hero-image-s3-key"]
                  }
                />
                <div className="title-lead">
                  <a href={story.slug}>{story.headline}</a>
                </div>
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
          <div className={econoStyle.rightColumn}>
            {this.state.rightColumn.map(story => (
              <div className={econoStyle.rightStory}>
                <div className="imageLeftToRight">
                  <img
                    className="responsive-img"
                    src={
                      "http://thumbor-stg.assettype.com/" +
                      story["hero-image-s3-key"]
                    }
                  />
                </div>
                <div>
                  <div className="title-midiam">
                    <a href={story.slug}>{story.headline}</a>
                  </div>
                  <div className="excerpt excerpt-hide">
                    {story.subheadline}
                  </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default EconomicsStories;
