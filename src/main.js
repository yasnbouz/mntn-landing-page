import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faInstagram, faTwitter, faUserCircle);

createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
