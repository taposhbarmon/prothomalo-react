import React, { Component } from "react";
import bdStyle from "./bangladeshStories.module.css";
import replaceNumbers from "./engToBagNumber";
import MiliConverter from "./miliToDatetime";

class BangladeshStories extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    leftTopColumn: [],
    middleTopColumn: [],
    leftBottomColumn: []
  };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=8";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    this.setState({
      leftTopColumn: allStories.stories.slice(0, 1),
      middleTopColumn: allStories.stories.slice(1, 3),
      leftBottomColumn: allStories.stories.slice(4, 7)
    });
  }

  render() {
    return (
      <div>
        <article>বাংলাদেশ</article>
        <div className={bdStyle.bdContainer}>
          <div className={bdStyle.leftTopColumn}>
            {this.state.leftTopColumn.map(story => (
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
          <div className={bdStyle.middleTopColumn}>
            {this.state.middleTopColumn.map(story => (
              <div className={bdStyle.relativePos}>
                <div className="imageLeftToRight">
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
                </div>
                <div className="title-midiam">
                  <a href={story.slug}>{story.headline}</a>
                </div>
              </div>
            ))}
          </div>
          <div className={bdStyle.leftBottomColumn}>
            {this.state.leftBottomColumn.map(story => (
              <div className={bdStyle.relativePosRow}>
                <div className="imageHide">
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
                </div>
                <div className="title-midiam">
                  <a href={story.slug}>{story.headline}</a>
                </div>
              </div>
            ))}
          </div>
          <div className={bdStyle.rightColumn}>
            <div className={bdStyle.marginBottom}>
              <img
                className="responsive-img"
                src="https://cdn.zeplin.io/5ced78643480691e05dc561c/assets/536C3CCA-E8ED-4722-AC03-8D021033F35E.png"
              />
            </div>
            <div className={bdStyle.areaStory}>
              <h2 className="navy">আমার এলাকার খবর</h2>
              <div className="underline-navy"></div>
              <select
                className={bdStyle.dropdownLocal}
                id="location"
                name="local"
              >
                <option value="australia">বিভাগ</option>
                <option value="canada">ঢাকা</option>
                <option value="usa">রংপুর</option>
              </select>
              <i className={`fa fa-chevron-down ${bdStyle.dropdownIcon}`}></i>
              <p></p>
              <select
                className={bdStyle.dropdownLocal}
                id="location"
                name="local"
              >
                <option value="australia">জেলা</option>
                <option value="canada">ঢাকা</option>
                <option value="usa">রংপুর</option>
              </select>
              <i className={`fa fa-chevron-down ${bdStyle.dropdownIcon}`}></i>
              <p></p>
              <select
                className={bdStyle.dropdownLocal}
                id="location"
                name="local"
              >
                <option value="australia">উপজেলা</option>
                <option value="canada">ঢাকা</option>
                <option value="usa">রংপুর</option>
              </select>
              <i className={`fa fa-chevron-down ${bdStyle.dropdownIcon}`}></i>
              <p></p>
              <button
                type="button"
                className={`${bdStyle.btn} ${bdStyle.btnLocalSearch}`}
              >
                <i className="fas fa-search"></i> খুঁজুন
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BangladeshStories;
