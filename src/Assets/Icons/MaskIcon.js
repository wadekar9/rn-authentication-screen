import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MaskIcon = (props) => (
    <Svg
        width="20px"
        height="20px"
        viewBox="0 0 0.6 0.6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0.125 0.2h0.35M0.125 0.2v0.138c0 0.015 0.006 0.028 0.017 0.038l0.076 0.068a0.121 0.121 0 0 0 0.163 0l0.076 -0.068c0.011 -0.01 0.017 -0.023 0.017 -0.038V0.2M0.125 0.2 0.05 0.125m0.425 0.075 0.075 -0.075"
            stroke="#8f99aa"
            strokeWidth={0.05}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default MaskIcon;