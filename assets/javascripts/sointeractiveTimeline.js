function createTimeline(containerId, startDate, endDate, timelineEvents, currentDate) {
  var timelineStart = moment(startDate);
  var timelineEnd = moment(endDate);
  var timelineDays = timelineEnd.diff(timelineStart, 'days');

  if (currentDate === undefined) {
    currentDate = moment();
  } else {
    currentDate = moment(currentDate);
  }
  var progressBarDaysTillNow = currentDate.diff(timelineStart, 'days');
  var progressBarPosition = progressBarDaysTillNow / timelineDays * 100;

  var html = '<ol class="timeline__axis">';
  for (var i = 0, len = timelineEvents.length; i < len; i++) {
    var timelineEvent = timelineEvents[i];
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

    html += '<li class="event" style="left: calc(' + eventPositon + '% - 37px / 2);">\
      <div class="bulletpoint">\
        <i class="fa fa-' + eventIcon + ' bulletpoint__icon ' + pastEventClass + '" aria-hidden="true"></i>\
      </div>\
      <p class="event__desc">\
        <time datetime="' + eventDateAttr + '" class="event__date">' + eventDateTxt + '</time><br>\
        <span class="event__title">' + eventTitle + '</span>\
      </p>\
    </li>';
  }

  html += '<div class="timeline__progress-bar"></div></ol>';
  $(containerId).html(html);
  $(containerId + ' .timeline__progress-bar').css('width', progressBarPosition + '%');
}
