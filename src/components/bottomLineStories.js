import React, { Component } from "react";
import bottomStyle from "./bottomLineStories.module.css";

class BottomLineStories extends Component {
  state = { leftColumn: [], middleLeft: [], middleRight: [], rightColumn: [] };

  async componentDidMount() {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const apiURL = "https://prothomalo-web.qtstage.io/api/v1/stories?limit=17";
    const response = await fetch(corsURL + apiURL);
    const allStories = await response.json();
    this.setState({
      leftColumn: allStories.stories.slice(1, 5),
      middleLeft: allStories.stories.slice(3, 7),
      middleRight: allStories.stories.slice(5, 9),
      rightColumn: allStories.stories.slice(4, 8)
    });
  }

  renderPosts = async () => {};

  render() {
    return (
      <div className={bottomStyle.bottomLinecontainer}>
        <div>
          <article>আন্তর্জাতিক</article>
          <div className={bottomStyle.storyHolder}>
            {this.state.leftColumn.map((story, i) => {
              if (i == 0) {
                return (
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
                    <div>
                      <div className="title-midiam">{story.headline}</div>
                      <div className="section-time">
                        <span>{story.sections[0]["display-name"]}</span>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <a href={story.slug}>
                      <div className="headline">{story.headline}</div>
                    </a>
                  </div>
                );
              }
            })}
            <div className={bottomStyle.center}>
              <button class={bottomStyle.btnMore}>আরও খবর</button>
            </div>
          </div>
        </div>

        <div>
          <article>জীবনযাপন</article>
          <div className={bottomStyle.storyHolder}>
            {this.state.middleLeft.map((story, i) => {
              if (i == 0) {
                return (
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
                    <div>
                      <div className="title-midiam">{story.headline}</div>
                      <div className="section-time">
                        <span>{story.sections[0]["display-name"]}</span>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <a href={story.slug}>
                      <div className="headline">{story.headline}</div>
                    </a>
                  </div>
                );
              }
            })}
            <div className={bottomStyle.center}>
              <button class={bottomStyle.btnMore}>আরও খবর</button>
            </div>
          </div>
        </div>

        <div>
          <article>উত্তর আমেরিকা</article>
          <div className={bottomStyle.storyHolder}>
            {this.state.middleRight.map((story, i) => {
              if (i == 0) {
                return (
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
                    <div>
                      <div className="title-midiam">{story.headline}</div>
                      <div className="section-time">
                        <span>{story.sections[0]["display-name"]}</span>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <a href={story.slug}>
                      <div className="headline">{story.headline}</div>
                    </a>
                  </div>
                );
              }
            })}
            <div className={bottomStyle.center}>
              <button class={bottomStyle.btnMore}>আরও খবর</button>
            </div>
          </div>
        </div>

        <div>
          <article>ENGLISH</article>
          <div className={bottomStyle.storyHolder}>
            {this.state.rightColumn.map((story, i) => {
              if (i == 0) {
                return (
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
                    <div>
                      <div className="title-midiam">{story.headline}</div>
                      <div className="section-time">
                        <span>{story.sections[0]["display-name"]}</span>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <a href={story.slug}>
                      <div className="headline">{story.headline}</div>
                    </a>
                  </div>
                );
              }
            })}
            <div className={bottomStyle.center}>
              <button class={bottomStyle.btnMore}>আরও খবর</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomLineStories;
