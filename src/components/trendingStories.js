import React, { Component } from "react";
import trendStyle from "./trandingStories.module.css";
import $ from "jquery";
import replaceNumbers from "./engToBagNumber";
import MiliConverter from "./miliToDatetime";

class TrendingStories extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    leftColumn: [],
    leftColumnUpdated: [],
    leftColumnViewed: [],
    leftColumnFeatured: [],
    middleColumnLead: [],
    middleColumnStory: [],
    rightColumn: []
  };

  async componentDidMount() {
    $(document).ready(function() {
      $("ul.tabs li").click(function() {
        var tab_id = $(this).attr("data-tab");

        $("ul.tabs li").removeClass("current");
        $(".tab-content").removeClass("current");

        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
      });
    });

    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=15";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    this.setState({
      middleColumnLead: allStories.stories.slice(3, 4),
      middleColumnStory: allStories.stories.slice(1, 3),
      leftColumnUpdated: allStories.stories.slice(1, 6),
      leftColumnViewed: allStories.stories.slice(5, 10),
      leftColumnFeatured: allStories.stories.slice(10, 15),
      rightColumn: allStories.stories.slice(10, 13)
    });
  }

  render() {
    return (
      <div className={trendStyle.trendingContainer}>
        <div className={trendStyle.middleColumn}>
          <div className={trendStyle.trendingRow}>
            <span className={trendStyle.trendingIcon}></span>
            <span className={trendStyle.trending}>ট্রেন্ডিং</span>
          </div>
          <div className={trendStyle.middleLeadRow}>
            {this.state.middleColumnLead.map(story => (
              <div className={trendStyle.relativeLeadPos}>
                <div>
                  <img
                    className="responsive-img"
                    src={
                      "http://thumbor-stg.assettype.com/" +
                      story["hero-image-s3-key"]
                    }
                  />
                </div>
                <div className={trendStyle.textOverlay}>
                  <div className={`title-large ${trendStyle.leadTitle}`}>
                    <a href={story.slug}>{story.headline}</a>
                    <div className={trendStyle.excerptOverlay}>
                      {story.subheadline}
                    </div>
                  </div>

                  <div className={`section-time ${trendStyle.sectionTime}`}>
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
          <div className={trendStyle.middleBottomRow}>
            {this.state.middleColumnStory.map(story => (
              <div className={trendStyle.relativePos}>
                <div className="imageLeftToRight">
                  <img
                    className="responsive-img"
                    src={
                      "http://thumbor-stg.assettype.com/" +
                      story["hero-image-s3-key"]
                    }
                  />
                </div>
                <div className="title-midiam">
                  <a href={story.slug}>{story.headline}</a>
                </div>
                <div className={trendStyle.excerpt}>{story.subheadline}</div>
                <div className={`section-time ${trendStyle.sectionTime}`}>
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
        </div>
        <div className={trendStyle.leftColumn}>
          <div className="tab-container">
            <ul className="tabs">
              <li className="tab-link current" data-tab="tab-updated">
                সর্বশেষ
              </li>
              <li className="tab-link" data-tab="tab-viewed">
                পঠিত
              </li>
              <li className="tab-link" data-tab="tab-featured">
                আলোচিত
              </li>
            </ul>
            <div id="tab-updated" className="tab-content current">
              {this.state.leftColumnUpdated.map((story, i) => {
                let listNo = i + 1;
                return (
                  <div className={trendStyle.storyListRow}>
                    <div className="news-number">
                      {replaceNumbers(listNo.toString())}
                    </div>
                    <div className="news-headline">
                      <a href={story.slug}>{story.headline}</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="tab-viewed" className="tab-content">
              {this.state.leftColumnViewed.map((story, i) => {
                let listNo = i + 1;
                return (
                  <div className={trendStyle.storyListRow}>
                    <div className="news-number">
                      {replaceNumbers(listNo.toString())}
                    </div>
                    <div className="news-headline">
                      <a href={story.slug}>{story.headline}</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="tab-featured" className="tab-content">
              {this.state.leftColumnFeatured.map((story, i) => {
                let listNo = i + 1;
                return (
                  <div className={trendStyle.storyListRow}>
                    <div className="news-number">
                      {replaceNumbers(listNo.toString())}
                    </div>
                    <div className="news-headline">
                      <a href={story.slug}>{story.headline}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={trendStyle.rightColumn}>
          <div className={trendStyle.adSpace}>
            <img
              className="responsive-img"
              src="https://cdn.zeplin.io/5ced78643480691e05dc561c/assets/BC0ECD1D-75B9-4A96-88FA-B381EE34CC09.png"
            />
          </div>
          <div className={trendStyle.rightStoryList}>
            {this.state.rightColumn.map(story => {
              return (
                <div className={trendStyle.rightStory}>
                  <div className={trendStyle.hideImage}>
                    <img
                      className="responsive-img"
                      src={
                        "http://thumbor-stg.assettype.com/" +
                        story["hero-image-s3-key"]
                      }
                    />
                  </div>
                  <div className="title-midiam">
                    <a href={story.slug}>{story.headline}</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingStories;
