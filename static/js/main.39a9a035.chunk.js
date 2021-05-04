(this["webpackJsonpotrm-starter"]=this["webpackJsonpotrm-starter"]||[]).push([[0],{552:function(e,t,a){"use strict";a.r(t);var i=a(29),s=a(140),o=a(0),n=a.n(o),r=a(127),l=a.n(r),m=a(11),c=a(52),d=a.p+"static/media/history.0dbbfe8c.md",u=a.p+"static/media/example.6e37475d.md",h=a.p+"static/media/theme.c37ab4e8.md",p=[{key:"theme",value:"OTRM",title:"OTRM Theme",label:"OTRM",sublabel:"Mostly Gray Colors",image:"https://raw.githubusercontent.com/DERCHUB/otrm/master/docs/otrm-theme-otrm.png",description:"This is the default theme of the Operations Terminal System Software"},{key:"theme",value:"RNR",title:"Rest and Relax",label:"Rest and Relax",sublabel:"Orange and Yellow",image:"https://raw.githubusercontent.com/DERCHUB/otrm/master/docs/otrm-theme-rnr.png",description:"Theme especially made for the Rest and Relax Company."},{key:"theme",value:"ORE",title:"Ore and Refinery",label:"Ore and Refinery",sublabel:"Blue and Turqouise",image:"https://raw.githubusercontent.com/DERCHUB/otrm/master/docs/otrm-theme-ore.png",description:"A common theme used at Ore trade and sales stations."},{key:"theme",value:"KLETCHER",title:"Klescher",label:"Klescher",sublabel:"Red and Gray",image:"https://raw.githubusercontent.com/DERCHUB/otrm/master/docs/otrm-theme-kletcher.png",description:"A easy and simple theme created for the Klescher Rehabilitation Facility."},{key:"theme",value:"AEGIS",title:"Aegis",label:"Aegis",sublabel:"Blue and Green",image:"https://raw.githubusercontent.com/DERCHUB/otrm/master/docs/otrm-theme-aegis.png",description:"Aegis Weapon System Operational Terminal Theme."},{key:"theme",value:"AEGISREV",title:"AegisRev",label:"AegisRev",sublabel:"Blue and Green",image:"https://raw.githubusercontent.com/DERCHUB/otrm/master/docs/otrm-theme-aegis.png",description:"A reversed Aegis Weapon System Operational Terminal Theme."}],g={version:0,organization:"OTRM",name:"Terminal",tagline:"Operations Terminal",logo:a.p+"static/media/otrm-white.9baedf2d.svg",login:{enabled:!0,logo:!0,tagline:!0,action:"ENTER TERMINAL",actions:!1},navigation:{showTime:!0,showDate:!0,rootEnabled:!0,rootLabel:"root",logoutEnabled:!0,logoutLabel:"exit",items:[{name:"history",page:"history"},{name:"examples",page:"examples"},{name:"themes",page:"themes"},{name:"github",open:"https://github.com/DERCHUB/otrm"}]},pages:{root:{root:!0,columns:[{size:4,sections:[[{title:"Resources"},{action:"Ship Loadout Manager",open:"https://erkul.games/"},{action:"Trading Manager",open:"https://uexcorp.space/trade"},{action:"Mining Manager",open:" https://uexcorp.space/mining"},{action:"RSI",open:"https://robertsspaceindustries.com/enlist?referral=STAR-ZNGN-MG6X"}],[{title:"Welcome"},{subtitle:"Operations Terminal (OTRM)"},{text:"The Operations Terminal System Software allows you to build awesome terminals for your organizations and communities or even can be used as a personal website."},{text:"It's easy and only requires a simple configuration. It has various widgets but also supports the markdown syntax."}],[{title:"Picture of the Day"},{widget:m.b.Image,image:"https://i.imgur.com/Sk8DWNY.jpg"}]]},{size:8,centered:!0,noSectionPadding:!0,sections:[[{widget:m.b.Logo}]]}]},history:{columns:[{size:12,sections:[[{widget:m.b.Markdown,source:d}]]}]},themes:{columns:[{size:4,sections:[[{widget:m.b.List,onSelect:"selected",items:p.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{highlight:"available"})}))}]]},{size:8,sections:[[{widget:m.b.Markdown,source:h,onData:"selected"}]]}]},examples:{columns:[{size:2,sections:[[{title:"Title"},{subtitle:"Subtitle"},{text:"Normal Text"}],[{title:"Actions"},{action:"History",page:"history"},{action:"DERC",open:"https://derc.link"}],[{title:"Themes"}].concat(Object(c.a)(p.map((function(e){return{action:e.label,callback:{setTheme:e.value}}})))),[{title:"Another Section"},{text:"Sections are always aligned automatically."}]]},{size:4,sections:[[{title:"Picture"},{subtitle:"On a wider column"},{widget:m.b.Image,image:"https://i.imgur.com/pl3ypU8.png"}],[{title:"Video"},{widget:m.b.Video,video:"eD3oakXysn4"}]]},{size:6,sections:[[{subtitle:"Markdown Example"},{widget:m.b.Markdown,source:u}]]}]}}},b=a(53),y=function(){var e=Object(o.useState)(g),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(b.jsx)(m.c,{config:a,callback:function(e){console.log("---- payload ",e),e.setTheme&&m.a[e.setTheme]&&n(Object(i.a)(Object(i.a)({},g),m.a[e.setTheme]))}})};l.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[552,1,2]]]);
//# sourceMappingURL=main.39a9a035.chunk.js.map