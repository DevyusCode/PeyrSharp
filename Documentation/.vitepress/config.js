export default {
    title: 'PeyrSharp',
    description: 'A C# library designed to make developers\' job easier.',
    lastUpdated: true,
    outDir: '../docs',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/get-started' },
            { text: 'Reference', link: '/reference' },
        ],
        repo: 'Leo-Corporation/PeyrSharp',
        docsDir: 'documentation',
        docsBranch: 'main',
        editLink: {
            pattern: 'https://github.com/Leo-Corporation/PeyrSharp/edit/main/Documentation/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 Léo Corporation'
        },
        socialLinks: [
            {
                icon: 'github', link: 'https://github.com/Leo-Corporation/PeyrSharp'
            },
            {
                icon: 'twitter', link: 'https://twitter.com/LeoCorpNews'
            },
            {
                icon: 'youtube', link: 'https://www.youtube.com/channel/UC283Dtf6EJ8eKfRoo0ISmqg'
            }
        ],
        outline: [1, 3],
        sidebar: {
            '/core/': sidebar(),
            'get-started': sidebar()
        }
    }
}

function sidebar() {
    return [
        {
            text: 'Guid',
            collapsible: true,
            items: [
                {
                    text: 'GuidGen',
                    link: '/core/guid'
                },
                {
                    text: 'GuidOptions',
                    link: '/core/guid-options'
                }
            ]
        },
        {
            text: 'Password',
            collapsible: true,
            items: [
                {
                    text: 'Password',
                    link: '/core/password'
                }
            ]
        },
        {
            text: 'Maths',
            collapsible: true,
            items: [
                {
                    text: 'Geometry',
                    collapsible: true,
                    link: '/core/maths/geometry',
                    items: [
                        {
                            text: 'Circle',
                            link: '/core/maths/geometry/circle'
                        },
                        {
                            text: 'Cone',
                            link: '/core/maths/geometry/cone'
                        },
                        {
                            text: 'Cube',
                            link: '/core/maths/geometry/cube'
                        },
                        {
                            text: 'Cylinder',
                            link: '/core/maths/geometry/cylinder'
                        },
                        {
                            text: 'Diamond',
                            link: '/core/maths/geometry/diamond'
                        },
                        {
                            text: 'Hexagon',
                            link: '/core/maths/geometry/hexagon'
                        },
                        {
                            text: 'Pyramid',
                            link: '/core/maths/geometry/pyramid'
                        },
                        {
                            text: 'Rectangle',
                            link: '/core/maths/geometry/rectangle'
                        },
                        {
                            text: 'Sphere',
                            link: '/core/maths/geometry/sphere'
                        },
                        {
                            text: 'Triangle',
                            link: '/core/maths/geometry/triangle'
                        },
                    ]
                },
                {
                    text: 'Algebra',
                    link: '/core/maths/algebra'
                }
            ]
        },
    ];
}