module.exports = function() {
  return {
    data: [
      {
        id: "10001",
        name: "订单列表接口",
        url: "https://tradeapi.ngmm365.com/trade/queryMyTradeList",
        input: [
          { field: "pageNo", name: "当前页", type: "number" },
          { field: "pageSize", name: "每页显示个数", type: "number" },
          { field: "tradeStatus", name: "订单状态", type: "number" }
        ],
        desc: "订单列表接口详情",
        output: [
          { field: "title", name: "商品名称", type: "string" },
          { field: "price", name: "价格", type: "number" },
          { field: "orderNo", name: "订单编号", type: "string" },
          { field: "tradeStatus", name: "订单状态", type: "number" }
        ],
        field: "data" //用于告诉前端要去哪个字段下面取数据，默认列表接口数据都是放在data下面 如有特殊可在维护的时候设置 如果"data.list"
      },
      {
        id: "10002",
        name: "商品列表接口",
        url: "https://tradeapi.ngmm365.com/goods/list",
        input: [
          { field: "pageNo", name: "当前页", type: "number" },
          { field: "pageSize", name: "每页显示个数", type: "number" },
          { field: "goodsType", name: "商品类型", type: "number" }
        ],
        desc: "根据商品类型查询商品列表",
        output: [
          { field: "id", name: "商品id", type: "string" },
          { field: "title", name: "商品名称", type: "string" },
          { field: "price", name: "价格", type: "number" },
          { field: "desc", name: "商品描述", type: "number" }
        ]
      },
      {
        id: "10003",
        name: "商品分类接口",
        url: "https://tradeapi.ngmm365.com/goods/types",
        input: [],
        desc: "根据商品类型查询商品列表",
        output: [
          { field: "id", name: "类型id", type: "number" },
          { field: "name", name: "类型名称", type: "string" }
        ]
      }
    ],
    resultCode: 200,
    resultMsg: "success"
  };
};
