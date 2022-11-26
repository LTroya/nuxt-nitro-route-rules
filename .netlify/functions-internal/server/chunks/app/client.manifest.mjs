const client_manifest = {
  "node_modules/nuxt/dist/app/entry.mjs": {
    "resourceType": "script",
    "module": true,
    "file": "entry.9fc08a9b.js",
    "src": "node_modules/nuxt/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "virtual:nuxt:/Users/luis-troya/Experiments/nuxt-nitro-deployments/.nuxt/error-component.mjs"
    ]
  },
  "virtual:nuxt:/Users/luis-troya/Experiments/nuxt-nitro-deployments/.nuxt/error-component.mjs": {
    "resourceType": "script",
    "module": true,
    "file": "error-component.22daeea6.js",
    "src": "virtual:nuxt:/Users/luis-troya/Experiments/nuxt-nitro-deployments/.nuxt/error-component.mjs",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "dynamicImports": [
      "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue",
      "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"
    ]
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "file": "index.d33edf57.js",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_fetch.72f2541d.js"
    ]
  },
  "_fetch.72f2541d.js": {
    "resourceType": "script",
    "module": true,
    "file": "fetch.72f2541d.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "pages/posts/[id].vue": {
    "resourceType": "script",
    "module": true,
    "file": "_id_.318a1b73.js",
    "src": "pages/posts/[id].vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_composables.a16796ba.js",
      "_fetch.72f2541d.js"
    ]
  },
  "_composables.a16796ba.js": {
    "resourceType": "script",
    "module": true,
    "file": "composables.a16796ba.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "pages/posts/index.vue": {
    "resourceType": "script",
    "module": true,
    "file": "index.953139ff.js",
    "src": "pages/posts/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_fetch.72f2541d.js"
    ]
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": {
    "resourceType": "script",
    "module": true,
    "file": "error-404.7148e1a8.js",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_composables.a16796ba.js"
    ],
    "css": []
  },
  "error-404.23f2309d.css": {
    "file": "error-404.23f2309d.css",
    "resourceType": "style"
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": {
    "resourceType": "script",
    "module": true,
    "file": "error-500.4eec94ae.js",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue",
    "isDynamicEntry": true,
    "imports": [
      "_composables.a16796ba.js",
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "css": []
  },
  "error-500.aa16ed4d.css": {
    "file": "error-500.aa16ed4d.css",
    "resourceType": "style"
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-404.css": {
    "resourceType": "style",
    "file": "error-404.23f2309d.css",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-404.css"
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-500.css": {
    "resourceType": "style",
    "file": "error-500.aa16ed4d.css",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-500.css"
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
