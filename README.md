# Scroll On
[Check it out!](http://scrllon.com)

### What is Scroll On?
This app's goal is to fix the problem with social media. Currently You have to constantly switch between several
apps and websites to stay up to date with everything. This eats up your internet data and is really slow and 
annoying, but Scroll On is coming to fix this! All social media in one spot, go ahead, scroll on.

## Developer Information
You may need some tools to edit scroll on here's the current list:
>1. Sass
2. Gulp (not needed if you are not deploying)
3. npm Static server (for local testing simple drag and drop index on chrome will not work for some of the code)

### Sass
Sass is pretty easy to use learn it [here](http://sass-lang.com)

Ignore this next part if you know how to compile Sass


As for compiling sass there is a few things to do first you need to have 
[Ruby](https://www.ruby-lang.org/en/downloads/) installed don't worry we will not be coding in ruby. After you have
installed ruby run the following command (Windows/Mac):
        
    gem install sass
If that command returns errors run this:
        
    sudo gem install sass
Next check if it's installed

    sass -v
Now to actively compile sass into css. First you must change directories to the styles folder after that run
this command:

    sass --watch styles.sass:styles.css
To stop do Ctrl + C then enter

### Gulp
First you must have node.js installed

    npm install -g gulp
    
Next open the gulpfile.js and for each var look up the gulp plugin and follow instructions to install.
After you installed the plugins select the tasks you want to run by changing the array on the last line of the 
gulpfile.js then run

    gulp
    
### npm static server
    npm -g install static-server
In the directory that contains index.html

    static-server
Open your browser and type in the address they give you. When making changes no need to run command again just
save changes then refresh page


        
 
