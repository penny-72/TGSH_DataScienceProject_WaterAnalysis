var CONFIG = {
 "data": {
  "_lastModified": 1546620851296,
  "hasNameColumn": false,
  "lastModified": 1546620851296,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/20181028_台灣地區用水資料V4.xlsx",
  "reader": "excel",
  "sheet": "工作表3",
  "timeInColumns": true,
  "ddfPath": "./data/20181028_台灣地區用水資料V4.xlsx"
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
    "which": "每人每日平均用水量（公升）",
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
     "_default": "#ffb600"
    },
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "constant",
    "which": "_default"
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
   "end": "0105",
   "endOrigin": null,
   "endSelected": "0105",
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
   "start": "0070",
   "startOrigin": null,
   "startSelected": "0070",
   "step": 1,
   "unit": "year",
   "value": "0105"
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