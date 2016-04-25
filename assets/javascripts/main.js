var timelineEvents = [
  [new Date('2015-06-02'), 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'heart'],
  [new Date('2015-06-11'), 'Lorem ipsum', 'flask'],
  [new Date('2015-06-15'), 'Lorem ipsum dolor sit amet', 'gavel'],
  [new Date('2015-06-22'), 'Lorem ipsum dolor sit amet', 'graduation-cap'],
  [new Date('2015-06-30'), 'Lorem ipsum dolor sit amet', 'trophy']
];

var timelineEvents2 = [
  [new Date('2016-03-01'), 'Lorem ipsum dolor sit amet', 'motorcycle'],
  [new Date('2016-05-29'), 'Lorem ipsum dolor sit amet', 'futbol-o'],
  [new Date('2016-07-19'), 'Lorem ipsum dolor sit amet', 'star'],
  [new Date('2016-08-22'), 'Lorem ipsum dolor sit amet', 'child']
];

$(document).ready(function () {
  // soInteractiveTimeline('one', new Date('2015-06-01'), new Date('2015-06-30'), timelineEvents).generate();
  soInteractiveTimeline('one', new Date('2015-06-01'), new Date('2015-06-30'), timelineEvents, new Date('2015-06-10')).generate();
  // soInteractiveTimeline('two', new Date('2016-03-01'), new Date('2016-08-22'), timelineEvents2, new Date('2016-07-03')).generate();
});
