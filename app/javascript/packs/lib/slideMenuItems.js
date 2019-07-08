const system_admin = "SYSTEM_ADMIN";
const user_admin = "USER_ADMIN";
const router_admin = "ROUTE_ADMIN";
const operator_user = "OPERATOR_USER";
const normal_user = "NORMAL_USER";

module.exports = [
    {
        type: 'item',
        isHeader: true,
        authorized_to: {system_admin, user_admin, router_admin, operator_user, normal_user},
        name: 'MAIN NAVIGATION'
    },
    
    
]
