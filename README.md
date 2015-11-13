## Riot Layout

Simple Riot Layout Manager for Meteor with SSR Support.

With Riot Layout you can easily render riot components both alike in client and server. In the server it uses Flow Router's upcoming SSR apis.

### How to use
Firstly, add packages [baysao:riotjs](https://github.com/baysao/meteor-riotjs) for support "tag" extension of riotjs template and [kadira:flow-router](https://github.com/kadirahq/flow-router) for supporting route
~~~
meteor add baysao:riotjs
meteor add kadira:flow-router
~~~

Secondly, add package [baysao:riot-layout](https://github.com/baysao/meteor-riot-layout) for support RiotLayout 

~~~
meteor add baysao:riot-layout
~~~


Then you use `RiotLayout.render()` to render your component with first param is name of component (name in string) , second is custom data pass throught component.

#### Rendering a Simple Component

~~~
FlowRouter.route("/", {
    name: "home",
    action: function(params) {
        RiotLayout.render('welcome', {name: "Vu Tran"});
    }
})
~~~

welcome.tag

~~~
<welcome>
    <h3>Welcome, { opts.name }</h3>
    <a href="/dashboard">Dashboard</a>
    var name = opts.name
</welcome>
~~~

#### Using as a Layout Manager
Add component string describe in VALUE field into DOM element with ID as KEY field

Router definition

~~~
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
~~~

Welcome layout

~~~
<welcome>
    <h3>Welcome, { opts.name }</h3>
     <div id="header"></div>
     <div id="main"></div>
     <div id="footer"></div>
    <a href="/dashboard">Dashboard</a>
</welcome>
~~~

Components

~~~
<header>
  <h3>Header is {opts.title} <h3>
</header>
<child>
  <h3>Child is {opts.name} <h3>
</child>
<child1>
  <h3>Child1 is {opts.name} <h3>
</child1>
<footer>
  <h3>Footer is {opts.powerby} <h3>
</footer>
~~~


Please see example folder for more clear.
