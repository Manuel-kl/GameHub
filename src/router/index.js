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
        path: '/test',
        name: 'test',
        // route level code-splitting
        // this generates a separate chunk (table.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "compe" */ '../views/Test.vue')
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

export default router