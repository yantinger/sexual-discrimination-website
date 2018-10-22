var pie = new d3pie("pieChart", {
  "header": {
    "title": {
      "text": "家庭經濟來源",
      "color": "#ffffff",
      "fontSize": 24,
      "font": "verdana"
    },
    "subtitle": {
      "color": "#999999",
      "fontSize": 10,
      "font": "verdana"
    },
    "titleSubtitlePadding": 12
  },
  "footer": {
    "text": "家庭經濟來源",
    "color": "#999999",
    "fontSize": 15,
    "font": "open sans",
    "location": "bottom-center"
  },
  "size": {
    "canvasHeight": 400,
    "canvasWidth": 600,
    "pieOuterRadius": "85%"
  },
  "data": {
    "content": [
      {
        "label": "父親",
        "value": 85,
        "color": "#3f74eb"
      },
      {
        "label": "母親",
        "value": 24,
        "color": "#f04592"
      },
      {
        "label": "兩者皆是",
        "value": 190,
        "color": "#c0b84c"
      },
      {
        "label": "其他",
        "value": 3,
        "color": "#78ac4d"
      }
    ]
  },
  "labels": {
    "outer": {
      "pieDistance": 25
    },
    "inner": {
      "format": "value"
    },
    "mainLabel": {
      "color": "#cccccc",
      "font": "verdana"
    },
    "percentage": {
      "color": "#e1e1e1",
      "font": "verdana",
      "decimalPlaces": 0
    },
    "value": {
      "color": "#e1e1e1",
      "font": "verdana"
    },
    "lines": {
      "enabled": true,
      "color": "#cccccc"
    },
    "truncation": {
      "enabled": true
    }
  },
  "tooltips": {
    "enabled": true,
    "type": "placeholder",
    "string": "{label}: {value}, {percentage}%"
  },
  "effects": {
    "pullOutSegmentOnClick": {
      "effect": "linear",
      "speed": 400,
      "size": 9
    }
  }
});