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

Please see example folder for more clear.
