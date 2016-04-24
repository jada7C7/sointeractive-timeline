var timelineEvents = [
  ['2015-06-02', 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'heart'],
  ['2015-06-11', 'Lorem ipsum', 'flask'],
  ['2015-06-15', 'Lorem ipsum dolor sit amet', 'gavel'],
  ['2015-06-22', 'Lorem ipsum dolor sit amet', 'graduation-cap'],
  ['2015-06-30', 'Lorem ipsum dolor sit amet', 'trophy']
];

var timelineEvents2 = [
  ['2016-03-01', 'Lorem ipsum dolor sit amet', 'motorcycle'],
  ['2016-05-29', 'Lorem ipsum dolor sit amet', 'futbol-o'],
  ['2016-07-19', 'Lorem ipsum dolor sit amet', 'star'],
  ['2016-08-22', 'Lorem ipsum dolor sit amet', 'child']
];

$(document).ready(function () {
  // createTimeline('#one', '2015-06-01', '2015-06-30', timelineEvents);
  createTimeline('#one', '2015-06-01', '2015-06-30', timelineEvents, '2015-06-10');
  // createTimeline('#two', '2016-03-01', '2016-08-22', timelineEvents2, '2016-07-03');
});
