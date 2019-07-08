import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
import Sample from '../components/Sample'

import DashboardV1 from '../examples/Dashboard.v1'
import DashboardV2 from '../examples/Dashboard.v2'
import InfoBoxExample from '../examples/InfoBoxExample'
import ChartExample from '../examples/ChartExample'
import AlertExample from '../examples/AlertExample'
import ModalExample from '../examples/ModalExample'
import WidgetsExample from '../examples/WidgetsExample'
import APIExample from '../examples/APIExample'

// UI Element Groups
import General from '../pages/ui-elements/General'
import Icons from '../pages/ui-elements/Icons'
import Buttons from '../pages/ui-elements/Buttons'
import Sliders from '../pages/ui-elements/Sliders'
import Timeline from '../pages/ui-elements/Timeline'
import Modals from '../pages/ui-elements/Modals'

// forms
import GeneralElements from '../pages/forms/GeneralElements'
import AdvancedElements from '../pages/forms/AdvancedElements'
// start of Book
import BookIndex from '../../views/books/index'
import BookEdit from '../../views/books/edit'
import BookNew from '../../views/books/new'
//import BookShow from '../../views/books/show'
//<%=import_router_component%>


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        //<%=router_item%>
        // start of Book
        {
            path: '/#/books/index',
            name: 'BookIndex',
            component: BookIndex
        },

        {
            path: '/#/books/new',
            name: 'BookNew',
            component: BookNew
        },

        {
            path: '/#/books/:id/edit',
            name: 'BookEdit',
            component: BookEdit
        },

        //{
          //  path: '/#/books/:id/show',
          //  name: 'BookShow',
          //  component: BookShow
        //},

        {
            path: '/hello2',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/sample',
            name: 'Sample',
            component: Sample
        },
        {
            path: '/dashboard/v1',
            name: 'DashboardV1',
            component: DashboardV1
        },
        {
            path: '/dashboard/v2',
            name: 'DashboardV2',
            component: DashboardV2
        },
        {
            path: '/examples/infobox',
            name: 'InfoBoxExample',
            component: InfoBoxExample
        },
        {
            path: '/examples/chart',
            name: 'ChartExample',
            component: ChartExample
        },
        {
            path: '/examples/alert',
            name: 'AlertExample',
            component: AlertExample
        },
        {
            path: '/examples/modal',
            name: 'ModalExample',
            component: ModalExample
        },
        {
            path: '/examples/widgets',
            name: 'WidgetsExample',
            component: WidgetsExample
        },
        {
            path: '/examples/api-example',
            name: 'APIExample',
            component: APIExample
        },
        {
            path: '/ui-elements/general',
            name: 'General',
            component: General
        },
        {
            path: '/ui-elements/icons',
            name: 'Icons',
            component: Icons
        },
        {
            path: '/ui-elements/buttons',
            name: 'Buttons',
            component: Buttons
        },
        {
            path: '/ui-elements/sliders',
            name: 'Sliders',
            component: Sliders
        },
        {
            path: '/ui-elements/timeline',
            name: 'Timeline',
            component: Timeline
        },
        {
            path: '/ui-elements/modals',
            name: 'Modals',
            component: Modals
        },
        {
            path: '/forms/general-elements',
            name: 'GeneralElements',
            component: GeneralElements
        },
        {
            path: '/forms/advanced-elements',
            name: 'AdvancedElements',
            component: AdvancedElements
        }

    ],
    linkActiveClass: 'active'
})
