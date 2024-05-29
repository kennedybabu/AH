import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: '',
    isTitle: true,
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
        id: 4,
        label: 'Training',
        icon: 'bx-receipt',
        parentId: 3,
        subItems: [
          {
            id: 5,
            label: 'Add Training',
            link: '/courses/add-training',
            parentId: 4,
          },
          {
            id: 6,
            label: 'Training List',
            link: '/courses/trainings',
            parentId: 4,
          },
        ],
      },
    ],
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
        parentId: 7,
      },
    ],
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
        parentId: 9,
      },
      {
        id: 11,
        label: 'Groups',
        link: '/groups/group-list',
        parentId: 9,
      },
    ],
  },
  {
    id: 12,
    label: 'Seeds Distribution',
    icon: 'file-text',
    subItems: [
      {
        id: 13,
        label: 'ToTs',
        link: '/seeds-distribution/tot',
        parentId: 11,
      },
      {
        id: 14,
        label: 'Farmers',
        link: '/seeds-distribution/farmer',
        parentId: 11,
      },
    ],
  },
  {
    id: 15,
    label: 'Reports',
    icon: 'file-text',
    subItems: [
      {
        id: 16,
        label: 'Farmers Report',
        link: '/reports/farmers',
        parentId: 13,
      },
      {
        id: 17,
        label: 'Training Report',
        link: '/reports/trainings',
        parentId: 13,
      },
      {
        id: 18,
        label: 'Groups Report',
        link: '/reports/groups',
        parentId: 13,
      },
      {
        id: 19,
        label: 'Seeds Distribution',
        link: '/reports/seeds-distribution',
        parentId: 13,
      },
      {
        id: 20,
        label: 'ToTs',
        link: '/reports/tots',
        parentId: 13,
      },
    ],
  },
  {
    id: 21,
    label: 'Users',
    icon: 'users',
    subItems: [
      {
        id: 22,
        label: 'Add User',
        link: '/users/add-user',
        parentId: 19,
      },
      {
        id: 23,
        label: 'Users',
        link: '/users/userlist',
        parentId: 19,
      },
    ],
  },
];
