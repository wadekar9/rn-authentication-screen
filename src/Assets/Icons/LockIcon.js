import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LockIcon = (props) => (
    <Svg
        fill="#8f99aa"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="20px"
        height="20px"
        viewBox="0 0 2.5 2.5"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
        {...props}
    >
        <Path d="M2.053 1.105h-0.221v-0.211c0 -0.001 0 -0.002 0 -0.003 0 -0.327 -0.266 -0.593 -0.593 -0.593 -0.327 0 -0.593 0.266 -0.593 0.593v0.213h-0.198a0.066 0.066 0 0 0 -0.066 0.066v0.964a0.066 0.066 0 0 0 0.066 0.066h1.605a0.066 0.066 0 0 0 0.066 -0.066V1.171a0.066 0.066 0 0 0 -0.066 -0.066zm-1.058 -0.213c0 -0.134 0.109 -0.244 0.244 -0.244 0.134 0 0.242 0.108 0.244 0.241l0 0.001h0v0.215H0.995v-0.213z" />
    </Svg>
);

export default LockIcon;