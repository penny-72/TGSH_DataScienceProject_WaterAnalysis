var CONFIG = {
 "data": {
  "_lastModified": 1551147696026,
  "hasNameColumn": false,
  "lastModified": 1551147696026,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/20181103year_gp3.xlsx",
  "reader": "excel",
  "sheet": "20181103year_gp3",
  "timeInColumns": true,
  "ddfPath": "./data/20181103year_gp3.xlsx"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "地區",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "地區",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "time"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "time"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "time",
    "use": "indicator",
    "which": "time",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log"
     ]
    },
    "autoconfig": {
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "spaceRef": null,
    "use": "indicator",
    "which": "區域(可搭配Color選取「地區分色」)",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "0": "hsl(270, 80%, 55%)",
     "25": "hsl(202.5, 80%, 55%)",
     "50": "hsl(135, 80%, 55%)",
     "75": "hsl(48, 70%, 62%)",
     "100": "hsl(0, 80%, 55%)",
     "_default": "#ffb600"
    },
    "paletteLabels": null,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "indicator",
    "which": "「地區分色」(Y軸請勿選取)"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "地區"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "0106",
   "endOrigin": null,
   "endSelected": "0106",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "start": "0087",
   "startOrigin": null,
   "startSelected": "0087",
   "step": 1,
   "unit": "year",
   "value": "0106"
  }
 },
 "ui": {
  "buttons": [
   "colors",
   "find",
   "moreoptions",
   "fullscreen",
   "presentation"
  ],
  "chart": {
   "curve": "curveMonotoneX",
   "labels": {
    "min_number_of_entities_when_values_hide": 2
   },
   "whenHovering": {
    "hideVerticalNow": false,
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true,
    "showTooltip": false
   }
  },
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false,
     "panelMode": "show"
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "colors",
    "presentation",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find"
   ]
  },
  "presentation": false,
  "splash": false
 },
 "chartType": "LineChart"
};