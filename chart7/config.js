var CONFIG = {
 "data": {
  "_lastModified": 1541542723587,
  "hasNameColumn": false,
  "lastModified": 1541542723587,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/poster用2.xlsx",
  "reader": "excel",
  "sheet": "工作表1",
  "timeInColumns": true,
  "ddfPath": "./data/poster用2.xlsx"
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
   "dim": "地名",
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
   "dim": "地名",
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
    "use": "indicator",
    "which": "月降雨量",
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
    "which": "地名"
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
   "end": "0012",
   "endOrigin": null,
   "endSelected": "0012",
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
   "start": "0001",
   "startOrigin": null,
   "startSelected": "0001",
   "step": 1,
   "unit": "year",
   "value": "0012"
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