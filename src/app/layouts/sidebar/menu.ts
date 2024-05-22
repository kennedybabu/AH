import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
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
            {
                id: 9,
                label: 'Training',
                icon: 'bx-receipt',
                subItems: [
                    {
                        id: 10,
                        label: 'Add Training',
                        link: '/courses/add-training',
                        parentId: 9
                    },
                    {
                        id: 11,
                        label: 'Training List',
                        link: '/',
                        parentId: 9
                    },
                ]
            }  
        ]
    },
    {
        id: 16,
        label: 'Farmers',
        icon: 'users',
        subItems: [
            {
                id: 17,
                label: 'Add Farmer',
                link: '/',
                parentId: 16
            } 
        ]
    },
    {
        id: 25,
        label: 'Groups',
        icon: 'file-text',
        subItems: [
            {
                id: 26,
                label: 'Add Group',
                link: '/',
                parentId: 25
            }            
        ]
    },
    {
        id: 35,
        label: 'Seeds Distribution',
        icon: 'file-text',
        subItems: [
            {
                id: 26,
                label: 'ToTs',
                link: '/',
                parentId: 35
            },
            {
                id: 27,
                label: 'Farmers',
                link: '/',
                parentId: 35
            }
        ]
    },
    {
        id: 45,
        label: 'Reports',
        icon: 'file-text',
        subItems: [
            {
                id: 26,
                label: 'Farmers Report',
                link: '/',
                parentId: 45
            },
            {
                id: 27,
                label: 'Training Report',
                link: '/',
                parentId: 45
            },
            {
                id: 28,
                label: 'Groups Report',
                link: '/',
                parentId: 45
            },
            {
                id: 29,
                label: 'Seeds Distribution',
                link: '/',
                parentId: 45
            },
            {
                id: 30,
                label: 'ToTs',
                link: '/',
                parentId: 45
            }
        ]
    },
    {
        id: 55,
        label: 'Users',
        icon: 'users',
        subItems: [
            {
                id: 26,
                label: 'Add User',
                link: '/',
                parentId: 55
            },
            {
                id: 27,
                label: 'Users',
                link: '/',
                parentId: 55
            }
        ]
    },


    // {
    //     id: 34,
    //     label: 'MENUITEMS.MENU.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 35,
    //     label: 'MENUITEMS.COMPONENTS.TEXT',
    //     icon: 'briefcase',
    //     subItems: [
    //         {
    //             id: 36,
    //             label: 'MENUITEMS.COMPONENTS.LIST.ALERTS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 37,
    //             label: 'MENUITEMS.COMPONENTS.LIST.BUTTONS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 38,
    //             label: 'MENUITEMS.COMPONENTS.LIST.CARDS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 39,
    //             label: 'MENUITEMS.COMPONENTS.LIST.CAROUSEL',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 40,
    //             label: 'MENUITEMS.COMPONENTS.LIST.DROPDOWNS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 41,
    //             label: 'MENUITEMS.COMPONENTS.LIST.GRID',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 42,
    //             label: 'MENUITEMS.COMPONENTS.LIST.IMAGES',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 44,
    //             label: 'MENUITEMS.COMPONENTS.LIST.MODALS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 44,
    //             label: 'MENUITEMS.COMPONENTS.LIST.OFFCANVAS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 46,
    //             label: 'MENUITEMS.COMPONENTS.LIST.PROGRESSBAR',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 44,
    //             label: 'MENUITEMS.COMPONENTS.LIST.PLACEHOLDERS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 48,
    //             label: 'MENUITEMS.COMPONENTS.LIST.TABS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 49,
    //             label: 'MENUITEMS.COMPONENTS.LIST.TYPOGRAPHY',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 49,
    //             label: 'MENUITEMS.COMPONENTS.LIST.TOASTS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 50,
    //             label: 'MENUITEMS.COMPONENTS.LIST.VIDEO',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 51,
    //             label: 'MENUITEMS.COMPONENTS.LIST.GENERAL',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 52,
    //             label: 'MENUITEMS.COMPONENTS.LIST.COLORS',
    //             link: '/',
    //             parentId: 35
    //         },
    //         {
    //             id: 52,
    //             label: 'MENUITEMS.COMPONENTS.LIST.UTILITIES',
    //             link: '/',
    //             parentId: 35
    //         }
    //     ]
    // },
    // {
    //     id: 53,
    //     label: 'MENUITEMS.EXTENDED.TEXT',
    //     icon: 'gift',
    //     subItems: [
    //         {
    //             id: 54,
    //             label: 'MENUITEMS.EXTENDED.LIST.LIGHTBOX',
    //             link: '/',
    //             parentId: 53
    //         },
    //         {
    //             id: 55,
    //             label: 'MENUITEMS.EXTENDED.LIST.RANGESLIDER',
    //             link: '/',
    //             parentId: 53
    //         },
    //         {
    //             id: 56,
    //             label: 'MENUITEMS.EXTENDED.LIST.SWEETALERT',
    //             link: '/',
    //             parentId: 53
    //         },
    //         {
    //             id: 57,
    //             label: 'MENUITEMS.EXTENDED.LIST.RATING',
    //             link: '/',
    //             parentId: 53
    //         },
    //         {
    //             id: 58,
    //             label: 'MENUITEMS.EXTENDED.LIST.NOTIFICATION',
    //             link: '/',
    //             parentId: 53
    //         }
    //     ]
    // },
    // {
    //     id: 59,
    //     label: 'MENUITEMS.FORMS.TEXT',
    //     icon: 'box',
    //     badge: {
    //         variant: 'danger',
    //         text: 'MENUITEMS.FORMS.BADGE',
    //     },
    //     subItems: [
    //         {
    //             id: 60,
    //             label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
    //             link: '/',
    //             parentId: 59
    //         },
    //         {
    //             id: 61,
    //             label: 'MENUITEMS.FORMS.LIST.VALIDATION',
    //             link: '/',
    //             parentId: 59
    //         },
    //         {
    //             id: 62,
    //             label: 'MENUITEMS.FORMS.LIST.ADVANCED',
    //             link: '/',
    //             parentId: 59
    //         },
    //         {
    //             id: 63,
    //             label: 'MENUITEMS.FORMS.LIST.EDITOR',
    //             link: '/',
    //             parentId: 59
    //         },
    //         {
    //             id: 64,
    //             label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
    //             link: '/',
    //             parentId: 59
    //         },
    //         {
    //             id: 65,
    //             label: 'MENUITEMS.FORMS.LIST.WIZARD',
    //             link: '/',
    //             parentId: 59
    //         },
    //         {
    //             id: 66,
    //             label: 'MENUITEMS.FORMS.LIST.MASK',
    //             link: '/',
    //             parentId: 59
    //         }
    //     ]
    // },
    // {
    //     id: 67,
    //     icon: 'sliders',
    //     label: 'MENUITEMS.TABLES.TEXT',
    //     subItems: [
    //         {
    //             id: 68,
    //             label: 'MENUITEMS.TABLES.LIST.BASIC',
    //             link: '/',
    //             parentId: 67
    //         },
    //         {
    //             id: 69,
    //             label: 'MENUITEMS.TABLES.LIST.ADVANCED',
    //             link: '/',
    //             parentId: 67
    //         }
    //     ]
    // },
    // {
    //     id: 70,
    //     icon: 'pie-chart',
    //     label: 'MENUITEMS.CHARTS.TEXT',
    //     subItems: [
    //         {
    //             id: 71,
    //             label: 'MENUITEMS.CHARTS.LIST.APEX',
    //             link: '/',
    //             parentId: 70
    //         },
    //         {
    //             id: 72,
    //             label: 'MENUITEMS.CHARTS.LIST.ECHARTS',
    //             link: '/',
    //             parentId: 70
    //         },
    //         {
    //             id: 73,
    //             label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
    //             link: '/',
    //             parentId: 70
    //         }
    //     ]
    // },
    // {
    //     id: 74,
    //     label: 'MENUITEMS.ICONS.TEXT',
    //     icon: 'cpu',
    //     subItems: [
    //         {
    //             id: 75,
    //             label: 'MENUITEMS.ICONS.LIST.BOXICONS',
    //             link: '/',
    //             parentId: 74
    //         },
    //         {
    //             id: 76,
    //             label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
    //             link: '/',
    //             parentId: 74
    //         },
    //         {
    //             id: 77,
    //             label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
    //             link: '/',
    //             parentId: 74
    //         },
    //         {
    //             id: 78,
    //             label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
    //             link: '/',
    //             parentId: 74
    //         },
    //     ]
    // },
    // {
    //     id: 79,
    //     label: 'MENUITEMS.MAPS.TEXT',
    //     icon: 'map',
    //     subItems: [
    //         {
    //             id: 80,
    //             label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
    //             link: '/',
    //             parentId: 79
    //         },
    //         {
    //             id: 81,
    //             label: 'MENUITEMS.MAPS.LIST.LEAFLET',
    //             link: '/',
    //             parentId: 79
    //         },
    //         {
    //             id: 81,
    //             label: 'MENUITEMS.MAPS.LIST.AMCHARTS',
    //             link: '/',
    //             parentId: 79,
    //             badge: {
    //                 variant: 'danger',
    //                 text: 'MENUITEMS.APPS.BADGE',
    //             },
    //         }
    //     ]
    // },
    // {
    //     id: 82,
    //     label: 'MENUITEMS.MULTILEVEL.TEXT',
    //     icon: 'share-2',
    //     subItems: [
    //         {
    //             id: 83,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
    //             link: '/',
    //             parentId: 82
    //         },
    //         {
    //             id: 83,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
    //             parentId: 82,
    //             subItems: [
    //                 {
    //                     id: 84,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
    //                     link: '/',
    //                     parentId: 83,
    //                 },
    //                 {
    //                     id: 85,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
    //                     link: '/',
    //                     parentId: 83,
    //                 }
    //             ]
    //         },
    //     ]
    // }
];

