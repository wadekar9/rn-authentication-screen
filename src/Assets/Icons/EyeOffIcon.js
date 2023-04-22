import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EyeOffIcon = (props) => (
    <Svg
        width="20px"
        height="20px"
        viewBox="0 0 0.6 0.6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.518 0.518a0.025 0.025 0 0 0 0 -0.035l-0.4 -0.4a0.025 0.025 0 0 0 -0.035 0.035L0.13 0.166C0.07 0.208 0.038 0.267 0.038 0.3c0 0.056 0.094 0.188 0.263 0.188 0.048 0 0.09 -0.011 0.125 -0.027l0.057 0.057a0.025 0.025 0 0 0 0.035 0zm-0.131 -0.095 -0.044 -0.044A0.1 0.1 0 0 1 0.21 0.245L0.166 0.201a0.233 0.233 0 0 0 -0.027 0.021C0.107 0.251 0.088 0.285 0.088 0.3c0 0.015 0.02 0.049 0.051 0.078C0.181 0.415 0.236 0.438 0.3 0.438a0.249 0.249 0 0 0 0.087 -0.015zm0.121 -0.02C0.544 0.365 0.563 0.325 0.563 0.3c0 -0.056 -0.094 -0.188 -0.263 -0.188 -0.026 0 -0.05 0.003 -0.073 0.009l0.043 0.043c0.01 -0.001 0.02 -0.002 0.03 -0.002 0.064 0 0.119 0.022 0.161 0.06 0.032 0.028 0.051 0.063 0.051 0.078 0 0.013 -0.015 0.041 -0.04 0.067l0.035 0.035z"
            fill="#8f99aa"
        />
    </Svg>
);

export default EyeOffIcon;