import React from 'react';

export default function ProjectCard(props) {
  const { opMbfmTitle, opMbfmCopy, opMbfmImage } = props;

  return (
    <div className="op-mbfm" data-id="148:913">
      <h1 className="op-mbfm-title inter-bold-midnight-32px" data-id="148:914">
        {opMbfmTitle}
      </h1>
      <p className="op-mbfm-copy inter-normal-blue-charcoal-16px" data-id="148:915">
        {opMbfmCopy}
      </p>
      <div className="op-mbfm-image" style={{ backgroundImage: `url(${opMbfmImage})` }} data-id="148:916"></div>
    </div>
  );
}

