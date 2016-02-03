PRISM

Languages for prism:

markup+css+clike+javascript+apacheconf+applescript+asciidoc+bash+basic+batch+c+csharp+cpp+coffeescript+ruby+css-extras+diff+docker+git+go+haml+handlebars+http+ini+java+json+less+makefile+markdown+nginx+parser+pascal+perl+php+php-extras+powershell+processing+python+jsx+rest+roboconf+sass+scss+smalltalk+smarty+sql+stylus+swift+tcl+textile+typescript+vim+wiki+yaml

Theme goes at bottom of prism.css before bundling:
https://github.com/PrismJS/prism-themes/blob/master/themes/prism-ghcolors.css

SHORTCODE

prism:

{{< prism textile >}}
$wgSitename = "Acme Inc. Wiki";
{{< /prism >}}

{{< prism lang [command-line root] >}}asdf
asdf
{{< /prism >}}

figure:

{{< figure1 link="/img/the.jpg" src="/img/the.jpg" type="Screenshot" title="blah" style="" >}}
add style="bg-white" etc if needed
