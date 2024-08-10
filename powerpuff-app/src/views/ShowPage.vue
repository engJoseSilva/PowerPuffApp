<template>
    <div class="max-w-3xl mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">{{ showDetails.name }}</h1>
        <img
            :src="showDetails.image?.medium"
            alt="Show Cover"
            class="rounded-lg shadow-md mb-6"
        />
        <p v-html="showDetails.summary" class="text-lg text-gray-700 mb-6"></p>

        <h2 class="text-2xl font-semibold mb-4">Episodes</h2>
        <ul class="space-y-2">
            <li
                v-for="episode in episodes"
                :key="episode.id"
                class="border-b pb-2"
            >
                <router-link
                    :to="{ name: 'EpisodePage', params: { id: episode.id } }"
                    class="text-blue-500 hover:underline"
                >
                    {{ episode.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

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
</script>
