export default {
    title: 'PeyrSharp',
    logo: '/logo.png',
    description: 'A C# library designed to make developers\' job easier.',
    lastUpdated: true,
    outDir: '../docs',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
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
            'core': sidebar(),
            'get-started': superSidebar(),
            '/ui-helpers/': uiHelpersSidebar(),
            "ui-helpers": uiHelpersSidebar(),
            '/env/': envSidebar(),
            'env': envSidebar(),
            '/extensions/': extSidebar(),
            '/extension': extSidebar(),
            'reference': superSidebar(),
            'enumerations': superSidebar(),
            'exceptions': superSidebar()
        }
    }
}

function superSidebar() {
    return [
        {
            text: 'Core',
            collapsible: true,
            items: sidebar()
        },
        ...envSidebar(),
        {
            text: 'Enums',
            collapsible: true,
            items: [
                {
                    text: 'Home',
                    link: '/enumerations'
                }
            ]
        },
        {
            text: 'Exceptions',
            collapsible: true,
            items: [
                {
                    text: 'Home',
                    link: '/exceptions'
                }
            ]
        },
        ...extSidebar(),
        ...uiHelpersSidebar()
    ]
}

function extSidebar() {
    return [
        {
            text: 'Extensions',
            collapsible: true,
            items: [
                {
                    text: 'Home',
                    link: '/extensions'
                },
                {
                    text: 'Array',
                    link: '/extensions/array'
                },
                {
                    text: 'Double',
                    link: '/extensions/double'
                },
                {
                    text: 'Int',
                    link: '/extensions/int'
                },
                {
                    text: 'String',
                    link: '/extensions/string'
                }
            ]
        }
    ]
}

function envSidebar() {
    return [
        {
            text: 'Env',
            collapsible: true,
            items: [
                {
                    text: 'Home',
                    link: '/env'
                },
                {
                    text: 'FileSys',
                    link: '/env/filesys'
                },
                {
                    text: 'Logger',
                    link: '/env/logger'
                },
                {
                    text: 'Sys',
                    link: '/env/system'
                },
                {
                    text: 'Update',
                    link: '/env/update'
                }
            ]
        }
    ]
}

function sidebar() {
    return [
        {
            text: 'Converters',
            collapsible: true,
            items: [
                {
                    text: 'Home',
                    link: '/core/converters'
                },
                {
                    text: 'Angle',
                    link: '/core/converters/angle'
                },
                {
                    text: 'Colors',
                    items: [
                        {
                            text: 'RGB',
                            link: '/core/converters/colors/rgb'
                        },
                        {
                            text: 'HEX',
                            link: '/core/converters/colors/hex'
                        },
                        {
                            text: 'HSV',
                            link: '/core/converters/colors/hsv'
                        },
                    ]
                },
                {
                    text: 'Distances',
                    link: '/core/converters/distances'
                },
                {
                    text: 'Masses',
                    link: '/core/converters/masses'
                },
                {
                    text: 'Storage',
                    link: '/core/converters/storage'
                },
                {
                    text: 'Temperatures',
                    link: '/core/converters/temperatures'
                },
                {
                    text: 'Time',
                    link: '/core/converters/time'
                },
                {
                    text: 'Volumes',
                    link: '/core/converters/volumes'
                },
            ]
        },
        {
            text: 'Crypt',
            collapsible: true,
            items: [
                {
                    text: 'Crypt',
                    link: '/core/crypt'
                }
            ]
        },
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
            text: 'Internet',
            collapsible: true,
            items: [
                {
                    text: 'Internet',
                    link: '/core/internet'
                }
            ]
        },
        {
            text: 'Maths',
            collapsible: true,
            items: [
                {
                    text: 'Home',
                    link: '/core/maths'
                },
                {
                    text: 'Algebra',
                    link: '/core/maths/algebra'
                },
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
                    text: 'Percentages',
                    link: '/core/maths/percentages'
                },
                {
                    text: 'Trigonometry',
                    link: '/core/maths/trigonometry'
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
    ];
}

function uiHelpersSidebar() {
    return [
        {
            text: 'UiHelpers',
            collapsible: true,
            items: [
                {
                    text: 'Home',
                    link: '/ui-helpers'
                },
                {
                    text: 'Screen',
                    link: '/ui-helpers/screen'
                },
                {
                    text: 'WinForms',
                    link: '/ui-helpers/winforms'
                }
            ]
        },
    ];
}