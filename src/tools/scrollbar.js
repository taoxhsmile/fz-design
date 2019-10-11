let defaultScrollbarWidth = null;
let supportEditScrollbarWidth = false;

export default function getDefaultScrollBarWidth() {
  if (!defaultScrollbarWidth) {
    // Create the measurement node
    var scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);
    // Get the scrollbar width
    defaultScrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    scrollDiv.className += " support-edit-scrollbar-measure";

    let editedScrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    supportEditScrollbarWidth =
      editedScrollbarWidth && defaultScrollbarWidth !== editedScrollbarWidth;
    // Delete the DIV
    document.body.removeChild(scrollDiv);
  }
  return { defaultScrollbarWidth, supportEditScrollbarWidth };
}
