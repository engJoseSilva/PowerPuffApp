// tests/ShowPage.spec.ts
import { mount } from "@vue/test-utils";
import ShowPage from "./src/views/ShowPage.vue"; // Adjust path as necessary
import { createStore } from "vuex";

// Mock Vuex store
const store = createStore({
  state: {
    showDetails: {
      name: "Powerpuff Girls",
      image: { medium: "http://example.com/image.jpg" },
      summary: "<p>This is the show summary.</p>",
    },
    episodes: [{ id: 1, name: "Episode 1" }],
  },
  actions: {
    fetchShowDetails: jest.fn(),
    fetchEpisodes: jest.fn(),
  },
});

describe("ShowPage.vue", () => {
  it("renders show title and cover image correctly", () => {
    const wrapper = mount(ShowPage, {
      global: { plugins: [store] },
    });

    // Check if the show title is rendered
    expect(wrapper.text()).toContain("Powerpuff Girls");

    // Check if the cover image is rendered with the correct src
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("http://example.com/image.jpg");
  });
});
