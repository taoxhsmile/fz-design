module.exports = function() {
  return {
    data: [
      {
        name: "订单列表接口",
        url: "https://tradeapi.ngmm365.com/trade/queryMyTradeList",
        input: {
          pageNo: {
            name: "当前页",
            type: "number"
          },
          pageSize: {
            name: "每页显示个数",
            type: "number"
          },
          tradeStatus: {
            name: "订单状态",
            type: "number"
          }
        },
        desc: "订单列表接口详情",
        output: {
          title: {
            name: "商品名称",
            type: "string"
          },
          price: {
            name: "价格",
            type: "number"
          },
          orderNo: {
            name: "订单编号",
            type: "string"
          },
          tradeStatus: {
            name: "订单状态",
            type: "number"
          }
        }
      }
    ],
    resultCode: 200,
    resultMsg: "success"
  };
};
