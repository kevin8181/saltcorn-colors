/* jshint esversion:8*/

const colorPicker = {
  type: "Color",
  isEdit: true,
  run: (name, initialValue, attributes, htmlClass) => {
    htmlClass = "color" + (Math.floor(Math.random() * 10000) + 1);
    return `
      <div class="colorPickerContainer ${htmlClass}"></div>
      <script type="module">
        createColorPicker("${name}", "${initialValue}", undefined, "${htmlClass}");
      </script>
    `;
  },
};

const show_text = {
  type: "Color",
  isEdit: false,
  run: (value) => {
    return `${value}`;
  },
};

const show_text_swatch = {
  type: "Color",
  isEdit: false,
  run: (value) => {
    return `
      <div class="showSwatch" style="
        background-color: ${value};
        height: 1rem;
        width: 1rem;
        display: inline-block;
        border-radius: 3px;
        box-shadow: inset 0 0 1px 1px rgba(0,0,0,.1);
        margin-bottom: 0.3rem;
        vertical-align: middle;
      "></div>
      ${value}
    `;
  },
};

const show_swatch = {
  type: "Color",
  isEdit: false,
  run: (value) => {
    return `
      <div class="showSwatch" style="
        background-color: ${value};
        height: 1rem;
        width: 1rem;
        display: inline-block;
        border-radius: 3px;
        box-shadow: inset 0 0 1px 1px rgba(0,0,0,.1);
        margin-bottom: 0.3rem;
        vertical-align: middle;
      "></div>
    `;
  },
};

const headers = [
  {
    script: "/plugins/public/saltcorn-colors/main.js",
  },
  {
    css: "/plugins/public/saltcorn-colors/main.css",
  },
];

module.exports = {
  sc_plugin_api_version: 1,
  headers,
  plugin_name: "saltcorn-colors",
  fieldviews: {
    colorPicker,
    show_text,
    show_text_swatch,
    show_swatch,
  },
};
