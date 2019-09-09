<script>
import getComponents from "./basic/index.js";
import widgetView from "./widgetView";
export default {
  functional: true,
  props: {
    data: Array
  },
  render(h, ctx) {
    const previews = getComponents("preview");
    function _render({ data }) {
      return data.map((componentData, i) => {
        //textPreview、picturePreview****等等
        let preview = previews[`${componentData.__type__}`];
        return (
          <widgetView
            key={componentData.__id__}
            data={componentData}
            list={data}
            index={i}
          >
            <preview
              data-cid={componentData.__id__}
              data={componentData}
              list={data}
              index={i}
              scopedSlots={{
                default: function(props) {
                  return _render(props);
                }
              }}
            />
          </widgetView>
        );
      });
    }
    return _render(ctx.props);
  }
};
</script>
