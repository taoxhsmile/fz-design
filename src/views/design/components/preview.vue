<script>
import getBasicComponents from "./basic/index.js";
export default {
  functional: true,
  props: {
    data: Array
  },
  render(h, ctx) {
    const previews = getBasicComponents("preview");
    function _render({ data }) {
      return data.map(componentData => {
        let preview = previews[`${componentData.__type__}Preview`];
        return (
          <preview
            key={componentData.__id__}
            data-cid={componentData.__id__}
            data={componentData}
            scopedSlots={{
              default: function(props) {
                return _render(props);
              }
            }}
          />
        );
      });
    }
    return _render(ctx.props);
  }
};
</script>
