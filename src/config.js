/*
 /yNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
yMMMNdyyyyyyyyyyyyyydMMMyyyyyyyyyyyyyyyyyyydMNyyyyyyyyyyyyyyyyhNMMMdyyyyyyyyyyydMMdyyyyyyyyyyydMMMMM
MMMh.                -mM.                  +Md                 `+MM+            ::            oMMMMM
MMM:   +oooooooooo/   +Msoooooo+   .ooooooohMd   .ooooooooooo`   mM+   /ooooooo`   ooooooo:   oMMMMM
MMM-   mMMMMMMMMMMh   +MMMMMMMMm   -MMMMMMMMMd   :MMMMMMMMMMM-   dM+   yMMMMMMN`   MMMMMMMs   oMMMMM
MMM-   mMMMMMMMMMMh   +MMMMMMMMm   -MMMMMMMMMd   :MMMMMMMMMMM-   dM+   yMMMMMMN`   MMMMMMMs   oMMMMM
MMM-   mMMMMMMMMMMh   +MMMMMMMMm   -MMMMMMMMMd   :MMMNNNNNNNN-   mM+   yMMMMMMN`   MMMMMMMs   oMMMMM
MMM-   mMMMMMMMMMMh   +MMMMMMMMm   -MMMMMMMMMd   :MNs-.......  .sNM+   yMMMMMMN`   MMMMMMMs   oMMMMM
MMM-   mMMMMMMMMMMh   +MMMMMMMMm   -MMMMMMMMMd   :MNo........  .sMM+   yMMMMMMN`   MMMMMMMs   oMMMMM
MMM-   mMMMMMMMMMMh   +MMMMMMMMm   -MMMMMMMMMd   :MMMNmmmmmmm.   mM+   yMMMMMMN`   MMMMMMMs   oMMMMM
MMM-   mMMMMMMMMMMh   +MMMMMMMMm   -MMMMMMMMMd   :MMMMMMMMMMM-   dM+   yMMMMMMM:--:MMMMMMMs   oMMMMM
MMM-   mMMMMMMMMMMh   +MMMMMMMMm   -MMMMMMMMMd   :MMMMMMMMMMM-   dM+   yMMMMMMMMNNNMMMMMMMs   oMMMMM
MMM-   ossssssssss+   +MMMMMMMMm   -MMMMMMMMMd   :MMMMMMMMMMM-   dM+   yMMMMMMMMMMMMMMMMMMs   oMMMMM
MMMh`                .dMMMMMMMMm   -MMMMMMMMMd   :MMMMMMMMMMM-   dM+   yMMMMMMMMMMMMMMMMMMs   oMMMMM
yMMMNhssssssssssssssdNMMMMMMMMMNsssyMMMMMMMMMNssshMMMMMMMMMMMysssNMdsssmMMMMMMMMMMMMMMMMMMdsssdMMMMM
 /yNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

 OPERATIONS TERMINAL SYSTEM SOFTWARE
 PROVIDED BY THE DEEPSPACE EXPLORATION AND RESOURCES COMMUNITY (DERC)
 HTTPS://GITHUB.COM/DERCHUB/OTRM                            
 HTTPS://DERC.LINK
*/

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
import mdHistory from "./assets/md/history.md";
import mdExamples from "./assets/md/examples.md";
import mdTheme from "./assets/md/theme.md";
//import LogoBlack from "./assets/logo/otrm-black.svg";
import LogoWhite from "./assets/logo/otrm-white.svg";
import { Widgets } from "otrm";
import Themes from "./themes";


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
const Config = {
    // A theme for this terminal
    //theme: Themes.ORE,
    // A version indicating the current terminal configuration revision. 
    version: 0,
    // The name of the organization/community using the terminal. Not used at the moment.
    organization: "OTRM",
    // This will be displayed on the top left corner of the terminal.
    name: "Terminal",
    // A tagline - used for the login screen and logo widget.
    tagline: "Operations Terminal",
    // A logo - used for the login screen and logo widget.
    logo: LogoWhite,
    //\\//\\//\\//\\//\\//\\
    // Login page 
    login: {
        // Enables the login screen
        enabled: true,
        // Enables the logo on the login screen
        logo: true,
        // Enables the tagline on the login screen. This also accepts a string for a custom message.
        tagline: true,
        // The label displayed of the default action/button on the login page.
        action: "ENTER TERMINAL",
        // Additional actions displayed on the login page.
        actions: false,
    },
    //\\//\\//\\//\\//\\//\\
    // Navigation
    navigation: {
        // Shows the time on the right side of the navigation.
        showTime: true,
        // Shows the date on the right side of the navigation.
        showDate: true,
        // Enables a root/home action in the navigation.
        rootEnabled: true,
        // The label for the root/home action.
        rootLabel: "root",
        // Enables a logout action in the navigation.
        logoutEnabled: true,
        // The label for the logout action/
        logoutLabel: "exit",
        // A list of additional navigation items.
        items: [
            {
                name: "history",
                page: "history",
            },
            {
                name: "examples",
                page: "examples",
            },
            {
                name: "themes",
                page: "themes",
            },
            {
                name: "github",
                open: "https://github.com/DERCHUB/otrm"
            },

        ]
    },
    //\\//\\//\\//\\//\\//\\
    // Pages
    // Please checkout <LINK> for documentation.
    pages: {
        // The root/home page.
        root: {
            // Declares that this page is the root page. Can only be one.
            root: true,
            columns: [
                {
                    size: 4,
                    sections: [
                        [
                            {
                                title: "Resources"
                            },
                            {
                                action: "Ship Loadout Manager",
                                open: "https://erkul.games/",
                            },
                            {
                                action: "Trading Manager",
                                open: "https://uexcorp.space/trade",
                            },
                            {
                                action: "Mining Manager",
                                open: " https://uexcorp.space/mining",
                            },
                            {
                                action: "RSI",
                                open: "https://robertsspaceindustries.com/enlist?referral=STAR-ZNGN-MG6X",
                            },
                        ],
                        [
                            {
                                title: "Welcome",
                            },
                            {
                                subtitle: "Operations Terminal (OTRM)",
                            },
                            {
                                text: "The Operations Terminal System Software allows you to build awesome terminals for your organizations and communities or even can be used as a personal website.",
                            },
                            {
                                text: "It's easy and only requires a simple configuration. It has various widgets but also supports the markdown syntax.",
                            }
                        ],
                        [
                            {
                                title: "Picture of the Day",
                            },
                            {
                                widget: Widgets.Image,
                                image: 'https://i.imgur.com/Sk8DWNY.jpg',
                            },
                        ],
                    ]
                },
                {
                    size: 8,
                    centered: true,
                    noSectionPadding: true,
                    sections: [
                        [
                            {
                                widget: Widgets.Logo,
                            },
                        ]
                    ],
                }
            ]
        },
        history: {
            columns: [
                {
                    size: 12,
                    sections: [
                        [
                            {
                                widget: Widgets.Markdown,
                                source: mdHistory,
                            },
                        ]
                    ],
                }
            ]
        },    
        themes: { 
            columns: [
                {
                    size: 4,
                    sections: [
                        [
                            {
                                widget: Widgets.List,
                                onSelect: "selected",
                                items: Themes.map(theme => ({...theme, highlight: "available"})),
                            },
                        ]
                    ],
                },
                {
                    size: 8,
                    sections: [
                        [
                            {
                                widget: Widgets.Markdown,
                                source: mdTheme,
                                onData: "selected",
                            },
                        ]
                    ],
                }
            ]
        },
        examples: {
            columns: [
                {
                    size: 2,
                    sections: [
                        [
                            {
                                title: "Title"
                            },
                            {
                                subtitle: "Subtitle"
                            },
                            {
                                text: "Normal Text"
                            },
                        ],
                        [
                            {
                                title: "Actions"
                            },
                            {
                                action: "History",
                                page: "history"
                            },
                            {
                                action: "DERC",
                                open: "https://derc.link"
                            }
                        ],
                        [
                            {
                                title: "Themes"
                            },
                            ...Themes.map(theme => ({
                                action: theme.label,
                                callback: {setTheme: theme.value},
                            })),  
                        ],
                        [
                            {
                                title: "Another Section"
                            },
                            {
                                text: "Sections are always aligned automatically."
                            },

                        ],
                    ],
                },
                {
                    size: 4,
                    sections: [
                        [
                            {
                                title: "Picture"

                            },
                            {
                                subtitle: "On a wider column"
                            },
                            {
                                widget: Widgets.Image,
                                image: 'https://i.imgur.com/pl3ypU8.png',
                            },

                        ],
                        [
                            {
                                title: "Video"

                            },
                            {
                                widget: Widgets.Video,
                                video: 'eD3oakXysn4',
                            },

                        ]
                    ],
                },
                {
                    size: 6,
                    sections: [
                        [
                            {
                                subtitle: "Markdown Example"
                            },
                            {
                                widget: Widgets.Markdown,
                                source: mdExamples,
                            },
                        ]
                    ],
                }
            ]
        },
    },
}

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
export default Config;