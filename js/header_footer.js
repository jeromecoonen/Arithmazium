// Header lines
var headers = [
  "<meta name='viewport' content='width=device-width, initial-scale=1'>",
  "<meta name='theme-color' content='#fafafa'>",
  "<link rel='stylesheet' href='../css/normalize.css'>",
  "<link rel='stylesheet' href='../css/main.css'>",
  "<link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>",
  "<link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'>",
  "<link href='https://fonts.googleapis.com/css?family=Work Sans' rel='stylesheet'>",
  "<link href='https://fonts.googleapis.com/css?family=Work Sans:wght@400;800' rel='stylesheet'>"
];

var banner = [
  "<div>",
  "<svg viewbox='0 0 1000 80' xmlns='http://www.w3.org/2000/svg'>",
  "<a href='../index.html'>",
  "<rect x=0 y=0 width=1000 height=80 class='arith-ban-box'/>",
  "<text x=10 y=68 class='arith-ban-back'>",
  "<tspan>11.001001000011111101101010100010001000</tspan>",
  "</text>",
  "<text x=60 y=55 class='arith-ban-front'>",
  "<tspan>Arithmazium</tspan>",
  "</text>",
  "</a>",
  "</svg>",
  "</div>",
];

function my_insert(s) {
    document.write(s);
}

function put_headers() {
  headers.forEach(my_insert);
}

function put_banner() {
  banner.forEach(my_insert);
}

function put_nav(prev, home, next) {
  document.write("<div class='next-prev'>");
  document.write("<a href='_NEXT_' class='next round'>Next</a>".replace("_NEXT_", next));
  document.write("<a href='_HOME_' class='tree round'>Home</a>".replace("_HOME_", home));
  document.write("<a href='_PREVIOUS_' class='previous round'>Previous</a>".replace("_PREVIOUS_", prev));
  document.write("</div>");
}

put_headers();
