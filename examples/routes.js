FlowRouter.route("/", {
	name: "home",
	action: function(params) {
		RiotLayout.render('welcome', {
			name: "Vu Tran", 
			title: "Header Here", 
			powerby: "Footer Here", 
			name: "Child Name", 
			header: "<header></header>",
			main: "<child1></child1>",
			footer: "<footer></footer>"
		});
	}
})

FlowRouter.route("/dashboard", {
	name: "dashboard",
	action: function(params) {
		RiotLayout.render('dashboard', {name: "Dashboard"});
	}
})

