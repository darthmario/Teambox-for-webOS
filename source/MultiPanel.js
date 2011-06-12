/* Copyright 2009-2011 Hewlett-Packard Development Company, L.P. All rights reserved. */
enyo.kind({
	name: "MultiPanel",
	kind: enyo.VFlexBox,
	components: [
		{name: "slidingPane", kind: "SlidingPane", flex: 1, components: [
			{name: "left", width: "320px", kind:"SlidingView", components: [
					{kind: "PageHeader", components: [
						{kind: "Image", src: "images/account_icon.jpg"},
						{content: "Darthmario", className: "enyo-text-ellipsis"},
						
					]},
					{kind: "Scroller", flex: 1, components: [
						//this is the first one
						{kind: "Item", components: [
							{kind: "Group", caption: "Quick Actions", style: "min-height: 0%", components: [{
									style: "padding: 5px", components: [{
										kind: "RadioGroup", value: 1, components: [
											{ label: "Search" },
											{ label: "Task" },
											{ label: "Comment" }
										]},
										{kind: "Input", hint: "Add a new task"},
										{kind: "Picker", value: "Select a Task List", items: [
											"Select a Task List",
											"Task List 1",
											"Task List 2",
											"Task List 3",
											"Task List 4"
										]},
										{kind: "Button", caption: "Add", className: "enyo-button-dark"}
									]
								}]
							},
						]},
						{kind: "Item", components: [
							{kind: "Image", src: "images/account_icon.jpg"},
							{content: "Recent Activity"}
						]},
						{kind: "Item", components: [
							{kind: "Image", src: "images/account_icon.jpg"},
							{content: "My Tasks"}
						]},
						{
							name: "projectsDrawer",
							caption: "Projects",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "Project 1"},
								{kind: "Item", content: "Project 2"},
								{kind: "Item", content: "My New Project"}
							]
						},
						{
							name: "archivedProjectsDrawer",
							caption: "Archived Projects",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "Project 1"},
								{kind: "Item", content: "Project 2"},
								{kind: "Item", content: "My New Project"}
							]
						}
					]},
					{kind: "Toolbar", components: [
						{kind: "GrabButton", content:"Tester"}
					]}
			]},
			{name: "middle", width: "320px", kind:"SlidingView", peekWidth: 50, components: [
					{kind: "PageHeader", components: [
						{kind: "Image", src: "images/account_icon.jpg"},
						{content: "My Project", className: "enyo-text-ellipsis"},
					]},
					{kind: "Scroller", flex: 1, components: [
						//Insert your components here
						{kind: "Item", components: [
							{kind: "Image", src: "images/account_icon.jpg"},
							{content: "Recent Activity"}
						]},
						{
							name: "projectConversationsDrawer",
							caption: "Conversations",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "Conversation 1"},
								{kind: "Item", content: "Conversation 2"},
								{kind: "Item", content: "My New Conversation"}
							]
						},
						{
							name: "projectTaskListsDrawer",
							caption: "Task Lists",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "Task Lists 1"},
								{kind: "Item", content: "Task Lists 2"},
								{kind: "Item", content: "My New Task Lists"}
							]
						},
						{
							name: "projectPagesDrawer",
							caption: "Pages",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "Page 1"},
								{kind: "Item", content: "Page 2"},
								{kind: "Item", content: "My New Page"}
							]
						},
						{kind: "Item", components: [
							{kind: "Image", src: "images/account_icon.jpg"},
							{content: "People and Permissions"}
						]}
					]},
					{kind: "Toolbar", components: [
						{kind: "GrabButton"}
					]}
			]},
			{name: "right", kind:"SlidingView", peekWidth: 100, flex: 1, components: [
					{kind: "PageHeader", components: [
						{kind: "Image", src: "images/account_icon.jpg"},
						{content: "My Tasks", className: "enyo-text-ellipsis"},
					]},
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