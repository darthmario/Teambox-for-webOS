/* Copyright 2009-2011 Hewlett-Packard Development Company, L.P. All rights reserved. */
enyo.kind({
	name: "teambox",
	kind: enyo.VFlexBox,
	components: [
		{name: "slidingPane", kind: "SlidingPane", flex: 1, components: [
			{name: "left", width: "320px", kind:"SlidingView", components: [
					{kind: "PageHeader", components: [
						{kind: "Image", src: "images/account_icon.jpg"},
						{content: "Darthmario", className: "enyo-text-ellipsis"}
					]},
					{kind: "Scroller", flex: 1, components: [
						//this is the first one
						{ name: "quickActionsDrawer",
							caption: "Quick Actions",
							captionClassName: "enyo-item",
							kind: "enyo.Drawer",
							open: false,
							components: [
										{kind: "RadioToolButtonGroup", value: 1, components: [
											{kind: "RadioToolButton", value: "Search", label: "Search"},
											{kind: "RadioToolButton", value: "Task", label: "Task"},
											{kind: "RadioToolButton", value: "Comment", label: "Comment"}
										]},
										{kind: "RoundedSearchInput", hint: "Add a new task", alwaysLooksFocused:true},
										{layoutKind: "HFlexLayout", style: "width: 320px;", components: [
											{kind: "Picker", value: "Select a Task List", flex: 6, items: ["Select a Task List", "Task List 1", "Task List 2", "Task List 3", "Task List 4"]},
											{kind: "Button", caption: "Add", flex: 1, className: "enyo-button-dark"}
										]}
									]
								},
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
								{kind: "SwipeableItem", content: "Project 1", onConfirm: "deleteItem"},
								{kind: "SwipeableItem", content: "Project 2", onConfirm: "deleteItem"},
								{kind: "SwipeableItem", content: "My New Project", onConfirm: "deleteItem"}
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
						{content: "Task List 3", className: "enyo-text-ellipsis"},
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
	]
});