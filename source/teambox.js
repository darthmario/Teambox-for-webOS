/* Copyright 2009-2011 Hewlett-Packard Development Company, L.P. All rights reserved. */
enyo.kind({
	name: "teambox",
	kind: enyo.VFlexBox,
	components: [
		{name: "slidingPane", kind: "SlidingPane", flex: 1, components: [
			{name: "left", width: "320px", kind:"SlidingView", components: [
					{kind: "PageHeader", components: [
						{nodeTag:"div", components: [
							{kind: "Image", src: "images/account_icon.jpg"},
							{nodeTag:"div", content:"Darthmario", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
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
						{kind: "Item", className:"label-padding", onclick: "teamboxDrawer", value: "projectsDrawer", components: [
							{nodeTag:"div", className:"label-icon label-projects label-active"},
							{nodeTag:"div", content:"Projects", className:"label-text"},
							{nodeTag:"div", className:"clearit"}
						]},
						{name: "projectsDrawer", kind: "enyo.Drawer", open: true, components: [
								{kind: "SwipeableItem", content: "Project 1", onConfirm: "deleteItem", onclick: "teamboxDrawer"},
								{kind: "SwipeableItem", content: "Project 2", onConfirm: "deleteItem"},
								{kind: "SwipeableItem", content: "My New Project", onConfirm: "deleteItem"}
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
					{kind: "PageHeader", components: [
						{nodeTag:"div", components: [
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
						{name: "projectTaskListsDrawer", kind: "enyo.Drawer", open: false, components: [
								{kind: "Item", content: "Task Lists 1"},
								{kind: "Item", content: "Task Lists 2"},
								{kind: "Item", content: "My New Task Lists"}
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
							name: "taskListDrawer1",
							caption: "A Task with a date",
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
							name: "taskListDrawer2",
							caption: "New Unassigned task with no date",
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
							name: "taskListDrawer3",
							caption: "This task is currently on hold",
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
							caption: "A task with a name that is longer than the others and has a user and a date.",
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
							caption: "Another new task that is open to assign",
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
							caption: "A newly completed task",
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
		//target = inSender.value;
		//target.drawer.close();
		this.$.content.setContent("I'm selected!");
	}

});

