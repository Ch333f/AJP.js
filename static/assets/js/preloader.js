/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* Adewale Joshua Portfolio (AJP) App
*/


/**
* author: OTechCup
* copyright: Copyright 2022 - new Date().getFullYear(), Exfac Inc.
* credits: ["Mr. O"]
* version: process.env.AJP_VERSION
* maintainer: OTechCup
* email: support@exfac.info
* status: process.env.AJP_ENVIRONMENT_STATUS
*/


// import modules


$(window).on("load", function() {
    windowState = true;
});


const terminal = $(".terminal-shell-prompt");
const command = "sh cezmi.sh && apt-get update";
const update_found = Math.floor(Math.random() * 110);

var windowState = false;
var exitTerminal;
var terminal_msg = $(".terminal-msg");
var i = 0;
var count = 0;
var time = 1;
var output = [
    "CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
    "Initializing cgroup subsys cpuset",
    "Command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet splash acpi_enforce_resources=lax intel_pstate=enable rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7",
    "KERNEL supported cpus:",
    "  Intel GenuineIntel",
    "  AMD AuthenticAMD",
    "  Centaur CentaurHauls",
    "e820: BIOS-provided physical RAM map:",
    "BIOS-e820: [mem 0x00000000c9f7f000-0x00000000c9f95fff] usable",
    "NX (Execute Disable) protection: active",
    "efi: EFI v2.31 by American Megatrends",
    "efi:  ACPI=0xca852000  ACPI 2.0=0xca852000  SMBIOS=0xca100398 ",
    "mtrr_cleanup: can not find optimal value",
    "please specify mtrr_gran_size/mtrr_chunk_size",
    "e820: update [mem 0xcbc00000-0xffffffff] usable ==> reserved",
    "e820: last_pfn = 0xcb000 max_arch_pfn = 0x400000000",
    "Scanning 1 areas for low memory corruption",
    "Base memory trampoline at [ffff880000098000] 98000 size 24576",
    "init_memory_mapping: [mem 0x00000000-0x000fffff]",
    " [mem 0xca047000-0xca05dfff] page 4k",
    "ACPI: XSDT 0x00000000CA852080 000084 (v01 _ASUS_ Notebook 01072009 AMI  00010013)",
    "ACPI: Local APIC address 0xfee00000",
    "No NUMA configuration found",
    "Faking a node at [mem 0x0000000000000000-0x000000042f1fffff]",
    "NODE_DATA(0) allocated [mem 0x42f1e6000-0x42f1eafff]",
    " [ffffea0000000000-ffffea0010bfffff] PMD -> [ffff88041e800000-ffff88042e7fffff] on node 0",
    "fbcon: inteldrmfb (fb0) is primary device",
    "Console: switching to colour frame buffer device 240x67",
    "i915 0000:00:02.0: fb0: inteldrmfb frame buffer device",
    "i915 0000:00:02.0: registered panic notifier",
    "input: HDA Intel PCH Mic as /devices/pci0000:00/0000:00:1b.0/sound/card0/input16",
    "input: HDA Intel PCH Headphone as /devices/pci0000:00/0000:00:1b.0/sound/card0/input17",
    "asus_wmi: Backlight controlled by ACPI video driver",
    "EXT4-fs (sda4): re-mounted. Opts: errors=remount-ro",
    "systemd-journald[346]: Received request to flush runtime journal from PID 1",
    "EXT4-fs (sda2): mounted filesystem with ordered data mode. Opts: (null)",
    "EXT4-fs (sda7): mounted filesystem with ordered data mode. Opts: (null)",
    "audit: type=1400 audit(1436478108.432:2): apparmor=\"STATUS\" operation=\"profile_load\" profile=\"unconfined\" name=\"/usr/lib/lightdm/lightdm-guest-session\" pid=728 comm=\"apparmor_parser\"",
    "bbswitch: version 0.7",
    "bbswitch: Found integrated VGA device 0000:00:02.0: \_SB_.PCI0.GFX0",
    "bbswitch: Found discrete VGA device 0000:01:00.0: \_SB_.PCI0.PEG0.PEGP",
    "ACPI Warning: \_SB_.PCI0.PEG0.PEGP._DSM: Argument #4 type mismatch - Found [Buffer], ACPI requires [Package] (20141107/nsarguments-95)",
    "bbswitch: detected an Optimus _DSM function",
    "pci 0000:01:00.0: enabling device (0000 -> 0003)",
    "bbswitch: Succesfully loaded. Discrete card 0000:01:00.0 is on",
    "bbswitch: disabling discrete graphics",
    "ACPI Warning: \_SB_.PCI0.PEG0.PEGP._DSM: Argument #4 type mismatch - Found [Buffer], ACPI requires [Package] (20141107/nsarguments-95)",
    "Bluetooth: BNEP (Ethernet Emulation) ver 1.3",
    "Bluetooth: BNEP filters: protocol multicast",
    "wlan0: send auth to 00:90:cc:ea:f4:16 (try 1/3)",
    "wlan0: authenticated",
    "iwlwifi 0000:03:00.0 wlan0: disabling HT/VHT due to WEP/TKIP use",
    "iwlwifi 0000:03:00.0 wlan0: disabling HT as WMM/QoS is not supported by the AP",
    "iwlwifi 0000:03:00.0 wlan0: disabling VHT as WMM/QoS is not supported by the AP",
    "wlan0: associate with 00:90:cc:ea:f4:16 (try 1/3)",
    "wlan0: RX AssocResp from 00:90:cc:ea:f4:16 (capab=0x431 status=0 aid=3)",
    "wlan0: associated",
    "vboxdrv: Found 8 processor cores.",
    "vboxdrv: fAsync=0 offMin=0x165 offMax=0x24ab",
    "ip_tables: (C) 2000-2006 Netfilter Core Team",
    "ip6_tables: (C) 2000-2006 Netfilter Core Team",
    "Ebtables v2.0 registered",
    "bridge: automatic filtering via arp/ip/ip6tables has been deprecated. Update your scripts to load br_netfilter if you need this.",
    "device virbr0-nic entered promiscuous mode",
    "nf_conntrack version 0.5.0 (16384 buckets, 65536 max)",
    "virbr0: port 1(virbr0-nic) entered listening state",
    "Initialising...", ""
];


