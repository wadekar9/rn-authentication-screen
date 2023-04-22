import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MailIcon = (props) => (
    <Svg
        width="20px"
        height="20px"
        viewBox="0 0 0.6 0.6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0.4 0.3a0.1 0.1 0 1 1 -0.2 0 0.1 0.1 0 0 1 0.2 0Zm0 0v0.037A0.063 0.063 0 0 0 0.463 0.4v0A0.063 0.063 0 0 0 0.525 0.337V0.3A0.225 0.225 0 1 0 0.3 0.525h0.1"
            stroke="#8f99aa"
            strokeWidth={0.049999999999999996}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default MailIcon;