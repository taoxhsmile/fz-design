export const hsv2rgb = ({ h, s, v }) => {
  let _r, _g, _b;

  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      (_r = v), (_g = t), (_b = p);
      break;
    case 1:
      (_r = q), (_g = v), (_b = p);
      break;
    case 2:
      (_r = p), (_g = v), (_b = t);
      break;
    case 3:
      (_r = p), (_g = q), (_b = v);
      break;
    case 4:
      (_r = t), (_g = p), (_b = v);
      break;
    case 5:
      (_r = v), (_g = p), (_b = q);
      break;
  }

  return {
    r: Math.round(_r * 255),
    g: Math.round(_g * 255),
    b: Math.round(_b * 255)
  };
};

export const rgb2hsv = ({ r, g, b }) => {
  const _r = r / 255;
  const _g = g / 255;
  const _b = b / 255;

  const max = Math.max(_r, _g, _b);
  const min = Math.min(_r, _g, _b);

  let h,
    s,
    v = max;

  const d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0;
  } else {
    if (max == _r) {
      h = (_g - _b) / d + (_g < _b ? 6 : 0);
    } else if (max == _g) {
      h = (_b - _r) / d + 2;
    } else if (max == _b) {
      h = (_r - _g) / d + 4;
    }

    h /= 6;
  }

  return {
    h: h || 0,
    s: s || 0,
    v: v || 0
  };
};

export const hex2rgb = hex => {
  if (hex.toLowerCase() === "transparent") {
    return { r: 255, g: 255, b: 255 };
  } else {
    const _hex = hex.replace(/^#/, "");

    return {
      r: parseInt(_hex.substr(0, 2), 16),
      g: parseInt(_hex.substr(2, 2), 16),
      b: parseInt(_hex.substr(4, 2), 16)
    };
  }
};

// 自动补0
const dec2twoDigitHex = dec =>
  Number(dec)
    .toString(16)
    .replace(/(^.$)/, "0$1");

export const rgb2hex = ({ r, g, b }) => {
  return `#${dec2twoDigitHex(r)}${dec2twoDigitHex(g)}${dec2twoDigitHex(b)}`;
};

// 将16进制和透明度转换成rgba字符串
export const hex2rgbaStr = (hex, alpha) => {
  const { r, g, b } = hex2rgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// 将rbga转换成字符串
export const rgb2rgbaStr = ({ r, g, b, a = 1 }) =>
  `rgba(${r}, ${g}, ${b}, ${a})`;

//将3位#F00转换成#FF0000
export const formatHex = hex => {
  const v = hex.replace(/^#/, "");
  if (v.length === 6) return hex;
  if (v.length === 3) return `#${v[0]}${v[0]}${v[1]}${v[1]}${v[2]}${v[2]}`;
};

//处理输入的颜色支持 #FFFFFF | rbga(1, 1, 1, 1) | transparent
export const parseColor = c => {
  const color = c.trim().toLowerCase(); // keep lower cases hex in the component
  const rgbaExtractor = /^rgba?\((.*)\)$/;

  if (color.match(/transparent/)) {
    return {
      hex: "transparent",
      alpha: 0
    };
  } else if (color.match(/^#[0-9a-f]{6}$|^#[0-9a-f]{3}$/)) {
    return {
      hex: formatHex(color),
      alpha: 1
    };
  } else if (color.match(rgbaExtractor)) {
    const rgbaStr = rgbaExtractor.exec(color)[1];

    const [r, g, b, a] = rgbaStr.split(",").map(i => i.trim());

    return {
      hex: rgb2hex({
        r: parseInt(r),
        g: parseInt(g),
        b: parseInt(b)
      }),
      alpha: !a ? 1 : parseFloat(a)
    };
  } else {
    return DEFAULT_COLOR;
  }
};

const DEFAULT_COLOR = {
  hex: "#000000",
  alpha: 1
};
