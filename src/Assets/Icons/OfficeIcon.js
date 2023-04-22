import * as React from "react";
import Svg, { Path } from "react-native-svg";

const OfficeIcon = (props) => (
    <Svg
        width="20px"
        height="20px"
        viewBox="0 0 0.375 0.375"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m0.188 0.013 0.006 -0.011a0.013 0.013 0 0 0 -0.011 0L0.188 0.013Zm-0.075 0.2V0.2H0.1v0.013h0.013Zm0.1 0H0.225V0.2h-0.013v0.013ZM0 0.375h0.375v-0.025H0v0.025ZM0.182 0.001l-0.15 0.075 0.011 0.022 0.15 -0.075 -0.011 -0.022ZM0 0.15h0.375V0.125H0v0.025Zm0.343 -0.074 -0.15 -0.075 -0.011 0.022 0.15 0.075 0.011 -0.022ZM0.025 0.138v0.225h0.025v-0.225H0.025Zm0.3 0v0.225h0.025v-0.225h-0.025Zm-0.2 0.225v-0.15H0.1v0.15h0.025ZM0.113 0.225h0.1V0.2h-0.1v0.025ZM0.2 0.213v0.15h0.025v-0.15H0.2Z"
            fill="#8f99aa"
        />
    </Svg>
);

export default OfficeIcon;