
let Flm = [
    [
      "1",
      "1999",
      "11Param",
      "111P1aram"
    ],
    [
      "2",
      "2Param",
      "22Param",
      "222Param"
    ],
    [
      "3",
      "2016",
      "33Param",
      "333Param"
    ],
        [
      "4",
      "2014",
      "66Param",
      "666Param"
    ],
        [
      "5",
      "2014",
      "888Param",
      "8Param"
    ],
        [
      "6",
      "1988",
      "988Param",
      "9888Param"
    ],
        [
      "7",
      "1990",
      "44444Param",
      "555Param"
    ],
        [
      "8",
      "2010",
      "765Param",
      "765Param"
    ],
        [
      "9",
      "2000",
      "765Param",
      "66Param"
    ],
        [
      "10",
      "1909",
      "0Param",
      "00Param"
    ]
  ]



$(document).ready(function() {

$("#Film").DataTable({
	"aaData" : Flm,
	"lengthMenu": [5, 10, 50, 100],
	"order": [[1, "asc"]]
});

$("#My").tooltipster({
    content:  $("#Info").detach()
});

$("#specialTooltip").tooltipster({
    content: $("#specialTooltipContent").detach()
});

})
