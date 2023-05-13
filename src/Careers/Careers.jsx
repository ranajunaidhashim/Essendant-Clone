import React from "react";
import "../Careers/Career.css";
const Careers = () => {
  return (
    <>
      <div>
        <div className="Cimg">
          <img src="./images/careers.jpeg" alt="" />
        </div>
        <div className="Ccentered">
          <h1>Join Our Family</h1>
          <h5>
            Essendant is looking for people to join our team. We value a
            diversity of backgrounds and experiences that can help us stay ahead
            in an ever-changing world.
          </h5>
          <div className="crbtn">
            <button>WATCH VIDEO</button>
          </div>
        </div>
      </div>

      <div className="crsection">
        <div className="dis">
          <div className="crtext">
            <h1>Our Values</h1>
            <h5>
              Essendant is a purpose-driven company that strives for more than
              just business success. We treat others with respect, act with
              honesty and integrity, and improve our communities.
            </h5>
          </div>
          <div className="crimg">
            <img src="./images/cvalues.jpeg" alt="" />
          </div>
        </div>
        <div className="dis clr">
          <div className="climg">
            <img src="./images/cjob.jpeg" alt="" />
          </div>
          <div className="cltext">
            <h1>Job Opportunities</h1>
            <h5>
              Essendant offers a variety of career and employment opportunities
              for you in locations across the country. We invite you to browse
              our available corporate or warehouse jobs and submit your resume
              to our recruiting team. If your qualifications are a match for an
              opening, a recruiter will contact you to discuss how to proceed.
            </h5>
            <div className="btnc">
              <button>JOIN OUR TEAM</button>
            </div>
          </div>
        </div>
        <div className="dis">
          <div className="crtext">
            <h1>Benefits</h1>
            <h5>
              Essendant team members are offered a comprehensive benefits
              package. Our goal is to provide our associates and their families
              quality programs that meet a wide variety of needs.
            </h5>
            <div className="btncc">
              <button>DISCOVER THE BENEFITS</button>
            </div>
          </div>
          <div className="crimg">
            <img src="./images/cbenefits.jpeg" alt="" />
          </div>
        </div>
        <div className="dis clr">
          <div className="climg">
            <img src="./images/cequals.jpeg" alt="" />
          </div>
          <div className="cltext">
            <h1>We Are Equals</h1>
            <h5>
              Weaving diversity and inclusion into the fabric of our company
              culture helps Essendant grow as a high-performance organization
              with a purpose and differentiates us as an employer and business
              partner of choice.
            </h5>
          </div>
        </div>
      </div>
   
      <h5 className="ch5">
        Essendant is an Equal Opportunity Employer. All qualified applicants
        will receive consideration for employment without regard to race, color,
        religion, sex, gender identity, sexual orientation, age, national
        origin, protected veteran status, disability, or any other basis
        protected by federal, state, or local law.
      </h5>
      <hr className="Cline" />
    </>
  );
};

export default Careers;
