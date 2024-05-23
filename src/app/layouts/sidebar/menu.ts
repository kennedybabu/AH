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
        link: '/'
    },
    {
        id: 3,
        label: 'Comm Engagement',
        icon: 'grid',
        subItems: [
            {
                id: 4,
                label: 'Training',
                icon: 'bx-receipt',
                parentId: 3,
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
            }  
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
            } 
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
            }            
        ]
    },
    {
        id: 11,
        label: 'Seeds Distribution',
        icon: 'file-text',
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
            }
        ]
    },
    {
        id: 13,
        label: 'Reports',
        icon: 'file-text',
        subItems: [
            {
                id: 14,
                label: 'Farmers Report',
                link: '/',
                parentId: 13
            },
            {
                id: 15,
                label: 'Training Report',
                link: '/',
                parentId: 13
            },
            {
                id: 16,
                label: 'Groups Report',
                link: '/',
                parentId: 13
            },
            {
                id: 17,
                label: 'Seeds Distribution',
                link: '/',
                parentId: 13
            },
            {
                id: 18,
                label: 'ToTs',
                link: '/',
                parentId: 13
            }
        ]
    },
    {
        id: 19,
        label: 'Users',
        icon: 'users',
        subItems: [
            {
                id: 20,
                label: 'Add User',
                link: '/',
                parentId: 19
            },
            {
                id: 21,
                label: 'Users',
                link: '/',
                parentId: 19
            }
        ]
    }
];

