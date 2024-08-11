import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const route = useRoute();
const episode = computed(() => store.getters.getEpisodeById(route.params.id));
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-2xl mx-auto p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl font-bold mb-4") }, });
    (__VLS_ctx.episode.name);
    // @ts-ignore
    [episode,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.episode.image?.medium)), alt: ("Episode Cover"), ...{ class: ("rounded-lg shadow-md mb-6") }, });
    // @ts-ignore
    [episode,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg text-gray-700") }, });
    __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.episode.summary));
    // @ts-ignore
    [episode, vHtml,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['max-w-2xl'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['text-3xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-700'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                episode: episode,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
