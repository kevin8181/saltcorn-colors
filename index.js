/* jshint esversion:8*/

const colorPicker = {
  type: "Color",
  isEdit: true,
  configFields: [
    {
      name: "transparency",
      label: "Allow transparency",
      type: "Bool",
    },
    {
      name: "placeholder",
      label: "Placeholder",
      type: "String",
    },
  ],
  run: (name, initialValue, attributes, htmlClass) => {
    htmlClass = "color" + (Math.floor(Math.random() * 10000) + 1);
    return `
      <div class="colorPickerContainer ${htmlClass}"></div>
      <script src="/plugins/public/saltcorn-colors/tinycolor.min.js"></script>
      <script type="module">
        createColorPicker("${name}", "${initialValue}", JSON.parse('${JSON.stringify(attributes)}'), "${htmlClass}");
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
      <div style="
        background-color: ${value};
        height: 1rem;
        width: 1rem;
        display: inline-block;
        border-radius: 3px;
        box-shadow: inset 0 0 3px 1px #0002;
        margin-bottom: 0.3rem;
        vertical-align: middle;
        z-index: 2;
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
      <div style="
        background-color: ${value};
        height: 1rem;
        width: 1rem;
        display: inline-block;
        border-radius: 3px;
        box-shadow: inset 0 0 3px 1px #0002;
        margin-bottom: 0.3rem;
        vertical-align: middle;
        z-index: 2;
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
