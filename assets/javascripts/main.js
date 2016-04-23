var timelineEvents = [
  ['2015-06-02', 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'heart'],
  ['2015-06-11', 'Lorem ipsum', 'flask'],
  ['2015-06-15', 'Lorem ipsum dolor sit amet', 'gavel'],
  ['2015-06-22', 'Lorem ipsum dolor sit amet', 'graduation-cap'],
  ['2015-06-30', 'Lorem ipsum dolor sit amet', 'trophy']
];

function createTimeline(startDate, endDate, timelineEvents, currentDate) {
  var timelineStart = moment(startDate, "YYYY-MM-DD");
  var timelineEnd = moment(endDate, "YYYY-MM-DD");
  var timelineDays = timelineEnd.diff(timelineStart, 'days');

  var html = '<ol class="timeline__axis">';
  for (timelineEvent of timelineEvents) {
    var eventDate = moment(timelineEvent[0]);
    var eventDateAttr = eventDate.format("YYYY-MM-DD");
    var eventDateTxt = eventDate.format("DD.MM.YYYY");
    var eventDaysSinceStart = eventDate.diff(timelineStart, 'days');

    // devide number of days to given event (since start of the timeline) by
    // number of days timeline lasts and then multiply it by 100 to get number
    // of per cents, then multiply it by 0.8 (because timeline takes 80% width
    // of wrapper), then add 10 because timeline really starts at 10% and ends
    // at 90% width point of its wrapper
    var eventPositon = eventDaysSinceStart / timelineDays * 100 * 0.8 + 10;

    var eventTitle = timelineEvent[1];
    var eventIcon = timelineEvent[2];

    html += '<li class="event" style="position: absolute; left: calc(' + eventPositon + '% - 37px / 2);">\
      <div class="bulletpoint">\
        <i class="fa fa-' + eventIcon + ' bulletpoint__icon bulletpoint__icon--past" aria-hidden="true"></i>\
      </div>\
      <p class="event__desc">\
        <time datetime="' + eventDateAttr + '" class="event__date">' + eventDateTxt + '</time>\
        <span class="event__title">' + eventTitle + '</span>\
      </p>\
    </li>';
  }

  html += '<div class="timeline__progress-bar"></div></ol>';
  $('.timeline').html(html);

  if (currentDate === undefined) {
    currentDate = moment();
  } else {
    currentDate = moment(currentDate, "YYYY-MM-DD");
  }
  var progressBarDaysTillNow = currentDate.diff(timelineStart, 'days');
  var progressBarPosition = progressBarDaysTillNow / timelineDays * 100;
  $('.timeline__progress-bar').css('width', progressBarPosition + '%');
}

// createTimeline('2015-06-01', '2015-06-30', timelineEvents);
createTimeline('2015-06-01', '2015-06-30', timelineEvents, '2015-06-10');