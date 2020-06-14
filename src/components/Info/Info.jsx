import React from 'react';
import PropTypes from 'prop-types';

// Take in a phrase and separate the third word in an array
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

function InfoSection({ className, heading, children }) {
  return (
    <section className={`bx--row ${className} info-section`}>
      <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
        <h3 className="info-section__heading">{heading}</h3>
      </div>
      {children}
    </section>
  );
}

function InfoCard({ heading, body, icon }) {
  const splitHeading = createArrayFromPhrase(heading);

  return (
    <div className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">
        {`${splitHeading[0]} `}
        <strong>{splitHeading[1]}</strong>
      </h4>
      <p className="info-card__body">{body}</p>
      {icon}
    </div>
  );
}

InfoSection.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.element,
};

InfoSection.defaultProps = {
  className: '',
  heading: '',
  children: <></>,
};

InfoCard.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  icon: PropTypes.element,
};

InfoCard.defaultProps = {
  heading: '',
  body: '',
  icon: <></>,
};

export { InfoSection, InfoCard };
