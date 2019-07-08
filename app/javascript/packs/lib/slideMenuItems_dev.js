const system_admin = "SYSTEM_ADMIN";
const user_admin = "USER_ADMIN";
const router_admin = "ROUTE_ADMIN";
const operator_user = "OPERATOR_USER";
const normal_user = "NORMAL_USER";

module.exports = [
    {
        type: 'tree',
        icon: 'fa fa-dashboard',
        name: 'AutoMade MenuItem',
        items: [
            // <%=menu_item%>
            // start of Book
            {
                type: 'item',
                icon: 'fa fa-circle-o',
                name: 'BookIndex',
                router: {
                    name: 'BookIndex'
                }
            },

        ]
    },
]
