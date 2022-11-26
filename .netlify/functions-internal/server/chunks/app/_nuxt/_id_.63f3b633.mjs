import { a as useRoute } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useHead } from './composables.7df7491e.mjs';
import { u as useFetch } from './fetch.a8e26e2e.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
      "$HDv9hEssD8"
    )), __temp = await __temp, __restore(), __temp);
    const { data: response } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/date", "$WB8aVFcEQx")), __temp = await __temp, __restore(), __temp);
    useHead({ title: post.title });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p>Current date: ${ssrInterpolate(unref(response).currentDate)}</p><h1>Post title: ${ssrInterpolate(unref(post).title)}</h1><p>Post body:</p><p>${ssrInterpolate(unref(post).body)}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.63f3b633.mjs.map
