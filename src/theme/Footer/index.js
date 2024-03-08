import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";

function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  return (
    <div className="footer">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="https://twitter.com/tensfer_hq">
          <img
            src={require("@site/static/img/x.png").default}
            alt="x logo"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://github.com/Tensfer/tensfer-docs"
          style={{ marginLeft: "10px" }}
        >
          <img
            src={require("@site/static/img/github.png").default}
            alt="github logo"
            width={20}
            height={20}
          />
        </a>
      </div>

      <FooterLayout
        style={style}
        links={links && links.length > 0 && <FooterLinks links={links} />}
        logo={logo && <FooterLogo logo={logo} />}
        copyright={copyright && <FooterCopyright copyright={copyright} />}
      />
    </div>
  );
}
export default React.memo(Footer);
