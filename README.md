# extra-life-overlay

A simple and lightweight stream overlay alternative for Extra Life campaigns.

## Features

* A small Extra Life logo that can be oriented on the left or right of the screen.
* An animated progress bar that shows the amount raised in dollars.
* Progress bar orientation changes based on the logo orientation.
* A visual design inspired by the Extra Life website visual design.

## How to use

The overlay is hosted using GitHub Pages. For specific usage instructions with [OBS Studio](#using-with-obs-studio) or [XSplit Broadcaster](#using-with-xsplit-broadcaster) please see the relevant sections below.

### Getting your Extra Life Participant ID

You will need to get your participant ID in order to use this overlay. To get your participant ID:

1. Go to your Extra Life page.
2. Note the URL, you should see something like `https://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=123456`
3. Take the number to the right of the `participantID=`, this number is your participant ID. In the example, this is `123456`.

### General instructions

Add a Browser Source to your scene using the url below replacing `<participant_id>` with your participant ID:

```
https://weegeekps.github.io/extra-life-overlay?participant=<participant_id>
```

#### Adjusting Orientation

You can change the orientation to the right side of the screen by adding `&orientation=right` to the end of the above URL. That will give you a URL like:

```
https://weegeekps.github.io/extra-life-overlay?participant=<participant_id>&orientation=right
```

If you do this after loading the Browser Source the first time, you may need to clear the cache for the Browser Source or restart your client.

### Using with OBS Studio

1. Follow the instructions [for getting your Extra Life Participant ID](#getting-your-extra-life-participant-id).
2. Create a new Browser source in your scene, naming it something like `Extra Life Overlay`. ![Create a new browser source](/doc/obs/images/create-browser-source.png)
3. In the URL field, enter `https://weegeekps.github.io/extra-life-overlay?participant=<participant_id>` replacing `<participant_id>` with your participant ID retrieved in step 1. ![Update url](/doc/obs/images/update-url.png) The preview will not update until you click **Ok**.
4. You can now translate and move the overlay into the location of your choice. To change the orientation for right side placement, see the [adjusting orientation](#adjusting-orientation) section above.

### Using with XSplit Broadcaster

1. Follow the instructions [for getting your Extra Life Participant ID](#getting-your-extra-life-participant-id).
2. Add a new `Webpage...` source to your scene. In the prompt, enter `https://weegeekps.github.io/extra-life-overlay?participant=<participant_id>` replacing `<participant_id>` with your participant ID retrieved in step 1. ![Add webpage dialog](/doc/xsplit/images/add-webpage-source.png)
3. You can now translate and move the overlay into the location of your choice. To change the orientation for right side placement, see the [adjusting orientation](#adjusting-orientation) section above.

## Reporting Issues

If you find a bug or another issue, please [submit a bug report using the Bug Report template in GitHub](https://github.com/weegeekps/extra-life-overlay/issues/new?assignees=&labels=&template=bug_report.md&title=).
