(function() {
  define(['jquery', 'compiled/jquery/redirectClickTo'], function($) {
    var createClick;

    module('redirectClickTo');
    createClick = function() {
      var e;

      e = document.createEvent('MouseEvents');
      e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 2, null);
      return e;
    };
    return test('redirects clicks', function() {
      var e, receivedEvent, sourceDiv, targetDiv, targetDivSpy;

      sourceDiv = $('<div></div>');
      targetDiv = $('<div></div>');
      targetDivSpy = sinon.spy();
      targetDiv.on('click', targetDivSpy);
      sourceDiv.redirectClickTo(targetDiv);
      e = createClick();
      sourceDiv.get(0).dispatchEvent(e);
      ok(targetDivSpy.called, 'click redirected');
      receivedEvent = targetDivSpy.args[0][0];
      equal(receivedEvent.type, e.type, 'same event type');
      equal(receivedEvent.ctrlKey, e.ctrlKey, 'same ctrl key');
      equal(receivedEvent.altKey, e.altKey, 'same alt key');
      equal(receivedEvent.shiftKey, e.shiftKey, 'same shift key');
      equal(receivedEvent.metaKey, e.metaKey, 'same meta key');
      return equal(receivedEvent.button, e.button, 'same button');
    });
  });

}).call(this);