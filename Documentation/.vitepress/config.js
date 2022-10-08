export default {
    title: 'PeyrSharp',
    description: 'A C# library designed to make developers\' job easier.',
    base: '/PeyrSharp/',
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
        outline: [1, 3]
    }
}