/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'home',
    'what-are-skills',
    'specification',
    {
      type: 'category',
      label: 'For skill creators',
      items: [
        'skill-creation/best-practices',
        'skill-creation/optimizing-descriptions',
        'skill-creation/evaluating-skills',
        'skill-creation/using-scripts'
      ],
    },
    {
      type: 'category',
      label: 'For client implementors',
      items: [
        'client-implementation/adding-skills-support'
      ],
    }
  ],
};

export default sidebars;
