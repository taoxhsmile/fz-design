var a = {
  __type__: "fz-list-vessel",
  __name__: "重复面板",
  _styles: {},
  customFeature: {
    displayType: 1, //单行多行
    columnWidth: 150, //列宽
    column: 1, //列数
    heightType: 1, //高度类型
    pageSize: 10, //每次加载条数
    columnHeight: 100, //列表高度
    totalSize: 4 //总条数
  },
  dataInfo: {
    dataType: 1, //数据类型 动态 | 静态
    data: [], //静态数据
    api: "https://tradeapi.ngmm365.com/trade/queryMyTradeList",
    input: {
      pageNo: {
        type: "static", //静态数据
        value: 1
      },
      pageSize: {
        type: "static", //静态数据
        value: 10
      },
      tradeStatus: {
        type: "static",
        value: 1
      },
      test1: {
        type: "storage",
        value: "system_userId"
      }
    },
    output: {
      title: {
        type: "component",
        value: "component_987654321"
      },
      price: {
        type: "component",
        value: "component_214234423"
      },
      orderNo: {
        type: "component",
        value: "component_1432423432"
      }
    }
  },
  _slots: [
    {
      __type__: "fz-text",
      __name__: "文本",
      _styles: {},
      customFeature: {
        align: "left",
        useTextShadow: 0,
        textShadow: {
          hShadow: 0,
          vShadow: 0,
          blur: 5,
          color: "rgba(0, 0, 0, 1)"
        },
        useBoxShadow: 0,
        boxShadow: {
          hShadow: 0,
          vShadow: 0,
          blur: 5,
          color: "rgba(0, 0, 0, 1)"
        },
        dataObject: true, //是否使用动态数据
        segment: "title" //使用字段的名称
      },
      content: "我是文本"
    }
  ]
};

console.log(a);
