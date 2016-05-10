# SoInteractive Timeline

## Features

* Fully responsive timeline with Font Awesome icons, hover tooltips and animated time progress bar
* Automatically generated by JavaScript based on array of events
* Support for multiple timelines on the same page
* Pure CSS solution

## Demo

[You can see it in action right here.](http://rafaltrzop.github.io/sointeractive-timeline/)

## How to use

Include *soInteractiveTimeline.css* in the head section of your website:

```html
<head>
  <link href="assets/stylesheets/soInteractiveTimeline.css" rel="stylesheet">
</head>
```

Then add *soInteractiveTimeline.js* just before the closing body tag:

```html
<body>
  <script src="assets/javascripts/soInteractiveTimeline.js"></script>
</body>
```

Now you can prepare an array of events consisting of:

* Date of the event e.g. `new Date('2016-05-10')`
* Description of the event e.g. `'Lorem ipsum dolor sit amet'`
* [Font Awesome](http://fontawesome.io/icons/) icon name e.g. `'heart'`

Example (add this code to your website *main.js* file):

```javascript
var timelineEvents = [
  [new Date('2015-06-02'), 'Lorem ipsum dolor sit amet', 'heart'],
  [new Date('2015-06-11'), 'Lorem ipsum dolor sit amet', 'flask'],
  [new Date('2015-06-15'), 'Lorem ipsum dolor sit amet', 'gavel'],
  [new Date('2015-06-22'), 'Lorem ipsum dolor sit amet', 'graduation-cap'],
  [new Date('2015-06-30'), 'Lorem ipsum dolor sit amet', 'trophy']
];
```

In order to generate timeline you need to execute `soInteractiveTimeline(containerId, startDate, endDate, timelineEvents, fakeDate).generate()` method in your *main.js* file. Take a note that **last parameter is optional** (if not provided current date will be used).

```javascript
soInteractiveTimeline('my-superb-timeline', new Date('2015-06-01'), new Date('2015-06-30'), timelineEvents, new Date('2015-06-10')).generate();
```

The last step is to add a container for our timeline in HTML:

```html
<body>
  <section class="timeline" id="my-superb-timeline"></section>
</body>
```

You can have multiple timelines on the same page. All you need to do is prepare another array of events and generate a new timeline with different `containerId` value. That's it, thank you for reading and have a nice day!
