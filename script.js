let content = document.getElementsByClassName('ic-app-header__logomark')[0]

let svgPath = `<svg class="svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1" id="svg2" viewBox="0 0 1371.2 1893.4399" sodipodi:docname="dts_inverted.svg" inkscape:version="1.2.2 (732a01da63, 2022-12-09)" inkscape:export-filename="dts_inverted.svg" inkscape:export-xdpi="96" inkscape:export-ydpi="96" overflow="visible">
<defs id="defs6">
  <inkscape:path-effect effect="fillet_chamfer" id="path-effect1346" is_visible="true" lpeversion="1" nodesatellites_param="F,0,0,1,0,34.611133,0,1 @ F,0,0,1,0,69.198813,0,1 @ F,0,0,1,0,114.33731,0,1 @ F,0,0,1,0,90.080625,0,1 @ F,0,0,1,0,138.91079,0,1" unit="px" method="auto" mode="F" radius="56" chamfer_steps="1" flexible="false" use_knot_distance="true" apply_no_radius="true" apply_with_radius="true" only_selected="false" hide_knots="false"/>
</defs>
<sodipodi:namedview id="namedview4" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#505050" showgrid="false" inkscape:lockguides="false" inkscape:zoom="0.24928174" inkscape:cx="1524.3796" inkscape:cy="1444.1491" inkscape:window-width="2256" inkscape:window-height="1398" inkscape:window-x="-11" inkscape:window-y="-11" inkscape:window-maximized="1" inkscape:current-layer="g8"/>
<g inkscape:groupmode="layer" inkscape:label="Image" id="g8" id="inner">
  <path class="path" style="display:inline;opacity:1;fill:none;stroke:#ffffff;stroke-width:60;stroke-dasharray:none;stroke-opacity:1" d="m 767.56989,1151.231 -501.1795,0 a 80.303048,80.303048 40.752162 0 1 -79.42188,-68.4395 L 49.585702,163.06685 A 98.526848,98.526848 130.75216 0 1 147.03142,49.984158 H 1253.2213 a 67.578381,67.578381 53.122811 0 1 64.88,86.483812 L 840.56235,1775.296 a 19.781475,19.781475 8.1409567 0 1 -38.77309,-5.5465 l 0.36984,-583.9074 a 34.589218,34.589218 45.018145 0 0 -34.58921,-34.6111 z" id="path667" sodipodi:nodetypes="cccccc" inkscape:original-d="M 802.18102,1151.231 H 197.19158 L 32.694106,49.984158 H 1343.3019 L 801.70127,1908.6603 Z" inkscape:path-effect="#path-effect1346"/>
  <text class="D" xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:923.429px;font-family:'Century Gothic';-inkscape-font-specification:'Century Gothic';display:inline;opacity:1;fill:#ffffff;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers" x="326.87497" y="914.50635" id="text2105"><tspan sodipodi:role="line" id="tspan2103" x="326.87497" y="914.50635" style="fill:#ffffff;stroke-width:0">D</tspan></text>
</g>
</svg>`
let newSvg = `<svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1" id="svg2" viewBox="0 0 1371.2 1893.4399" overflow="visible">
<defs id="defs6"/>
<g id="g8">
  <path class="path" id="path242" style="opacity:1;fill:#006272;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-dasharray:none;paint-order:stroke fill markers" d="M 230.64453,6.9433594 A 195.52575,195.52575 0 0 0 37.255859,231.40234 L 142.4043,934.15625 a 263.37252,263.37252 0 0 0 260.5625,224.40035 l 404.71484,-0.1367 0.84766,558.8301 a 32.579632,32.579632 0 0 0 63.85742,9.0664 L 1309.9941,224.9375 A 170.27646,170.27646 0 0 0 1146.5332,7.0136719 Z M 372.04492,175.77734 h 255.93946 c 57.77611,0 101.86885,3.84146 132.27734,11.52539 42.57188,10.61116 78.89228,29.82037 108.96289,57.62891 39.19315,35.85837 68.41903,81.78069 87.67773,137.76367 19.59658,55.61708 29.39453,119.28325 29.39454,191 0,61.10561 -6.58862,115.25961 -19.76563,162.46094 -13.17701,47.20133 -30.06949,86.35342 -50.67969,117.45508 -20.61019,30.73575 -43.24745,55.06691 -67.91211,72.99609 -24.32678,17.56329 -53.89058,30.91886 -88.6914,40.06641 -34.46295,9.14754 -74.16458,13.72265 -119.10157,13.72265 H 372.04492 Z m 98.32227,94.95118 v 614.71484 h 158.63086 c 48.99145,0 87.33941,-4.93901 115.04492,-14.81836 28.04338,-9.87935 50.34271,-23.7837 66.89844,-41.71289 23.31317,-25.24723 41.38937,-59.0925 54.22851,-101.53711 13.17701,-42.81051 19.76563,-94.58647 19.76563,-155.32617 0,-84.15742 -12.83931,-148.74017 -38.51758,-193.7461 -25.34041,-45.37182 -56.25592,-75.74149 -92.74609,-91.10937 -26.35403,-10.97706 -68.75712,-16.46484 -127.20899,-16.46484 z"/>
</g>
</svg>`
let svg = `

  <div id="inner">` + newSvg + `</div>`

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