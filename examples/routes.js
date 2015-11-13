FlowRouter.route("/", {
    name: "home",
    action: function(params) {
        RiotLayout.render('welcome', {name: "Vu Tran"});
    }
})

FlowRouter.route("/dashboard", {
    name: "dashboard",
    action: function(params) {
        RiotLayout.render('dashboard', {name: "Dashboard"});
    }
})

