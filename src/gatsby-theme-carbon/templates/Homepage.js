import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
// import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>What is <strong>dsmtop</strong>?</p>;

const FirstRightText = () => (
  <p>
    The <strong>dsmtop</strong> command is a simple text-based tool for monitoring, similar to the now deprecated db2top command. The dsmtop command can monitor Db2 Version 10.1 and above. It is intended primarily for use on Linux and AIX®, but will also run on, Windows although with some limitations.
  </p>
);

const BannerText = () => <h1>Welcome to the IBM Db2 dsmtop Wiki!</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  )
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
