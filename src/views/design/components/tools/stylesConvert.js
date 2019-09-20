const unit = "px";

function addUnit(value, _unit = unit) {
  if (/^(\d+)|(\d*\.\d+)$/.test(value + "")) {
    return value + _unit;
  } else {
    return value;
  }
}

const converter = {
  width(value) {
    return addUnit(value);
  },
  height(value) {
    return addUnit(value);
  },
  lineHeight(value) {
    return addUnit(value);
  },
  left(value) {
    return addUnit(value);
  },
  top(value) {
    return addUnit(value);
  },
  marginTop(value) {
    return addUnit(value);
  },
  marginLeft(value) {
    return addUnit(value);
  },
  fontSize(value) {
    return addUnit(value);
  },
  borderWidth(value) {
    return addUnit(value);
  },
  borderLeftWidth(value) {
    return addUnit(value);
  },
  borderTopWidth(value) {
    return addUnit(value);
  },
  borderRightWidth(value) {
    return addUnit(value);
  },
  borderBottomWidth(value) {
    return addUnit(value);
  },
  textShadow(value) {
    let result = /((?:\d+\s*){3})(.*)/.exec(value),
      val = result[1],
      color = result[2],
      [hShadow, vShadow, blur] = val.trim().split(" ");

    return `${hShadow + unit} ${vShadow + unit} ${blur + unit} ${color}`;
  },
  boxShadow(value) {
    let result = /((?:\d+\s*){3})(.*)/.exec(value),
      val = result[1],
      color = result[2],
      [hShadow, vShadow, blur] = val.trim().split(" ");

    return `${hShadow + unit} ${vShadow + unit} ${blur + unit} ${color}`;
  },
  font(value) {
    //todo
    let { size } = value;
    return `${size + unit}`;
  },
  border(value) {
    let { width, style, color } = value;
    return `${width + unit} ${style} ${color}`;
  },
  background(value) {
    let { color } = value;
    return color;
  }
};
// 取出需要的style并且统一处理比如添加单位**
// reverse=false时 _styles包含propertys 保留其余删除
export function stylesConvert({ propertys = [], _styles, reverse = false }) {
  let cloneStyles = JSON.parse(JSON.stringify(_styles));

  if (propertys && propertys.length) {
    if (reverse) {
      Object.keys(cloneStyles).forEach(property => {
        if (propertys.indexOf(property) > -1) {
          delete cloneStyles[property];
        }
      });
    } else {
      let tempStyles = {};
      propertys.forEach(property => {
        if (cloneStyles[property] == null) {
          tempStyles[property] = null;
        } else {
          tempStyles[property] = cloneStyles[property];
        }
      });
      cloneStyles = tempStyles;
    }
  }

  Object.keys(cloneStyles).forEach(property => {
    if (cloneStyles[property] && converter[property]) {
      cloneStyles[property] = converter[property](cloneStyles[property]);
    }
  });

  return cloneStyles;
}
