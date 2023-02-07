import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (table.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/HomeView.vue')
    },

    {
        path: '/table',
        name: 'table',
        // route level code-splitting
        // this generates a separate chunk (table.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/TableView.vue')
    }, {
        path: '/scorers',
        name: 'scorers',
        // route level code-splitting
        // this generates a separate chunk (scorers.[hash].js) for this route
        // which is lazy-load
        // route level code-ed when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/ScorersView.vue')
    }, {
        path: '/matches',
        name: 'matches',
        // this generates a separate chunk (matches.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/MatchesView.vue')
    }, {
        path: '/results',
        name: 'results',
        // route level code-splitting
        // this generates a separate chunk (results.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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