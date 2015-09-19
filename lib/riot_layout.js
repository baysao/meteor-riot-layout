RiotLayout = {};
RiotLayout._domLoaded = false;

RiotLayout._getRootNode = function() {
  var rootNode = document.getElementById('riot-root');

  if(rootNode) {
    return rootNode;
  } else {
    rootNode = document.createElement("div");
    rootNode.id = "riot-root";
    document.getElementsByTagName('body')[0].appendChild(rootNode);
    return rootNode;
  }
};

RiotLayout.render = function(layoutClass, regions) {
  if(Meteor.isClient) {
    return RiotLayout._renderClient(layoutClass, regions);
  } else {
    return RiotLayout._renderServer(layoutClass, regions);
  }
};

RiotLayout._renderServer = function(layoutClass, regions) {
  var html = Riot.render(layoutClass, regions);
  if(Package['kadira:flow-router-ssr']) {
    var FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;
    var ssrContext = FlowRouter.ssrContext.get();
    ssrContext.setHtml(html);
  }
};

RiotLayout._renderClient = function(layoutClass, regions) {
  this._ready(function() {
    var rootNode = RiotLayout._getRootNode();
    Riot.mount(rootNode, layoutClass, regions);
  });
};

RiotLayout._ready = function(cb) {
  var self = this;
  if(self._domLoaded) {
    cb();
    return;
  }

  // wait for DOM is loading
  Meteor.startup(function() {
    setTimeout(function() {
      cb();
      self._domLoaded = true;
    }, 0);
  });
};