import controller_0 from "../ux-live-component/live_controller.js";
import "../ux-live-component/live.min.css";
import controller_1 from "../ux-turbo/turbo_controller.js";
import controller_2 from "../../controllers/ad_initializer_controller.js";
export const eagerControllers = {
    "live": controller_0,
    "symfony--ux-turbo--turbo-core": controller_1,
    "ad-initializer": controller_2
};
export const lazyControllers = {
    "fullscreen": () =>
        import ("../../controllers/fullscreen_controller.js"),
    "search": () =>
        import ("../../controllers/search_controller.js"),
    "dropdown": () =>
        import ("../../controllers/dropdown_controller.js"),
    "recently-played": () =>
        import ("../../controllers/recently_played_controller.js"),
    "game-loader": () =>
        import ("../../controllers/game_loader_controller.js"),
    "loading-screen": () =>
        import ("../../controllers/loading_screen_controller.js"),
    "add-to-recently-played": () =>
        import ("../../controllers/add_to_recently_played_controller.js"),
    "slideover": () =>
        import ("../../controllers/slideover_controller.js"),
    "carousel": () =>
        import ("../../controllers/carousel_controller.js"),
    "ad": () =>
        import ("../../controllers/ad_controller.js"),
    "toggle": () =>
        import ("../../controllers/toggle_controller.js"),
    "csrf-protection": () =>
        import ("../../controllers/csrf_protection_controller.js"),
    "update-page": () =>
        import ("../../controllers/update_page_controller.js"),
    "ad-inserter": () =>
        import ("../../controllers/ad_inserter_controller.js"),
    "stars": () =>
        import ("../../controllers/stars_controller.js"),
    "voting": () =>
        import ("../../controllers/voting_controller.js")
};
export const isApplicationDebug = false;