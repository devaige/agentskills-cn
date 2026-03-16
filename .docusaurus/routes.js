import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '74e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'def'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'aa0'),
            routes: [
              {
                path: '/client-implementation/adding-skills-support',
                component: ComponentCreator('/client-implementation/adding-skills-support', '976'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/home',
                component: ComponentCreator('/home', '60f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/skill-creation/best-practices',
                component: ComponentCreator('/skill-creation/best-practices', '392'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/skill-creation/evaluating-skills',
                component: ComponentCreator('/skill-creation/evaluating-skills', 'e07'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/skill-creation/optimizing-descriptions',
                component: ComponentCreator('/skill-creation/optimizing-descriptions', '436'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/skill-creation/using-scripts',
                component: ComponentCreator('/skill-creation/using-scripts', 'a55'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/specification',
                component: ComponentCreator('/specification', '590'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/what-are-skills',
                component: ComponentCreator('/what-are-skills', 'a89'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
