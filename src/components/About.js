import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import pythonIcon from "@iconify/icons-logos/python";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black", fontSize: "3rem" }}>
            <span className="">{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="275px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Icon
                      icon={reactIcon}
                      style={{ fontSize: "400%", margin: "9% 5%" }}
                    />
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" 
                      style={{
                        width: "48px",
                        height: "48px",
                        margin: "7% 5%",
                      }}
                      alt="express icon"
                    />

                    <Icon
                      icon={pythonIcon}
                      style={{ fontSize: "400%", margin: "9% 5%" }}
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "150%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
