/* Copyright 2009-2011 Hewlett-Packard Development Company, L.P. All rights reserved. */
enyo.kind({
	name: "teambox",
	kind: enyo.VFlexBox,
	components: [
		{name: "slidingPane", kind: "SlidingPane", flex: 1, components: [
			{name: "left", width: "320px", kind:"SlidingView", components: [
					{kind: "PageHeader", components: [
						{nodeTag:"div", content:"Darthmario", components: [
							{kind: "Image", src: "images/account_icon.jpg"},
						]},
					]},
					{name: "quickToolsDrawer", kind: "enyo.Drawer", open: true, components: [
						{kind: "Item", components: [
							{kind: "RoundedSearchInput", hint: "Type a new search term"}
						]}
					]},
					{kind: "Scroller", flex: 1, components: [
						//this is the first one
						{kind: "Item", className:"label-padding", tapHighlight: true, components: [
							{nodeTag:"div", className:"label-icon label-activity label-active"},
							{nodeTag:"div", content:"Recent Activity", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{kind: "Item", className:"label-padding", components: [
							{nodeTag:"div", className:"label-icon label-tasks label-active"},
							{nodeTag:"div", content:"My Tasks", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{kind: "Item", name:"draweritemproject", className:"label-padding", onclick: "teamboxDrawer", value: "projectsDrawer", components: [
							{nodeTag:"div", className:"label-icon label-projects label-active"},
							{nodeTag:"div", content:"Projects", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{name: "projectsDrawer", kind: "enyo.Drawer", style:"background-color:#e9e9e9", open: true, components: [
								{kind: "Item", content: "Teambox Community", onConfirm: "deleteItem", name:"Project1", style:"padding:15px 20px;"},
								{kind: "Item", content: "iOS Apps", onConfirm: "deleteItem"},
								{kind: "Item", content: "webOS App", onConfirm: "deleteItem"},
								{kind: "Item", content: "Api Community", onConfirm: "deleteItem"}
							]
						},
						{kind: "Item", className:"label-padding", components: [
							{nodeTag:"div", className:"label-icon label-projects label-inactive"},
							{nodeTag:"div", content:"Archived Projects", className:"label-text-inactive"},
							{nodeTag:"div", className:"clearit"}
						]},
						{name: "archivedProjectsDrawer", kind: "enyo.Drawer", captionClassName: "enyo-item", open: false, components: [
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
					{kind: "PageHeader", style:"background-color:blue; padding:0;", components: [
						{nodeTag:"div", style:"background-color:red;  margin:0; border:none;", components: [
							{nodeTag:"div", className:"label-icon label-projects label-active"},
							{nodeTag:"div", content:"My Project", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
					]},
					{kind: "Scroller", flex: 1, components: [
						//Insert your components here
						{kind: "Item", className:"label-padding", components: [
							{nodeTag:"div", className:"label-icon label-activity label-active"},
							{nodeTag:"div", content:"Recent Activity", className:"label-text", components:[
							]},
							{nodeTag:"div", className:"clearit"}
						]},
						{kind: "Item", className:"label-padding", components: [
							{nodeTag:"div", className:"label-icon label-conversations label-active"},
							{nodeTag:"div", content:"Conversations", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{name: "projectConversationsDrawer", kind: "enyo.Drawer", open: false, components: [
							{kind: "Item", content: "Conversation 1"},
							{kind: "Item", content: "Conversation 2"},
							{kind: "Item", content: "My New Conversation"}
						]},
						{kind: "Item", className:"label-padding", components: [
							{nodeTag:"div", className:"label-icon label-tasklists label-active"},
							{nodeTag:"div", content:"Task Lists", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{name: "projectTaskListsDrawer", kind: "enyo.Drawer", open: true, components: [
								{kind: "Item", content: "Development"},
								{kind: "Item", content: "UI Revisions"},
								{kind: "Item", content: "Future Functionality"},
								{kind: "Item", content: "Case Study Questions"}
						]},
						{kind: "Item", className:"label-padding", components: [
							{nodeTag:"div", className:"label-icon label-pages label-active"},
							{nodeTag:"div", content:"Pages", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{name: "projectPagesDrawer", kind: "enyo.Drawer", open: false, components: [
								{kind: "Item", content: "Page 1"},
								{kind: "Item", content: "Page 2"},
								{kind: "Item", content: "My New Page"}
						]},
						{kind: "Item", className:"label-padding", components: [
							{nodeTag:"div", className:"label-icon label-files label-active"},
							{nodeTag:"div", content:"Files", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{kind: "Item", className:"label-padding", components: [
							{nodeTag:"div", className:"label-icon label-people label-active"},
							{nodeTag:"div", content:"People &amp; Permissions", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{name: "projectPeopleDrawer", kind: "enyo.Drawer", open: false, components: [
							{kind: "Item", content: "Person1"},
							{kind: "Item", content: "Person2"},
							{kind: "Item", content: "Person3"}
						]}
					]},
					{kind: "Toolbar", components: [
						{kind: "GrabButton"}
					]}
			]},
			{name: "right", kind:"SlidingView", peekWidth: 100, flex: 1, components: [
					{kind: "PageHeader", components: [
						{nodeTag:"div", components: [
							{nodeTag:"div", className:"label-icon label-tasklists label-active"},
							{nodeTag:"div", content:"Selected Task List", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
					]},
					{kind: "Scroller", flex: 1, components: [
						{
							name: "taskListDrawer2",
							caption: "Synergy Connector",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "comment 1"},
								{kind: "Item", content: "Comment 2"},
								{kind: "Item", content: "Comment 3"}
							]
						},
						{
							name: "taskListDrawer1",
							caption: "Exhibition Mode",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "Nate Craddock - June 5 - On both the phones and tablet webOS has a special mode for when the device is docked on the touchstone."},
								{kind: "Item", content: "Pablo Villalba - June 5 - This is how the Chrome extension shows a digest.. it could be overkill for your case, but I figured it'd be nice to throw a screenshot into this thread"},
								{kind: "Item", content: "Nate Craddock - June 5 - this looks pretty much exactly like what I was thinking! :) I have some other unclear ideas as well, but I'm going to wait to develop them a bit more until after I get the first version in more shape."}
							]
						},
						{
							name: "taskListDrawer3",
							caption: "Just Type Integration",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "comment 1"},
								{kind: "Item", content: "Comment 2"},
								{kind: "Item", content: "Comment 3"}
							]
						},
						{
							name: "taskListDrawer4",
							caption: "cached items so that they're viewable when not on wifi or cellular connection.",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "comment 1"},
								{kind: "Item", content: "Comment 2"},
								{kind: "Item", content: "Comment 3"}
							]
						},
						{
							name: "taskListDrawer5",
							caption: "extend sprite to add states for inverted (grey on block) as well as deactivated states.",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "comment 1"},
								{kind: "Item", content: "Comment 2"},
								{kind: "Item", content: "Comment 3"}
							]
						},
						{
							name: "taskListDrawer6",
							caption: "Make active pane icons go from indented grey state to colored floating icons",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{kind: "Item", content: "comment 1"},
								{kind: "Item", content: "Comment 2"},
								{kind: "Item", content: "Comment 3"}
							]
						},
						{
							name: "archivedTaskLists",
							caption: "Archived tasks",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
								{
									name: "archivedTaskListDrawer1",
									caption: "Archived task 1",
									captionClassName: "enyo-item",
									kind: "enyo.Drawer",
									open: false,
									components: [
										{kind: "Item", content: "comment 1"},
										{kind: "Item", content: "Comment 2"},
										{kind: "Item", content: "Comment 3"}
									]
								},
								{
									name: "archivedTaskListDrawer2",
									caption: "Archived task 2",
									captionClassName: "enyo-item",
									kind: "enyo.Drawer",
									open: false,
									components: [
										{kind: "Item", content: "comment 1"},
										{kind: "Item", content: "Comment 2"},
										{kind: "Item", content: "Comment 3"}
									]
								},
								{
									name: "archivedTaskListDrawer3",
									caption: "Archived task 3",
									captionClassName: "enyo-item",
									kind: "enyo.Drawer",
									open: false,
									components: [
										{kind: "Item", content: "comment 1"},
										{kind: "Item", content: "Comment 2"},
										{kind: "Item", content: "Comment 3"}
									]
								}
							]
						}
					]},
					{kind: "Toolbar", components: [
						{kind: "GrabButton"}
					]}
			]}
		]}
	],
	teamboxDrawer: function(inSender) {
		//this.$.projectsDrawer.setOpen(false);
		openValue = this.$.projectsDrawer.open;
		this.$.Project1.setContent(this.$.inSender);
	}

});

