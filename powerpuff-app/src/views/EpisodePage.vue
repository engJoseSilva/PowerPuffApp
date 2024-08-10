<template>
    <div class="max-w-2xl mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">{{ episode.name }}</h1>
        <img
            :src="episode.image?.medium"
            alt="Episode Cover"
            class="rounded-lg shadow-md mb-6"
        />
        <p v-html="episode.summary" class="text-lg text-gray-700"></p>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const episode = computed(() => store.getters.getEpisodeById(route.params.id));
</script>
