import React, { Component } from "react";
import opinionStyle from "./opinionSection.module.css";

class OpinionSection extends Component {
  state = { leftCoilmn: [], rightColumn: [] };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=10";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    this.setState({
      leftCoilmn: allStories.stories.slice(1, 2),
      rightColumn: allStories.stories.slice(2, 6)
    });
  }
  render() {
    return (
      <div>
        <article>মতামত</article>
        <div className={opinionStyle.opinionContainer}>
          <div className={`${opinionStyle.leftSide} ${opinionStyle.opinioBox}`}>
            {this.state.leftCoilmn.map(story => (
              <div className={opinionStyle.opinioAuthor}>
                <span className={opinionStyle.opinioTitle}>গদ্য কার্টুন</span>
                <h2 className={opinionStyle.overlayText}>
                  <span>
                    {story.headline}
                    {/* সাংবাদিকতা এখন বিরাট &nbsp;<br></br>&nbsp;চ্যালেঞ্জের
                    মুখোমুখি:&nbsp;<br></br>&nbsp;মাহ্ফুজ আনাম */}
                  </span>
                </h2>
                <div className={opinionStyle.authorSpeech}>
                  <span>{story.subheadline}</span>
                  <div className={opinionStyle.speakerInfo}>
                    <div className="">
                      <img
                        className={opinionStyle.authorThumL}
                        src={
                          "http://thumbor-stg.assettype.com/" +
                          story["hero-image-s3-key"]
                        }
                      />
                    </div>
                    <div className="center">
                      <div className={opinionStyle.underlineAuthor}></div>
                      <div className={opinionStyle.authorName}>
                        <div>{story["author-name"]}</div>
                        <small>সাহিত্যিক ও সাংবাদিক</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={opinionStyle.rightSide}>
            {this.state.rightColumn.map(story => (
              <div className={opinionStyle.opinionList}>
                <div
                  className={`${opinionStyle.marginRight20} imageLeftToRight`}
                >
                  <img
                    className={opinionStyle.authorThum}
                    src={
                      "http://thumbor-stg.assettype.com/" +
                      story["hero-image-s3-key"]
                    }
                  />
                </div>
                <div className={opinionStyle.headlineList}>
                  <div className="news-headline">{story["headline"]}</div>
                  <div className={opinionStyle.underlineAuthor}></div>
                  <div className="author-name">
                    <div>{story["author-name"]}</div>
                    <small>সাহিত্যিক ও সাংবাদিক</small>
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

export default OpinionSection;
