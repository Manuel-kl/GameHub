export const toggleSidebarMixin = {
    data() {
        return {
            sidebarOpen: false,
        }
    },
    methods: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen

        },
        closeSidebar() {
            this.sidebarOpen = false;

        }
    }
}