setTimeout(function () {
    runner();
}, 1000);


function runner() {
    terminal_msg[0].innerHTML = (
        update_found + " update found"
    );

    terminal.append(command.charAt(i));

    i++;

    setTimeout(function () {
        if (i < command.length)
            runner();
        else {
            terminal_msg[0].innerHTML = "Applying update...";

            terminal.append("<br />Fetching update...<br />");

            i = 0;

            setTimeout(function () {
                feedbacker();
            }, 1000);
        };
    }, Math.floor(Math.random() * 220) + 50);
}


function feedbacker() {
    terminal.append(" [" + count / 1000 + "] " + output[i] + "<br />");

    if (time % 2 === 0) {
        i++;

        terminal.append(" [" + count / 1000 + "] " + output[i] + "<br />");
    };

    if (time === 3) {
        i++;

        terminal.append(" [" + count / 1000 + "] " + output[i] + "<br />");

        i++;

        terminal.append(" [" + count / 1000 + "] " + output[i] + "<br />");

        i++;

        terminal.append(" [" + count / 1000 + "] " + output[i] + "<br />");
    };

    window.scrollTo(0, document.body.scrollHeight);

    i++;

    time = Math.floor(Math.random() * 4) + 20;

    count += time;

    setTimeout(function () {
        if (i < output.length - 2)
            feedbacker();
        else {
            terminal.append("<br />Updated successfully...<br />");
            
            window.scrollTo(0, document.body.scrollHeight);
            
            terminal_msg[0].innerHTML = "Initialising...";

            exitTerminal = setInterval(function() {
                if (windowState) {
                    setTimeout(function () {
                        $(".preloader").fadeOut("slow");
                    }, 1000);

                    clearInterval(exitTerminal);
                };
            }, 1000);
        };
    }, time);
};
