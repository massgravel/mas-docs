"use strict";(self.webpackChunkmas_docs=self.webpackChunkmas_docs||[]).push([[80],{1708:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(4848),s=i(8453);const r={},l="HWID Activation",o={id:"hwid",title:"HWID Activation",description:"Overview",source:"@site/docs/hwid.md",sourceDirName:".",slug:"/hwid",permalink:"/hwid",draft:!1,unlisted:!1,editUrl:"https://github.com/massgravel/mas-docs/tree/main/docs/hwid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Download Windows / Office",permalink:"/genuine-installation-media"},next:{title:"KMS38 Activation",permalink:"/kms38"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"HWID History",id:"hwid-history",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"HWID 1 (Now defunct) (Summer of 2018 - Sep 26 2023)",id:"hwid-1-now-defunct-summer-of-2018---sep-26-2023",level:4},{value:"HWID 2 (Currently working) (03 Oct 2023 - Current)",id:"hwid-2-currently-working-03-oct-2023---current",level:4},{value:"Supported Products",id:"supported-products",level:2},{value:"How to remove HWID?",id:"how-to-remove-hwid",level:2},{value:"Command line Switches",id:"command-line-switches",level:2},{value:"Manual Activation",id:"manual-activation",level:2},{value:"1- From Ready-Made Ticket",id:"1--from-ready-made-ticket",level:3},{value:"2- From Scratch",id:"2--from-scratch",level:3},{value:"Setup Preactivate",id:"setup-preactivate",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function a(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hwid-activation",children:"HWID Activation"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["How to use it? Please find the instructions ",(0,n.jsx)(t.a,{href:"/#download--how-to-use-it",children:"here"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"This activation method supports Windows 10/11 only."}),"\n",(0,n.jsx)(t.li,{children:"This activation method does not store or modify any files in your system."}),"\n",(0,n.jsx)(t.li,{children:"This activation method gives you permanent Windows activation for your system hardware."}),"\n",(0,n.jsx)(t.li,{children:"All activations can be linked to a Microsoft account without any issues."}),"\n",(0,n.jsx)(t.li,{children:"Once the system is activated, this activation cannot be removed because the license is stored in the Microsoft servers and not in the user's system. MS checks the hardware ID (HWID) and if a license is found in their database, the system will automatically activate. This is how official digital license works."}),"\n",(0,n.jsx)(t.li,{children:"Any significant changes to the hardware (such as a motherboard) may deactivate the system. It is possible to reactivate a system that was deactivated because of significant hardware changes, IF your activation, was linked to an online Microsoft account."}),"\n",(0,n.jsx)(t.li,{children:"For activation to succeed, internet connectivity must be enabled. If you are trying to activate without these conditions being met, then the system will auto-activate later when the conditions are met."}),"\n",(0,n.jsxs)(t.li,{children:["The following is required for Windows to reactivate itself after Windows reinstall:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The internet is required. (Only at the time of activation)"}),"\n",(0,n.jsx)(t.li,{children:"The system will auto-activate only if Retail (Consumer) media was used for installing Windows."}),"\n",(0,n.jsx)(t.li,{children:"The system will NOT auto-activate if VL (Business) media was used for the installation. In this case, the user will have to insert the generic Retail/OEM key corresponding to the Windows edition currently running to activate if the user doesn't want to use the script again. (Those keys can be found below on this page)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"hwid-history",children:"HWID History"}),"\n",(0,n.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,n.jsx)(t.h4,{id:"hwid-1-now-defunct-summer-of-2018---sep-26-2023",children:"HWID 1 (Now defunct) (Summer of 2018 - Sep 26 2023)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"In the official upgrade process from Windows 7 to Windows 10, if your copy of Windows 7 was activated, Microsoft provided a digital license for Windows 10 without any cost."}),"\n",(0,n.jsxs)(t.li,{children:["In the background, the upgrade process runs a file named gatherosstate.exe (available in Windows 10/11 ISO) and it checks the license of the current Windows installation. If it detected that it is activated, it generates a valid GenuineTicket.xml ",(0,n.jsx)(t.strong,{children:"ticket"})," which is sent to Microsoft and in return, MS authorizes a license."]}),"\n",(0,n.jsx)(t.li,{children:"So, if we can convince the gatherosstate.exe file that the conditions are met for ticket generation by fooling it, it will generate a valid ticket, which can be used to get the valid digital license."}),"\n",(0,n.jsxs)(t.li,{children:["How to convince gatherosstate.exe that Windows is activated?",(0,n.jsx)(t.br,{}),"\n","There are two methods for it.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"1-"})," Place a ",(0,n.jsx)(t.a,{href:"https://github.com/asdcorp/Integrated_Patcher_3",children:"custom slc.dll"})," file beside gatherosstate.exe:",(0,n.jsx)(t.br,{}),"\n","gatherosstate.exe uses the system's ",(0,n.jsx)(t.code,{children:"C:\\Windows\\System32\\slc.dll"})," file to gather the system's info. If we place a custom slc.dll file beside gatherosstate.exe, it can send rubbish data to it, then it will simply accept it and generate a valid ticket.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"2-"})," ",(0,n.jsx)(t.a,{href:"https://github.com/asdcorp/GamersOsState",children:"Modify"})," the gatherosstate.exe file directly so that it doesn't check the system's activation status at all and create a valid ticket."]}),"\n",(0,n.jsxs)(t.li,{children:["You can find the workings of this old method here: ",(0,n.jsx)(t.a,{href:"https://github.com/massgravel/MAS-Legacy-Methods",children:"MAS-Legacy-Methods"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Microsoft ",(0,n.jsx)(t.a,{href:"https://devicepartner.microsoft.com/en-us/communications/comm-windows-ends-installation-path-for-free-windows-7-8-upgrade",children:"made"})," server-side changes to their licensing servers to block the free upgrade, and with that server-side change, this method stopped working. To be clear, only new activation requests coming from new hardware were blocked, already established digital licenses with this method are fine."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"hwid-2-currently-working-03-oct-2023---current",children:"HWID 2 (Currently working) (03 Oct 2023 - Current)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"When Microsoft stopped the free upgrade, it started requiring a genuine valid key in the ticket to authorize a digital license. In the new method, we use only the Installation ID of a genuine, valid key. This gets accepted by the server and allows us to get a digital license for free. Check the manual activation process in below section to know how to make working universal tickets."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Now a question, can Microsoft block the new requests or revoke already established digital licenses?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Revoking the licenses would be too extreme and will face many complications and create a risk of voiding valid licenses. However, they can very easily block the new activation requests for new hardware coming from the methods mentioned here."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"supported-products",children:"Supported Products"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Windows 10/11"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Generic Retail/OEM/MAK Key"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Education"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Education N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"84NGF-MHBT6-FXBX8-QWJK7-DRR8H"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XGVPP-NMH47-7TTHJ-W3FW7-8HV2C"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise LTSB 2015"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"FWN7H-PF93Q-4GGP8-M8RF3-MDWWW"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise LTSB 2016"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"NK96Y-D9CD8-W44CQ-R8YTK-DYJWX"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise LTSC 2019"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"43TBQ-NH92J-XKTM7-KT3KK-P39PB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise N LTSB 2015"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"NTX6B-BRYC2-K6786-F6MVQ-M7V2X"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Enterprise N LTSB 2016"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2DBW3-N2PJG-MVHW3-G7TDK-9HKR4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Home"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"YTMG3-N6DKC-DKB77-7M9GH-8HVX7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Home N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4CPRK-NM3K3-X6XXQ-RXX86-WXCHW"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Home China"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N2434-X9D7W-8PF6X-8DV9T-8TYMD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Home Single Language"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"BT79Q-G7N6G-PGBYW-4YWX6-6F4BT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IoT Enterprise"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XQQYW-NFFMW-XJPBH-K8732-CKFFD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IoT Enterprise Subscription"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"P8Q7T-WNK7X-PMFXY-VXHBG-RRK69"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IoT Enterprise LTSC 2021"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"QPM6N-7J2WJ-P88HH-P3YRH-YY74H"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IoT Enterprise LTSC 2024"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CGK42-GYN6Y-VD22B-BX98W-J8JXD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"IoT Enterprise LTSC Subscription 2024"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N979K-XWD77-YW3GB-HBGH6-D32MH"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pro"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"VK7JG-NPHTM-C97JM-9MPGT-3V66T"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pro N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2B87N-8KFHP-DKV6R-Y2C8J-PKCKT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pro Education"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8PTT6-RNW4C-6V7J2-C2D3X-MHBPB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pro Education N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"GJTYN-HDMQY-FRR76-HVGC7-QPF8P"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pro for Workstations"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"DXG7C-N36C4-C4HTG-X4T3X-2YV77"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pro N for Workstations"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"WYPNQ-8C467-V2W6J-TX4WX-WT2RQ"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"S"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"V3WVW-N2PV2-CGWC3-34QGF-VMJ2C"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"S N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"NH9J3-68WK7-6FB93-4K3DF-DJ4F6"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SE"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"SE N"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"K9VKN-3BGWV-Y624W-MCRMQ-BHDCD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Team"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"XKCNC-J26Q9-KFHD2-FKTHY-KD72Y"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"X86-X64 and ARM64 architecture systems are supported."}),"\n",(0,n.jsx)(t.li,{children:"Any Evaluation version of Windows (i.e. 'EVAL' LTSB/C) cannot be activated."}),"\n",(0,n.jsx)(t.li,{children:"IoTEnterpriseS (LTSC) 2021 key will be used to activate the unsupported EnterpriseS (LTSC) 2021 edition."}),"\n",(0,n.jsx)(t.li,{children:"Windows Server does not support HWID activation."}),"\n",(0,n.jsxs)(t.li,{children:["ServerRdsh edition does not ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-desktop/windows-10-multisession-faq",children:"officially"})," support activation on non-azure systems."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"how-to-remove-hwid",children:"How to remove HWID?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You cannot remove it, just like you cannot remove an official Windows digital license. Once a system is activated, this activation cannot be removed because the license is stored in the Microsoft servers and not in the user's system. MS checks the hardware ID (HWID) and if a license is found in their database, the system will automatically activate."}),"\n",(0,n.jsxs)(t.li,{children:["If you still want to remove the activation for any XYZ reason, you can either use the change edition option in the extras section in MAS ",(0,n.jsx)(t.strong,{children:"or"})," get the KMS key from ",(0,n.jsx)(t.a,{href:"/kms38#supported-products",children:"here"})," and enter this in the Windows settings activation page."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"command-line-switches",children:"Command line Switches"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check ",(0,n.jsx)(t.a,{href:"/command_line_switches",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"manual-activation",children:"Manual Activation"}),"\n",(0,n.jsxs)(t.p,{children:["This is for those who wants to perform manual activation. If you want a tool to do this for you, then check ",(0,n.jsx)(t.a,{href:"/#download--how-to-use-it",children:"here"}),".",(0,n.jsx)(t.br,{}),"\n","We can perform the manual activation process in 2 ways."]}),"\n",(0,n.jsx)(t.h3,{id:"1--from-ready-made-ticket",children:"1- From Ready-Made Ticket"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Make sure the internet is enabled."}),"\n",(0,n.jsx)(t.li,{children:"Open Windows PowerShell as administrator, and enter the following commands in the sequence in which they are given."}),"\n",(0,n.jsxs)(t.li,{children:["Enter the Key (Replace ",(0,n.jsx)(t.code,{children:"<key>"})," with the key from the above list) with the following command:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"slmgr /ipk <key>"})]}),"\n",(0,n.jsxs)(t.li,{children:["Download Universal tickets from ",(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(4742).A+"",children:"here"})," and extract the downloaded file."]}),"\n",(0,n.jsxs)(t.li,{children:["Now enter below code in PowerShell:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"(Get-ItemProperty HKLM:\\SYSTEM\\CurrentControlSet\\Control\\ProductOptions).OSProductPfn"})]}),"\n",(0,n.jsxs)(t.li,{children:["This command will you show you some text like ",(0,n.jsx)(t.code,{children:"Microsoft.Windows.48.X19-98841_8wekyb3d8bbwe"})]}),"\n",(0,n.jsx)(t.li,{children:"You need to find the exact same name ticket file in the folder which you have extracted earlier."}),"\n",(0,n.jsxs)(t.li,{children:["Copy that ticket file and paste it in the following folder:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"C:\\ProgramData\\Microsoft\\Windows\\ClipSVC\\GenuineTicket"})]}),"\n",(0,n.jsxs)(t.li,{children:["Now run below command in PowerShell to apply the ticket:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"clipup -v -o"})]}),"\n",(0,n.jsxs)(t.li,{children:["Activate Windows with the following command:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"slmgr /ato"})]}),"\n",(0,n.jsxs)(t.li,{children:["Check Activation Status with the following command:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"slmgr /xpr"})]}),"\n",(0,n.jsx)(t.li,{children:"Done."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"2--from-scratch",children:"2- From Scratch"}),"\n",(0,n.jsx)(t.p,{children:"In this process, we will perform activation from scratch. This is based on the Universal ticket method. Here, we will create identical tickets that are used in the MAS HWID script and activate the system with them."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Download the file from the official MS link and extract the .cab file.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"https://download.microsoft.com/download/9/A/E/9AE69DD5-BA93-44E0-864E-180F5E700AB4/adk/Installers/14f4df8a2a7fc82a4f415cf6a341415d.cab",children:"https://download.microsoft.com/download/9/A/E/9AE69DD5-BA93-44E0-864E-180F5E700AB4/adk/Installers/14f4df8a2a7fc82a4f415cf6a341415d.cab"})]}),"\n",(0,n.jsxs)(t.li,{children:["Find the file named ",(0,n.jsx)(t.code,{children:"filf8377e82b29deadca67bc4858ed3fba9"})," (Size: 330 KB) and rename it to ",(0,n.jsx)(t.code,{children:"gatherosstate.exe"})]}),"\n",(0,n.jsxs)(t.li,{children:["Make a folder named ",(0,n.jsx)(t.code,{children:"Files"})," in the C drive, ",(0,n.jsx)(t.code,{children:"C:\\Files"})," and copy the ",(0,n.jsx)(t.code,{children:"gatherosstate.exe"})," file into that folder."]}),"\n",(0,n.jsx)(t.li,{children:"Make sure that the internet is enabled."}),"\n",(0,n.jsx)(t.li,{children:"Open Windows PowerShell as administrator and enter the following commands in the sequence in which they are given."}),"\n",(0,n.jsxs)(t.li,{children:["Enter the key (Replace ",(0,n.jsx)(t.code,{children:"<key>"})," with the key from the above list) with the following command:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"slmgr /ipk <key>"})]}),"\n",(0,n.jsxs)(t.li,{children:["Copy the below code all at once and enter it in PowerShell to modify the ",(0,n.jsx)(t.code,{children:"gatherosstate.exe"})," file. This code to modify the file is based on ",(0,n.jsx)(t.a,{href:"https://github.com/asdcorp/GamersOsState",children:"GamersOsState"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'$bytes  = [System.IO.File]::ReadAllBytes("C:\\Files\\gatherosstate.exe")\r\n$bytes[320] = 0xf8\r\n$bytes[321] = 0xfb\r\n$bytes[322] = 0x05\r\n$bytes[324] = 0x03\r\n$bytes[13672] = 0x25\r\n$bytes[13674] = 0x73\r\n$bytes[13676] = 0x3b\r\n$bytes[13678] = 0x00\r\n$bytes[13680] = 0x00\r\n$bytes[13682] = 0x00\r\n$bytes[13684] = 0x00\r\n$bytes[32748] = 0xe9\r\n$bytes[32749] = 0x9e\r\n$bytes[32750] = 0x00\r\n$bytes[32751] = 0x00\r\n$bytes[32752] = 0x00\r\n$bytes[32894] = 0x8b\r\n$bytes[32895] = 0x44\r\n$bytes[32897] = 0x64\r\n$bytes[32898] = 0x85\r\n$bytes[32899] = 0xc0\r\n$bytes[32900] = 0x0f\r\n$bytes[32901] = 0x85\r\n$bytes[32902] = 0x1c\r\n$bytes[32903] = 0x02\r\n$bytes[32904] = 0x00\r\n$bytes[32906] = 0xe9\r\n$bytes[32907] = 0x3c\r\n$bytes[32908] = 0x01\r\n$bytes[32909] = 0x00\r\n$bytes[32910] = 0x00\r\n$bytes[32911] = 0x85\r\n$bytes[32912] = 0xdb\r\n$bytes[32913] = 0x75\r\n$bytes[32914] = 0xeb\r\n$bytes[32915] = 0xe9\r\n$bytes[32916] = 0x69\r\n$bytes[32917] = 0xff\r\n$bytes[32918] = 0xff\r\n$bytes[32919] = 0xff\r\n$bytes[33094] = 0xe9\r\n$bytes[33095] = 0x80\r\n$bytes[33096] = 0x00\r\n$bytes[33097] = 0x00\r\n$bytes[33098] = 0x00\r\n$bytes[33449] = 0x64\r\n$bytes[33576] = 0x8d\r\n$bytes[33577] = 0x54\r\n$bytes[33579] = 0x24\r\n$bytes[33580] = 0xe9\r\n$bytes[33581] = 0x55\r\n$bytes[33582] = 0x01\r\n$bytes[33583] = 0x00\r\n$bytes[33584] = 0x00\r\n$bytes[33978] = 0xc3\r\n$bytes[34189] = 0x59\r\n$bytes[34190] = 0xeb\r\n$bytes[34191] = 0x28\r\n$bytes[34238] = 0xe9\r\n$bytes[34239] = 0x4f\r\n$bytes[34240] = 0x00\r\n$bytes[34241] = 0x00\r\n$bytes[34242] = 0x00\r\n$bytes[34346] = 0x24\r\n$bytes[34376] = 0xeb\r\n$bytes[34377] = 0x63\r\n[System.IO.File]::WriteAllBytes("C:\\Files\\gatherosstatemodified.exe", $bytes)\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Now right click on the file ",(0,n.jsx)(t.code,{children:"gatherosstatemodified.exe"}),", go to properties and set the compatibility mode to Windows XP SP3."]}),"\n",(0,n.jsx)(t.li,{children:"Now we need to generate the ticket, to do that, enter the below command:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$value = (Get-ItemProperty HKLM:\\SYSTEM\\CurrentControlSet\\Control\\ProductOptions).OSProductPfn\r\n\r\nC:\\Files\\gatherosstatemodified.exe /c Pfn=$value`;PKeyIID=465145217131314304264339481117862266242033457260311819664735280\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A GenuineTicket.xml file should be created in the folder ",(0,n.jsx)(t.code,{children:"C:\\Files\\"}),". Now, let's apply it.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"clipup -v -o -altto C:\\Files\\"})]}),"\n",(0,n.jsxs)(t.li,{children:["Activate Windows with the following command:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"slmgr /ato"})]}),"\n",(0,n.jsxs)(t.li,{children:["Check Activation Status with the following command:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"slmgr /xpr"})]}),"\n",(0,n.jsx)(t.li,{children:"Done."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If the system is already activated then, then the created ticket will be a Lockbox ticket. If not, it will be a Downlevel ticket."}),"\n",(0,n.jsxs)(t.li,{children:["To make the exact ticket used in MAS HWID script, make sure system is already activated and fix the time with the below PowerShell command and then initiate the ticket generation process as per the steps mentioned above.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:'Set-TimeZone -Id "UTC"; $date=[datetime]"2022/10/11 12:00";while($true){set-date $date; start-sleep -milliseconds 10}'})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"setup-preactivate",children:"Setup Preactivate"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check the Extract OEM option in the MAS ",(0,n.jsx)(t.code,{children:"Extras"})," section if you want pre-activated Windows installation."]}),"\n",(0,n.jsxs)(t.li,{children:["Further, read ",(0,n.jsx)(t.a,{href:"/oem-folder",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check ",(0,n.jsx)(t.a,{href:"/troubleshoot",children:"here"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},4742:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/files/Tickets-a2c5b276276c43ce40d84e13ed1d85b7.zip"},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>o});var n=i(6540);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);