import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackIcon = (props) => (
    <Svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 1.43 1.43"
        enableBackground="new 0 0 52 52"
        xmlSpace="preserve"
        {...props}
    >
        <Path d="M1.337 0.632H0.423c-0.025 0 -0.036 -0.03 -0.019 -0.047l0.264 -0.264c0.017 -0.017 0.017 -0.041 0 -0.058l-0.061 -0.061c-0.017 -0.017 -0.041 -0.017 -0.058 0L0.069 0.688c-0.017 0.017 -0.017 0.041 0 0.058L0.55 1.227c0.017 0.017 0.041 0.017 0.058 0l0.058 -0.058c0.017 -0.017 0.017 -0.041 0 -0.058l-0.264 -0.264c-0.017 -0.019 -0.006 -0.05 0.019 -0.05h0.913c0.022 0 0.041 -0.017 0.041 -0.038v-0.083c0 -0.022 -0.017 -0.044 -0.038 -0.044z" />
    </Svg>
);

export default BackIcon;