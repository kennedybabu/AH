import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    // {
    //     id: 1,
    //     label: '',
    //     isTitle: true
    // },
    // {
    //     id: 2,
    //     label: 'MENUITEMS.DASHBOARDS.TEXT',
    //     icon: 'home',
    //     link: '/'
    // },
    // {
    //     id: 3,
    //     label: 'Comm Engagement',
    //     icon: 'grid',
    //     subItems: [
    //         {
    //             id: 4,
    //             label: 'Training',
    //             icon: 'bx-receipt',
    //             parentId: 3,
    //             subItems: [
    //                 {
    //                     id: 5,
    //                     label: 'Add Training',
    //                     link: '/courses/add-training',
    //                     parentId: 4
    //                 },
    //                 {
    //                     id: 6,
    //                     label: 'Training List',
    //                     link: '/courses/trainings',
    //                     parentId: 4
    //                 },
    //             ]
    //         }  
    //     ]
    // },
    // {
    //     id: 7,
    //     label: 'Farmers',
    //     icon: 'users',
    //     subItems: [
    //         {
    //             id: 8,
    //             label: 'Add Farmer',
    //             link: '/farmers/add-farmer',
    //             parentId: 7
    //         } 
    //     ]
    // },
    // {
    //     id: 9,
    //     label: 'Groups',
    //     icon: 'file-text',
    //     subItems: [
    //         {
    //             id: 10,
    //             label: 'Add Group',
    //             link: '/groups/add-group',
    //             parentId: 9
    //         }            
    //     ]
    // },
    // {
    //     id: 11,
    //     label: 'Seeds Distribution',
    //     icon: 'file-text',
    //     subItems: [
    //         {
    //             id: 12,
    //             label: 'ToTs',
    //             link: '/seeds-distribution/tot',
    //             parentId: 11
    //         },
    //         {
    //             id: 13,
    //             label: 'Farmers',
    //             link: '/seeds-distribution/farmer',
    //             parentId: 11
    //         }
    //     ]
    // },
    // {
    //     id: 13,
    //     label: 'Reports',
    //     icon: 'file-text',
    //     subItems: [
    //         {
    //             id: 14,
    //             label: 'Farmers Report',
    //             link: '/reports/farmers',
    //             parentId: 13
    //         },
    //         {
    //             id: 15,
    //             label: 'Training Report',
    //             link: '/reports/trainings',
    //             parentId: 13
    //         },
    //         {
    //             id: 16,
    //             label: 'Groups Report',
    //             link: '/reports/groups',
    //             parentId: 13
    //         },
    //         {
    //             id: 17,
    //             label: 'Seeds Distribution',
    //             link: '/reports/seeds-distribution',
    //             parentId: 13
    //         },
    //         {
    //             id: 18,
    //             label: 'ToTs',
    //             link: '/reports/tots',
    //             parentId: 13
    //         }
    //     ]
    // },
    // {
    //     id: 19,
    //     label: 'Users',
    //     icon: 'users',
    //     subItems: [
    //         {
    //             id: 20,
    //             label: 'Add User',
    //             link: '/',
    //             parentId: 19
    //         },
    //         {
    //             id: 21,
    //             label: 'Users',
    //             link: '/',
    //             parentId: 19
    //         }
    //     ]
    // }

    {
        id: 1,
        label: '',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'home',
        link: '/',
    },
    {
        id: 3,
        label: 'Comm Engagement',
        icon: 'grid',
        subItems: [
            // {
            //     id: 4,
            //     label: 'MENUITEMS.APPS.LIST.CALENDAR',
            //     link: '/apps/calender',
            //     parentId: 3
            // },
            // {
            //     id: 5,
            //     label: 'MENUITEMS.APPS.LIST.CHAT',
            //     link: '/apps/chat',
            //     parentId: 3
            // },
            {
                id: 4,
                label: 'Training',
                icon: 'bx-receipt',
                subItems: [
                    {
                        id: 5,
                        label: 'Add Training',
                        link: '/courses/add-training',
                        parentId: 4
                    },
                    {
                        id: 6,
                        label: 'Training List',
                        link: '/courses/trainings',
                        parentId: 4
                    },
                ]
            },
            // {
            //     id: 7,
            //     label: 'MENUITEMS.APPS.LIST.INVOICES',
            //     icon: 'bx-receipt',
            //     subItems: [
            //         {
            //             id: 8,
            //             label: 'MENUITEMS.APPS.LIST.INVOICELIST',
            //             link: '/apps/invoice-list',
            //             parentId: 7
            //         },
            //         {
            //             id: 9,
            //             label: 'MENUITEMS.APPS.LIST.INVOICEDETAIL',
            //             link: '/apps/invoice-detail',
            //             parentId: 7
            //         },
            //     ]
            // },
            // {
            //     id: 10,
            //     label: 'MENUITEMS.APPS.LIST.CONTACTS',
            //     subItems: [
            //         {
            //             id: 11,
            //             label: 'MENUITEMS.APPS.LIST.USERGRID',
            //             link: '/apps/user-grid',
            //             parentId: 10
            //         },
            //         {
            //             id: 12,
            //             label: 'MENUITEMS.APPS.LIST.USERLIST',
            //             link: '/apps/user-list',
            //             parentId: 10
            //         },
            //         {
            //             id: 13,
            //             label: 'MENUITEMS.APPS.LIST.PROFILE',
            //             link: '/apps/profile',
            //             parentId: 10
            //         }
            //     ]
            // },
            // {
            //     id: 14,
            //     label: 'MENUITEMS.APPS.LIST.BLOG',
            //     badge: {
            //         variant: 'danger',
            //         text: 'MENUITEMS.APPS.BADGE',
            //     },
            //     subItems: [
            //         {
            //             id: 13,
            //             label: 'MENUITEMS.APPS.LIST.BLOGGRID',
            //             link: '/apps/blog-grid',
            //             parentId: 12
            //         },
            //         {
            //             id: 14,
            //             label: 'MENUITEMS.APPS.LIST.BLOGLIST',
            //             link: '/apps/blog-list',
            //             parentId: 12
            //         },
            //         {
            //             id: 15,
            //             label: 'MENUITEMS.APPS.LIST.BLOGDETAILS',
            //             link: '/apps/blog-detail',
            //             parentId: 12
            //         }
            //     ]
            // }
        ]
    },
    {
        id: 7,
        label: 'Farmers',
        icon: 'users',
        subItems: [
            {
                id: 8,
                label: 'Add Farmer',
                link: '/farmers/add-farmer',
                parentId: 7
            },
            // {
            //     id: 18,
            //     label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
            //     link: '/account/register1',
            //     parentId: 16
            // },

            // {
            //     id: 19,
            //     label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
            //     link: '/account/recoverpw',
            //     parentId: 16
            // },
            // {
            //     id: 20,
            //     label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
            //     link: '/account/lock-screen',
            //     parentId: 16
            // },
            // {
            //     id: 21,
            //     label: 'MENUITEMS.AUTHENTICATION.LIST.LOGOUT',
            //     link: '/account/logout',
            //     parentId: 16
            // },
            // {
            //     id: 22,
            //     label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
            //     link: '/account/confirm-mail',
            //     parentId: 16
            // },
            // {
            //     id: 23,
            //     label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
            //     link: '/account/email-verification',
            //     parentId: 16
            // },
            // {
            //     id: 24,
            //     label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
            //     link: '/account/two-step-verification',
            //     parentId: 16
            // }
        ]
    },
    {
        id: 9,
        label: 'Groups',
        icon: 'file-text',
        subItems: [
            {
                id: 10,
                label: 'Add Group',
                link: '/groups/add-group',
                parentId: 9
            },
            // {
            //     id: 27,
            //     label: 'MENUITEMS.PAGES.LIST.MAINTENANCE',
            //     link: '/pages/maintenance',
            //     parentId: 25
            // },
            // {
            //     id: 28,
            //     label: 'Coming Soon',
            //     link: '/pages/coming-soon',
            //     parentId: 25
            // },
            // {
            //     id: 29,
            //     label: 'MENUITEMS.PAGES.LIST.TIMELINE',
            //     link: '/pages/timeline',
            //     parentId: 25
            // },
            // {
            //     id: 30,
            //     label: 'MENUITEMS.PAGES.LIST.FAQS',
            //     link: '/pages/faqs',
            //     parentId: 25
            // },
            // {
            //     id: 31,
            //     label: 'MENUITEMS.PAGES.LIST.PRICING',
            //     link: '/pages/pricing',
            //     parentId: 25
            // },
            // {
            //     id: 32,
            //     label: 'MENUITEMS.PAGES.LIST.ERROR404',
            //     link: '/pages/404',
            //     parentId: 25
            // },
            // {
            //     id: 32,
            //     label: 'MENUITEMS.PAGES.LIST.ERROR500',
            //     link: '/pages/500',
            //     parentId: 25
            // },
        ]
    },
    // {
    //     id: 34,
    //     label: 'Seeds Distribution',
    //     isTitle: true
    // },
    {
        id: 11,
        label: 'Seeds Distribution',
        icon: 'briefcase',
        subItems: [
            {
                id: 12,
                label: 'ToTs',
                link: '/seeds-distribution/tot',
                parentId: 11
            },
            {
                id: 13,
                label: 'Farmers',
                link: '/seeds-distribution/farmer',
                parentId: 11
            },
            // {
            //     id: 38,
            //     label: 'MENUITEMS.COMPONENTS.LIST.CARDS',
            //     link: '/ui/cards',
            //     parentId: 35
            // },
            // {
            //     id: 39,
            //     label: 'MENUITEMS.COMPONENTS.LIST.CAROUSEL',
            //     link: '/ui/carousel',
            //     parentId: 35
            // },
            // {
            //     id: 40,
            //     label: 'MENUITEMS.COMPONENTS.LIST.DROPDOWNS',
            //     link: '/ui/dropdowns',
            //     parentId: 35
            // },
            // {
            //     id: 41,
            //     label: 'MENUITEMS.COMPONENTS.LIST.GRID',
            //     link: '/ui/grid',
            //     parentId: 35
            // },
            // {
            //     id: 42,
            //     label: 'MENUITEMS.COMPONENTS.LIST.IMAGES',
            //     link: '/ui/images',
            //     parentId: 35
            // },
            // {
            //     id: 44,
            //     label: 'MENUITEMS.COMPONENTS.LIST.MODALS',
            //     link: '/ui/modals',
            //     parentId: 35
            // },
            // {
            //     id: 44,
            //     label: 'MENUITEMS.COMPONENTS.LIST.OFFCANVAS',
            //     link: '/ui/Offcanvas',
            //     parentId: 35
            // },
            // {
            //     id: 46,
            //     label: 'MENUITEMS.COMPONENTS.LIST.PROGRESSBAR',
            //     link: '/ui/progressbars',
            //     parentId: 35
            // },
            // {
            //     id: 44,
            //     label: 'MENUITEMS.COMPONENTS.LIST.PLACEHOLDERS',
            //     link: '/ui/placeholders',
            //     parentId: 35
            // },
            // {
            //     id: 48,
            //     label: 'MENUITEMS.COMPONENTS.LIST.TABS',
            //     link: '/ui/tabs-accordions',
            //     parentId: 35
            // },
            // {
            //     id: 49,
            //     label: 'MENUITEMS.COMPONENTS.LIST.TYPOGRAPHY',
            //     link: '/ui/typography',
            //     parentId: 35
            // },
            // {
            //     id: 49,
            //     label: 'MENUITEMS.COMPONENTS.LIST.TOASTS',
            //     link: '/ui/toasts',
            //     parentId: 35
            // },
            // {
            //     id: 50,
            //     label: 'MENUITEMS.COMPONENTS.LIST.VIDEO',
            //     link: '/ui/video',
            //     parentId: 35
            // },
            // {
            //     id: 51,
            //     label: 'MENUITEMS.COMPONENTS.LIST.GENERAL',
            //     link: '/ui/general',
            //     parentId: 35
            // },
            // {
            //     id: 52,
            //     label: 'MENUITEMS.COMPONENTS.LIST.COLORS',
            //     link: '/ui/colors',
            //     parentId: 35
            // },
            // {
            //     id: 52,
            //     label: 'MENUITEMS.COMPONENTS.LIST.UTILITIES',
            //     link: '/ui/utilities',
            //     parentId: 35
            // }
        ]
    },
    {
        id: 14,
        label: 'Reports',
        icon: 'gift',
        subItems: [
            {
                id: 15,
                label: 'Farmers Report',
                link: '/reports/farmers',
                parentId: 14
            },
            {
                id: 16,
                label: 'Training Report',
                link: '/reports/trainings',
                parentId: 14
            },
            {
                id: 17,
                label: 'Groups Reports',
                link: '/reports/groups',
                parentId: 14
            },
            {
                id: 18,
                label: 'Seeds Distribution',
                link: '/reports/seeds-distribution',
                parentId: 14
            },
            {
                id: 19,
                label: 'ToTs',
                link: '/reports/tots',
                parentId: 14
            }
        ]
    }
];

