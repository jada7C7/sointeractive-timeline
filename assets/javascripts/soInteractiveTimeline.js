var soInteractiveTimeline = function (containerId, startDate, endDate, timelineEvents, fakeDate) {

  var timelineStart = moment(startDate);
  var timelineEnd = moment(endDate);
  var timelineDays = timelineEnd.diff(timelineStart, 'days');
  var currentDate = fakeDateOrCurrentDate(fakeDate);
  var progressBarDaysTillNow = currentDate.diff(timelineStart, 'days');
  var progressBarPosition = progressBarDaysTillNow / timelineDays * 100;

  function fakeDateOrCurrentDate(date) {
    if (date === undefined) {
      return moment();
    } else {
      return moment(date);
    }
  };

  function openTimelineList() {
    return '<ol class="timeline__axis">';
  };

  function generateListItem(timelineEvent) {
      var eventDate = moment(timelineEvent[0]);
      var eventDateAttr = eventDate.format('YYYY-MM-DD');
      var eventDateTxt = eventDate.format('DD.MM.YYYY');
      var eventDaysSinceStart = eventDate.diff(timelineStart, 'days');

      // devide number of days to given event (since start of the timeline) by
      // number of days timeline lasts and then multiply it by 100 to get number
      // of per cents, then multiply it by 0.8 (because timeline takes 80% width
      // of wrapper), then add 10 because timeline really starts at 10% and ends
      // at 90% width point of its wrapper
      var eventPositon = eventDaysSinceStart / timelineDays * 100 * 0.8 + 10;

      var eventTitle = timelineEvent[1];
      var eventIcon = timelineEvent[2];

      var pastEventClass = progressBarDaysTillNow >= eventDaysSinceStart ? 'bulletpoint__icon--past' : '';

      return '<li class="event" style="left: calc(' + eventPositon + '% - 37px / 2);">\
        <div class="bulletpoint">\
          <i class="fa fa-' + eventIcon + ' bulletpoint__icon ' + pastEventClass + '" aria-hidden="true"></i>\
        </div>\
        <p class="event__desc">\
          <time datetime="' + eventDateAttr + '" class="event__date">' + eventDateTxt + '</time><br>\
          <span class="event__title">' + eventTitle + '</span>\
        </p>\
      </li>';
  };

  function closeTimelineList() {
    return '<div class="timeline__progress-bar"></div></ol>';
  };

  function setProgressBarWidth() {
    $(containerId + ' .timeline__progress-bar').css('width', progressBarPosition + '%');
  }

  return {
    generate: function () {
      var html = openTimelineList();
      for (var i = 0, len = timelineEvents.length; i < len; i++) {
        html += generateListItem(timelineEvents[i]);
      }
      html += closeTimelineList();

      $(containerId).html(html);
      setProgressBarWidth();
    }
  };
};
