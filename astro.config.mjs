import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"

export default defineConfig({
    site: "https://mirrorball.it",
    integrations: [preact()],
})
