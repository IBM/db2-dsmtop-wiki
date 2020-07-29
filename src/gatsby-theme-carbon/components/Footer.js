import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/support/producthub/db2', linkText: 'Db2 Product Hub' }
  ],
  secondCol: [
    { href: 'https://www.ibm.com/support/knowledgecenter/SSEPGG_11.5.0/com.ibm.db2.luw.welcome.doc/doc/welcome.html', linkText: 'IBM Knowledge Center' }
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
