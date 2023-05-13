import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "../dropmenu/Location.css";

const History = () => {
  return (
    <>
      <div>
        <div className="Aimg">
          <img src="./Dropdown/history.jpg" alt="" />
        </div>
        <div className="Acentered">
          <h1>Our History</h1>
        </div>
      </div>
      <React.Fragment>
        <Timeline position="alternate" >
          <TimelineItem >
            <TimelineOppositeContent color="text.secondary" >
              <div className="history">
                <h1>1922</h1>
                <span>
                  The company is incorporated under the name Utility Supply
                  Company.
                </span>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator >
              <TimelineDot  color="primary" />
              <TimelineConnector  />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/handshake.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>1937</h1>
              <span>
                The company opens its first retail store and publishes its first
                office products catalog.
              </span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot  color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/open-book.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>1960</h1>
              <span>
                Management recognizes growing business opportunities in the
                office products wholesale business.
              </span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/handshake.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>1978</h1>
              <span>
                The Company begins to operate exclusively as an office products
                wholesaler and opens its first state-of-the-art distribution
                center.
              </span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary"  />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/distribution.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>1981</h1>
              <span>United Stationers becomes a public company.</span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/publiccompany.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>1992</h1>
              <span>Acquires Stationers Distributing Company.</span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary"  />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/promotion.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>1958</h1>
              <span>Acquired by Associated Stationers.</span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/handshake.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>1996</h1>
              <span>Acquires Azerty.</span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/promotion.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>2000</h1>
              <span>Acquires Lagasse.</span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/handshake.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>2001</h1>
              <span>Acquires Peerless Paper.</span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary"  />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/promotion.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>2005</h1>
              <span>Acquires Sweet Paper.</span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/handshake.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>2012</h1>
              <span>Acquires O.K.I. Supply. </span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/promotion.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>2014</h1>
              <span>Acquires CPO Commerce, MEDCO and G2S. </span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/handshake.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>2019</h1>
              <span>
                Acquired by Sycamore Partners affiliate, working together with
                another Sycamore portfolio company, Staples, Inc.{" "}
              </span>
              </div>

            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary"  />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/handshake.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            <div className="history">

              <h1>October</h1>
              <span>
                Divested the Industrial and Automotive businesses of Essendant
                to One Equity Partners, a private equity firm. This sale
                includes ORS Nasco, Essendant Canada, OKI Middle East, Medco,
                Nestor, and G2S.{" "}
              </span>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img className="himg" src="./Dropdown/deal.svg" alt="" />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </React.Fragment>
      <hr className="Aline"/>

    </>
  );
};

export default History;
