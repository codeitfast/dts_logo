let content = document.getElementsByClassName('ic-app-header__logomark')[0]

let svgPath = `<svg class="svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1" id="svg2" viewBox="0 0 1371.2 1893.4399" sodipodi:docname="dts_inverted.svg" inkscape:version="1.2.2 (732a01da63, 2022-12-09)" inkscape:export-filename="dts_inverted.svg" inkscape:export-xdpi="96" inkscape:export-ydpi="96" overflow="visible">
<defs id="defs6">
  <inkscape:path-effect effect="fillet_chamfer" id="path-effect1346" is_visible="true" lpeversion="1" nodesatellites_param="F,0,0,1,0,34.611133,0,1 @ F,0,0,1,0,69.198813,0,1 @ F,0,0,1,0,114.33731,0,1 @ F,0,0,1,0,90.080625,0,1 @ F,0,0,1,0,138.91079,0,1" unit="px" method="auto" mode="F" radius="56" chamfer_steps="1" flexible="false" use_knot_distance="true" apply_no_radius="true" apply_with_radius="true" only_selected="false" hide_knots="false"/>
</defs>
<sodipodi:namedview id="namedview4" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#505050" showgrid="false" inkscape:lockguides="false" inkscape:zoom="0.24928174" inkscape:cx="1524.3796" inkscape:cy="1444.1491" inkscape:window-width="2256" inkscape:window-height="1398" inkscape:window-x="-11" inkscape:window-y="-11" inkscape:window-maximized="1" inkscape:current-layer="g8"/>
<g inkscape:groupmode="layer" inkscape:label="Image" id="g8" id="inner">
  <path class="path" style="display:inline;opacity:1;fill:none;stroke:#ffffff;stroke-width:60;stroke-dasharray:none;stroke-opacity:1" d="m 767.56989,1151.231 -501.1795,0 a 80.303048,80.303048 40.752162 0 1 -79.42188,-68.4395 L 49.585702,163.06685 A 98.526848,98.526848 130.75216 0 1 147.03142,49.984158 H 1253.2213 a 67.578381,67.578381 53.122811 0 1 64.88,86.483812 L 840.56235,1775.296 a 19.781475,19.781475 8.1409567 0 1 -38.77309,-5.5465 l 0.36984,-583.9074 a 34.589218,34.589218 45.018145 0 0 -34.58921,-34.6111 z" id="path667" sodipodi:nodetypes="cccccc" inkscape:original-d="M 802.18102,1151.231 H 197.19158 L 32.694106,49.984158 H 1343.3019 L 801.70127,1908.6603 Z" inkscape:path-effect="#path-effect1346"/>
  <text class="D" xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:923.429px;font-family:'Century Gothic';-inkscape-font-specification:'Century Gothic';display:inline;opacity:1;fill:#006272;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers" x="326.87497" y="914.50635" id="text2105"><tspan sodipodi:role="line" id="tspan2103" x="326.87497" y="914.50635" style="fill:#006272;stroke-width:0">D</tspan></text>
</g>
</svg>`
let svg = `

  <div id="inner">` + svgPath + `</div>`

content.innerHTML = svg

document.getElementsByClassName('ic-app-header__logomark-container')[0].setAttribute('id', 'container')

/*let offset = 0;
const element = document.querySelector('.path');

setInterval(() => {
  offset += 100;
  element.style.strokeDashoffset = offset;
}, 100);*/


//3d below https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
var container = document.getElementById('container');
var inner = document.getElementById('inner');
        
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  inner.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;
var counter = 0;
var updateRate = 10;
function isTimeToUpdate() {
  return counter++ % updateRate === 0;
};
// Init
var container = document.getElementById('container');
var inner = document.getElementById('inner');
// Mouse 
var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
    this.x *= 100
    this.y *= 100
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}
// Track the mouse position relative to the center of the container.
mouse.setOrigin(container);
function update(event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / inner.offsetHeight/2).toFixed(2),
    (mouse.x / inner.offsetWidth/2).toFixed(2)
  );
};

function updateTransformStyle(x, y) {
  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  inner.style.transform = style;
  inner.style.webkitTransform = style;
  inner.style.mozTransform = style;
  inner.style.msTransform = style;
  inner.style.oTransform = style;
};