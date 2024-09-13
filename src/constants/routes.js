export const baseRoutes = {
    home: "/home",
    account: "/account",
    dashboard: "/dashboard",
    analitycs: "/analitycs",
};

export const dashboardRoutes = {
    allUsers: baseRoutes.dashboard + "/users/all",
    activeUsers: baseRoutes.dashboard + "/users/active",
    newUsers: baseRoutes.dashboard + "/users/new",
}