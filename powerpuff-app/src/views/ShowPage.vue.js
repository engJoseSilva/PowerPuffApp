import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const showDetails = computed(() => store.state.showDetails);
const episodes = computed(() => store.state.episodes);
onMounted(async () => {
    if (!showDetails.value.name) {
        await store.dispatch("fetchShowDetails");
        if (showDetails.value.id) {
            await store.dispatch("fetchEpisodes", showDetails.value.id);
        }
    }
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-3xl mx-auto p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-bold mb-4") }, });
    (__VLS_ctx.showDetails.name);
    // @ts-ignore
    [showDetails,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.showDetails.image?.medium)), alt: ("Show Cover"), ...{ class: ("rounded-lg shadow-md mb-6") }, });
    // @ts-ignore
    [showDetails,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg text-gray-700 mb-6") }, });
    __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.showDetails.summary));
    // @ts-ignore
    [showDetails, vHtml,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("space-y-2") }, });
    for (const [episode] of __VLS_getVForSourceType((__VLS_ctx.episodes))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((episode.id)), ...{ class: ("border-b pb-2") }, });
        // @ts-ignore
        const __VLS_0 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'EpisodePage', params: { id: episode.id } })), ...{ class: ("text-blue-500 hover:underline") }, }));
        const __VLS_2 = __VLS_1({ to: (({ name: 'EpisodePage', params: { id: episode.id } })), ...{ class: ("text-blue-500 hover:underline") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ to: (({ name: 'EpisodePage', params: { id: episode.id } })), ...{ class: ("text-blue-500 hover:underline") }, }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        (episode.name);
        // @ts-ignore
        [episodes,];
        __VLS_nonNullable(__VLS_5.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['max-w-3xl'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['space-y-2'];
        __VLS_styleScopedClasses['border-b'];
        __VLS_styleScopedClasses['pb-2'];
        __VLS_styleScopedClasses['text-blue-500'];
        __VLS_styleScopedClasses['hover:underline'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                showDetails: showDetails,
                episodes: episodes,
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
