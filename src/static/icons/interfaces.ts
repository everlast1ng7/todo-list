import { SVGAttributes } from 'vue';

export interface IIconParams {
    width?: SVGAttributes['width'];
    height?: SVGAttributes['height'];
    color?: SVGAttributes['fill'];
    hoverColor?: string;
    isClicked?: boolean;
}
