import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import classnames from "classnames";

const pageData = [
  {
    jobTitle: "Frontend Engineer",
    company: "Skupos",
    cssClasses: "company-card company-1",
    companyColor: "#19bf82",
    companyUrl: "",
    paragraphs: [
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
    ],
  },
  {
    jobTitle: "Frontend Engineer",
    company: "nimasensor",
    cssClasses: "company-card company-2",
    companyColor: "#ffc00e",
    companyUrl: "",
    paragraphs: [
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
    ],
  },
  {
    jobTitle: "Software Engineer",
    company: "Zymergen",
    cssClasses: "company-card company-3",
    companyColor: "#FFCA18",
    companyUrl: "",
    paragraphs: [
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
    ],
  },
];

const Card = (props) => {
  const { jobTitle, company, cssClasses, paragraphs } = props;
  return (
    <div className="my-24">
      <h3 className="text-2xl">
        {jobTitle} <span style={{ color: "gray" }}>@</span>{" "}
        <a href="/">
          <span className={cssClasses}>{company}</span>
        </a>
      </h3>
      <BulletDropDowns paragraphs={paragraphs} />
    </div>
  );
};

const BulletDropDowns = ({ paragraphs }) => {
  if (!paragraphs || !Array.isArray(paragraphs)) {
    return null;
  }
  return (
    <>
      {paragraphs.map((data, idx) => (
        <JobBullet key={idx} index={idx} {...data} />
      ))}
    </>
  );
};

const JobBullet = ({ short, medium, long, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0 ? true : false);
  const cn = classnames("job-upper", { open: isOpen });
  const cn2 = classnames("job-inner pl-6", { open: isOpen });
  const cn3 = classnames(
    "job-icon",
    { open: isOpen },
    { [`icon-${index + 1}`]: true }
  );
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <p className={cn}>
        <IoIosArrowDropright
          className={cn3}
          style={{ display: "inline-block", marginRight: "8px" }}
        />
        {short} -{" "}
        <span className="job-medium">
          {medium}{" "}
          <AiOutlineCaretDown
            className={cn3}
            style={{ display: "inline-block" }}
          />{" "}
        </span>
      </p>
      <p className={cn2}>{long}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div className="container mx-auto my-40 px-8 lg:px-24">
        {pageData.map((data, idx) => (
          <Card key={idx} {...data} />
        ))}
      </div>
    </>
  );
};

export default Experience;
