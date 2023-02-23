import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'home',

        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/HomeView.vue')
    },

    {
        path: '/table',
        name: 'table',
        props: true,
        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/TableView.vue')
    }, {
        path: '/scorers',
        name: 'scorers',

        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/ScorersView.vue')
    }, {
        path: '/matches',
        name: 'matches',

        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/MatchesView.vue')
    }, {
        path: '/results',
        name: 'results',

        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/ResultsView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },


})
router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
    }
    // Track a pageview in Matomo
    window._paq.push(['setCustomUrl', to.fullPath]);
    window._paq.push(['trackPageView']);
    next()
})

export default router