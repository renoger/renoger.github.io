/* Dactivate left mouse click */
function click (e) {
  if (!e)
    e = window.event;
  if ((e.type && e.type == "contextmenu") || (e.button && e.button == 2) )  {
    if (window.opera)
      window.alert("Sorry: function disabled.");
    return false;
  }

}
if (document.layers)
  document.captureEvents(Event.MOUSEDOWN);
document.onmousedown = click;
document.oncontextmenu = click;