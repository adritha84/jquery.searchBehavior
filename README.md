# Introduction

jquery.searchBehavior is a partial implementation of a search widget similar to the ones we see on pages like www.github.com and githubissues.heroku.com/#280north/cappuccino. 
This widget is implemented using *jQuery*, *CSS3* (with *Compass* library) and *HTML*.

# Installation

In order to install/compile the widget, just save this repo's archive to your computer and open the **index.html** file in your browser...
...or if you want to test it first, follow the **demo link** below. 

# Usage

### JavaScript files

Include the necessary JavaScript files in your project: 

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="/path/to/placeHoldize/jquery.searchBehavior.js"></script>

#### Fire the plug-in

Include the following code in your HTML file:

    <script type = "text/javascript">
	    $('.search_field_container').searchBehavior();
    </script>

### Create the search field

**Example**
    <div class = "search_field_container">
    <input type = "image" class = "submit_search" src = "images/magnifier.png"/>
    <input type = "text" class = "search_field" name = "search" />
    <img class = "clear_search" src = "images/clear.png"/>
    </div>
	
The search field actially contains 3 elements: 

* *The search input*: where you write the search keywords;
* *The magnifier button on the left side of the text field*: once you have written the keywords in the text input, you can click the magnifier on the left side of the text field (instead of pressing the Enter key) to launch the search action;
* *The clear button on the right side of the text field*: this button appears when there is text in the text field and its purpose is to clear the field;

# Demo 

jquery.searchBehavior demo link: [demo](http://goo.gl/Ovnhu "jquery.searchBehavior demo")


