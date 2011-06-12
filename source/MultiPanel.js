/* Copyright 2009-2011 Hewlett-Packard Development Company, L.P. All rights reserved. */
enyo.kind({
	name: "MultiPanel",
	kind: enyo.VFlexBox,
	components: [
		{name: "slidingPane", kind: "SlidingPane", flex: 1, components: [
			{name: "left", width: "16em", kind:"SlidingView", components: [
					{kind: "PageHeader", components: [
						{kind: "Image", src: "images/account_icon.png"},
						{content: "Darthmario", flex: 1}
					]},
					{kind: "Scroller", flex: 1, components: [
						//Insert your components here
					]},
					{kind: "Toolbar", components: [
						{kind: "GrabButton", content:"Tester"}
					]}
			]},
			{name: "middle", width: "16em", kind:"SlidingView", peekWidth: 50, components: [
					{kind: "Header", content:"My Project"},
					{kind: "Scroller", flex: 1, components: [
						//Insert your components here
					]},
					{kind: "Toolbar", components: [
						{kind: "GrabButton"}
					]}
			]},
			{name: "right", kind:"SlidingView", peekWidth: 100, flex: 1, components: [
					{kind: "Header", content:"My Tasks"},
					{kind: "Scroller", flex: 1, components: [
						//Insert your components here
					]},
					{kind: "Toolbar", components: [
						{kind: "GrabButton"}
					]}
			]}
		]}
	]
});