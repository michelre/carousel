<h1>Carousel</h1>
========

<h2>Installation</h2>
========

<ul>
  <li>1.Add the CSS file (carousel.css)</li>
  <li>2.Add JQuery</li>
  <li>3.Add carousel.js</li>
</ul>
You have an example in the index.html file.

<h2>Start</h2>
========

It's pretty simple to start the carousel. Create a structure like that in your HTML file:

<pre>
<code>
<div id="carousel-wrapper">
  <ul>
    <li>
      <div class="content">
        ...
      </div>
    </li>
    <li>
      <div class="content">
        ...
      </div>
    </li>
  </ul>
</div>
</code>
</pre>

Now, you can instantiate the carousel:
<pre>
<code>
  new Carousel(800, 400)
</code>
</pre>

The first parameter corresponds to the width and the second parameter corresponds to the height. (It's pretty simple, isn't it? ;) )

<h2>Using carousel with AngularJS</h2>

I created a directive for you to instantiate the carousel:
<pre>
<code>
  <div id="carousel-wrapper" ng-carousel="{'width':'100%','height':'500px'}">
    <ul>
      <li>
        <div class="content">
          ...
        </div>
      </li>
      <li>
        <div class="content">
          ...
        </div>
      </li>
    </ul>
  </div>
</code>
</pre>

To load the directive, just add carouselDirective in the right angular module:
<pre>
<code>
  angular.module("app", ["carouselDirective"])
</code>
</pre>

I created my résumé with this carousel on my <a href="http://www.remi-michel.fr">personal website</a> (at the bottom of the page)




