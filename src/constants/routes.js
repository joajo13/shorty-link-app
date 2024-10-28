export const baseRoutes = {
    home: "/home",
    account: "/account",
    dashboard: "/dashboard",
    analitycs: "/analitycs",
};

export const dashboardRoutes = {
    allUsers: baseRoutes.dashboard + "/users",
    activeUsers: baseRoutes.dashboard + "/users",
    newUsers: baseRoutes.dashboard + "/users?range=7",
}