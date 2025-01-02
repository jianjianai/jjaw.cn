import { computed } from "vue";
import { useRoute } from "vue-router"

export function useGithubEditUrl() {
    const route = useRoute();
    return computed(() => {
        let editPath = route.query["edit"] as string | undefined;
        return editPath;
    });
}

export function useGithubEditTitle() {
    const route = useRoute();
    return computed(() => {
        let editTitle = route.query["t"];
        return editTitle;
    })
}