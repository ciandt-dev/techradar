//This is the title for your window tab, and your Radar
document.title = "CI&T's Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Recommended'}
                  ,{'r':200,'name':'Alternatively Recommended'}
                  ,{'r':300,'name':'Use and Learn'}
                  ,{'r':400,'name':'Observe and Make PoCs'}
                  ,{'r':500,'name':'Not Recommended or To Be Retired'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 2160;
var w = 1200;

var radar_data = [
    { "quadrant": "Task Automation",
        "left" : 45,
        "top" : 18,
        "color" : "#222222",
        "items" : [ 
            {"name":"Sikuli", "pc":{"r":250,"t":60},"movement":"c", "url": "http://www.sikuli.org/"},
        ]
    },
    { "quadrant": "Interface Testing Automation",
        "left" : 45,
        "top" : 90,
        "color" : "#81878b",
        "items" : [ 
            {"name":"TestComplete", "pc":{"r":50,"t":135},"movement":"c", "url": "http://smartbear.com/products/qa-tools/automated-testing-tools/"},
            {"name":"Selenium", "pc":{"r":470,"t":135},"movement":"c", "url": "http://www.seleniumhq.org/"},
            {"name":"SauceLabs.com", "pc":{"r":320,"t":340},"movement":"c", "url": "https://saucelabs.com/"}, 
        ]
    },
    { "quadrant": "Build Automation",
        "left" : 45,
        "top" : 180,
        "color" : "#70a3cc",
        "items" : [ 
            {"name":"Grunt", "pc":{"r":40,"t":160},"movement":"c", "url": "http://gruntjs.com/"},
        ]
    },
    { "quadrant": "Service Bus",
        "left" : 45,
        "top" : 250,
        "color" : "#4997D0",
        "items" : [ 
            {"name":"IBM Integration Bus", "pc":{"r":70,"t":110},"movement":"c", "url": "http://www-03.ibm.com/software/products/pt/ibm-integration-bus"},
        ]
    },
    { "quadrant": "Behavior Driven Development",
        "left" : 45,
        "top" : 320,
        "color" : "#00A693",
        "items" : [ 
            {"name":"Behat", "pc":{"r":270,"t":135},"movement":"c", "url": "http://docs.behat.org/"},
            {"name":"Cucumber", "pc":{"r":250,"t":145},"movement":"c", "url": "http://cukes.info/"},
            {"name":"Specflow", "pc":{"r":250,"t":125},"movement":"c", "url": "http://www.specflow.org/"},
        ]
    },
    { "quadrant": "Big Data",
        "left" : 45,
        "top" : 430,
        "color" : "#239EBA",
        "items" : [ 
            {"name":"Apache Hadoop", "pc":{"r":50,"t":20},"movement":"c", "url": "http://hadoop.apache.org/"},   
            {"name":"BigQuery", "pc":{"r":260,"t":10},"movement":"c", "url": "https://developers.google.com/bigquery/"},   
            {"name":"Apache Drill", "pc":{"r":320,"t":220},"movement":"c", "url": "http://incubator.apache.org/drill/"},  
            {"name":"Apache Spark", "pc":{"r":330,"t":20},"movement":"c", "url": "https://spark.apache.org/"},   
            {"name":"Apache Storm", "pc":{"r":340,"t":25},"movement":"c", "url": "https://storm.incubator.apache.org/"},   
            {"name":"Cloudera Impala", "pc":{"r":350,"t":30},"movement":"c", "url": "http://www.cloudera.com/content/cloudera/en/products-and-services/cdh/impala.html"},   
        ]
    },
    { "quadrant": "Client-Side Javascript Framework",
        "left" : 320,
        "top" : 18,
        "color" : "#FFC14F",
        "items" : [ 
            {"name":"Angular JS", "pc":{"r":25,"t":220},"movement":"c", "url": "https://angularjs.org/"},   
            {"name":"Backbone.js", "pc":{"r":245,"t":235},"movement":"c", "url": "http://backbonejs.org/"},   
        ]
    },
    { "quadrant": "Continuous Integration",
        "left" : 320,
        "top" : 110,
        "color" : "#D399E6",
        "items" : [ 
            {"name":"Jenkins", "pc":{"r":45,"t":310},"movement":"c", "url": "http://jenkins-ci.org/"},   
            {"name":"TeamCity", "pc":{"r":220,"t":325},"movement":"c", "url": "http://www.jetbrains.com/teamcity/"},   
        ]
    },
    { "quadrant": "Dev Ops",
        "left" : 320,
        "top" : 200,
        "color" : "#6C79B8",
        "items" : [ 
            {"name":"Chef", "pc":{"r":235,"t":290},"movement":"c", "url": "https://www.getchef.com/"},   
            {"name":"Docker", "pc":{"r":350,"t":285},"movement":"c", "url": "http://www.docker.com"},   
            {"name":"Puppet", "pc":{"r":360,"t":295},"movement":"c", "url": "http://puppetlabs.com/puppet/puppet-open-source"},   
            {"name":"TDI", "pc":{"r":370,"t":280},"movement":"c", "url": "http://puppetlabs.com/presentations/test-driven-infrastructure-development"},   
            {"name":"Vagrant", "pc":{"r":330,"t":290},"movement":"c", "url": "https://www.vagrantup.com/"},   
        ]
    },
	{ "quadrant": "Performance Tools",
        "left" : 320,
        "top" : 420,
        "color" : "#7E73B8",
        "items" : [ 
            {"name":"BlazeMeter", "pc":{"r":50,"t":240},"movement":"c", "url": "http://blazemeter.com/"},   
            {"name":"NewRelic", "pc":{"r":60,"t":260},"movement":"c", "url": "http://newrelic.com/"},   
        ]
    },
	{ "quadrant": "Quality Assurance Tools",
        "left" : 620,
        "top" : 18,
        "color" : "#BDDA57",
        "items" : [ 
            {"name":"NDepend", "pc":{"r":70,"t":210},"movement":"c", "url": "http://www.ndepend.com/"},   
        ]
    },
    { "quadrant": "CSS Frameworks",
        "left" : 620,
        "top" : 90,
        "color" : "#83D37D",
        "items" : [ 
            {"name":"Bootstrap", "pc":{"r":80,"t":225},"movement":"c", "url": "http://getbootstrap.com/"},   
        ]
    },
    { "quadrant": "Application Development Framework",
        "left" : 620,
        "top" : (h-400),
        "color" : "#83D37D",
        "items" : [ 
            {"name":"Spring Framework", "pc":{"r":70,"t":130},"movement":"c", "url": "http://projects.spring.io/spring-framework/"}, 
            {"name":"PlayFramework", "pc":{"r":350,"t":320},"movement":"c", "url": "https://www.playframework.com/"},  
            {"name":"ADF", "pc":{"r":460,"t":320},"movement":"c", "url": "http://www.oracle.com/technetwork/developer-tools/adf/overview/index.html"}, 
            {"name":"JBoss Seam", "pc":{"r":440,"t":310},"movement":"c", "url": "http://www.seamframework.org/"},    
        ]
    },    
    { "quadrant": "HTML5 (APIs)",
        "left" : 620,
        "top" : 160,
        "color" : "#5B504F",
        "items" : [ 
            {"name":"WebGL", "pc":{"r":370,"t":220},"movement":"c", "url": "http://www.khronos.org/webgl/"},   
            {"name":"WebSocket", "pc":{"r":380,"t":200},"movement":"c", "url": "https://www.websocket.org/"}, 
        ]
    },
    { "quadrant": "Dependency Injection Frameworks",
        "left" : 620,
        "top" : 230,
        "color" : "#AE6938",
        "items" : [ 
            {"name":"Unity", "pc":{"r":70,"t":150},"movement":"c", "url": "https://unity.codeplex.com/"}, 
            {"name":"Castle Windsor", "pc":{"r":120,"t":140},"movement":"c", "url": "http://www.castleproject.org/projects/windsor/"}, 
            {"name":"Guice Framework", "pc":{"r":220,"t":135},"movement":"c", "url": "https://github.com/google/guice"}, 
        ]
    },
    { "quadrant": "Integration Frameworks",
        "left" : 620,
        "top" : 350,
        "color" : "#c2ac99",
        "items" : [ 
            {"name":"Apache Camel", "pc":{"r":60,"t":330},"movement":"c", "url": "http://camel.apache.org/"}, 
            {"name":"Spring Integration", "pc":{"r":450,"t":350},"movement":"c", "url": "http://projects.spring.io/spring-integration/"},     
        ]
    },
    { "quadrant": "Javascript Framework",
        "left" : 620,
        "top" : 440,
        "color" : "#00304E",
        "items" : [ 
            {"name":"RxJS", "pc":{"r":390,"t":250},"movement":"c", "url": "https://github.com/Reactive-Extensions/RxJS"},  
            {"name":"RequireJS", "pc":{"r":80,"t":250},"movement":"c", "url": "http://requirejs.org/"},     
        ]
    },
    { "quadrant": "Web Application Framework",
        "left" : 930,
        "top" : 18,
        "color" : "#004B49",
        "items" : [ 
            {"name":"ASP.Net MVC", "pc":{"r":80,"t":170},"movement":"c", "url": "http://www.asp.net/mvc"}, 
            {"name":"Spring MVC", "pc":{"r":60,"t":170},"movement":"c", "url": "http://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html"},     
            {"name":"ASP.Net WebForms", "pc":{"r":460,"t":160},"movement":"c", "url": "http://www.asp.net/web-forms"},   
            {"name":"JSF", "pc":{"r":440,"t":175},"movement":"c", "url": "http://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html"},     
            {"name":"GWT", "pc":{"r":435,"t":165},"movement":"c", "url": "http://www.gwtproject.org/"},     
            {"name":"Struts", "pc":{"r":415,"t":150},"movement":"c", "url": "http://struts.apache.org/"},       
        ]
    },
    { "quadrant": "Web Dependency Management",
        "left" : 930,
        "top" : 180,
        "color" : "#422518",
        "items" : [ 
            {"name":"Bower.io", "pc":{"r":70,"t":40},"movement":"c", "url": "http://bower.io/"},   
        ]
    },
    { "quadrant": "HTTP Server",
        "left" : 930,
        "top" : 250,
        "color" : "#555555",
        "items" : [ 
            {"name":"NGINX", "pc":{"r":80,"t":60},"movement":"c", "url": "http://nginx.org/"},   
        ]
    },
    { "quadrant": "Development Platform",
        "left" : 320,
        "top" : 350,
        "color" : "#FFAACC",
        "items" : [  
            {"name":"Node.JS", "pc":{"r":235,"t":75},"movement":"c", "url": "http://nodejs.org/"},   
        ]
    },
    { "quadrant": "Search Engine",
        "left" : 930,
        "top" : 340,
        "color" : "#3A4B47",
        "items" : [ 
            {"name":"Apache Solr", "pc":{"r":60,"t":75},"movement":"c", "url": "http://lucene.apache.org/solr/"},   
        ]
    },
    { "quadrant": "Programming Languages",
        "left" : 930,
        "top" : 420,
        "color" : "#3A4B47",
        "items" : [ 
            {"name":"Go Language", "pc":{"r":380,"t":110},"movement":"c", "url": "http://golang.org/"}, 
            {"name":"Scala", "pc":{"r":360,"t":120},"movement":"c", "url": "http://www.scala-lang.org/"},   
            {"name":"asm.js", "pc":{"r":370,"t":260},"movement":"c", "url": "http://asmjs.org/"}, 
            {"name":"R Language", "pc":{"r":255,"t":250},"movement":"c", "url": "http://www.r-project.org/"},   
        ]
    },
    { "quadrant": "Messaging",
        "left" : 930,
        "top" : 530,
        "color" : "#1B4D3E",
        "items" : [ 
            {"name":"Apache ActiveMQ", "pc":{"r":20,"t":125},"movement":"c", "url": "http://activemq.apache.org/"}, 
            {"name":"IBM MQ", "pc":{"r":155,"t":100},"movement":"c", "url": "http://www-03.ibm.com/software/products/pt/ibm-mq"},   
            {"name":"Rabbitmq", "pc":{"r":320,"t":160},"movement":"c", "url": "http://hornetq.jboss.org/"},   
        ]
    },
    { "quadrant": "NoSQL",
        "left" : 45,
        "top" : (h-500),
        "color" : "#C08081",
        "items" : [ 
            {"name":"Apache Cassandra", "pc":{"r":250,"t":190},"movement":"c", "url": "http://cassandra.apache.org/"}, 
            {"name":"MongoDB", "pc":{"r":270,"t":200},"movement":"c", "url": "http://www.mongodb.org/"},  
            {"name":"Neo4j", "pc":{"r":230,"t":195},"movement":"c", "url": "http://www.neo4j.org/"},  
            {"name":"Redis", "pc":{"r":250,"t":195},"movement":"c", "url": "http://redis.io/"},  
        ]
    },
    { "quadrant": "Persistence",
        "left" : 320,
        "top" : (h-500),
        "color" : "#563C5C",
        "items" : [ 
            {"name":"Entity Framework", "pc":{"r":70,"t":20},"movement":"c", "url": "http://msdn.microsoft.com/en-us/data/ef.aspx"}, 
            {"name":"Hibernate (JPA)", "pc":{"r":80,"t":5},"movement":"c", "url": "http://hibernate.org/"},  
            {"name":"Spring Data", "pc":{"r":90,"t":20},"movement":"c", "url": "http://projects.spring.io/spring-data/"},  
            {"name":"NHibernate", "pc":{"r":145,"t":35},"movement":"c", "url": "http://nhforge.org/"},  
        ]
    },
    { "quadrant": "Prediction",
        "left" : 620,
        "top" : (h-500),
        "color" : "#722f37",
        "items" : [ 
            {"name":"Mahout", "pc":{"r":250,"t":40},"movement":"c", "url": "https://mahout.apache.org/"}, 
            {"name":"Google Prediction API", "pc":{"r":370,"t":55},"movement":"c", "url": "https://developers.google.com/prediction"}, 
        ]
    },
    { "quadrant": "CSS Preprocessor",
        "left" : 930,
        "top" : (h-500),
        "color" : "#2F2140",
        "items" : [ 
            {"name":"SASS", "pc":{"r":80,"t":330},"movement":"c", "url": "http://sass-lang.com/"}, 
            {"name":"LESS", "pc":{"r":120,"t":340},"movement":"c", "url": "http://lesscss.org/"}, 
        ]
    },
    { "quadrant": "Task Scheduler",
        "left" : 45,
        "top" : (h-370),
        "color" : "#AB9144",
        "items" : [ 
            {"name":"Quartz", "pc":{"r":20,"t":320},"movement":"c", "url": "http://quartz-scheduler.org/"}, 
            {"name":"Quartz.Net", "pc":{"r":50,"t":280},"movement":"c", "url": "http://www.quartz-scheduler.net/"}, 
        ]
    },
    { "quadrant": "SCM",
        "left" : 320,
        "top" : (h-370),
        "color" : "#FF0000",
        "items" : [ 
            {"name":"Git", "pc":{"r":80,"t":80},"movement":"c", "url": "http://git-scm.com/"}, 
            {"name":"Subversion (SVN)", "pc":{"r":470,"t":80},"movement":"c", "url": "https://subversion.apache.org/"}, 
        ]
    },
    { "quadrant": "Caching",
        "left" : 930,
        "top" : (h-340),
        "color" : "#FD943F",
        "items" : [ 
            {"name":"ehcache", "pc":{"r":30,"t":30},"movement":"c", "url": "http://ehcache.org/"},   
            {"name":"Redis", "pc":{"r":50,"t":50},"movement":"c", "url": "http://redis.io/"},   
            {"name":"Gemfire", "pc":{"r":110,"t":20},"movement":"c", "url": "http://www.pivotal.io/big-data/pivotal-gemfire"},  
            {"name":"Memcached", "pc":{"r":180,"t":40},"movement":"t", "url": "http://memcached.org/", "blipSize": 120},        
            {"name":"Hazelcast", "pc":{"r":220,"t":20},"movement":"c", "url": "http://hazelcast.com/"},   
            {"name":"AppFabric", "pc":{"r":420,"t":20},"movement":"c", "url": "http://msdn.microsoft.com/en-us/library/ee677312(v=azure.10).aspx"},   
        ]
    },
    { "quadrant": "Productivity Tools",
        "left" : 45,
        "top" : (h-280),
        "color" : "#FADA5E",
        "items" : [ 
            {"name":"Lombok", "pc":{"r":80,"t":290},"movement":"c", "url": "http://projectlombok.org/"},   
            {"name":"Yeoman", "pc":{"r":220,"t":300},"movement":"c", "url": "http://yeoman.io/"},   
            {"name":"Dropwizard", "pc":{"r":380,"t":310},"movement":"c", "url": "http://dropwizard.io/"},   
        ]
    },
    { "quadrant": "Web API (REST)",
        "left" : 320,
        "top" : (h-280),
        "color" : "#51585E",
        "items" : [ 
            {"name":"ASP.Net WebAPI", "pc":{"r":45,"t":200},"movement":"c", "url": "http://msdn.microsoft.com/en-us/library/hh833994(v=vs.108).aspx"}, 
            {"name":"Jersey", "pc":{"r":90,"t":190},"movement":"c", "url": "https://jersey.java.net/"},     
            {"name":"RestEasy", "pc":{"r":140,"t":210},"movement":"c", "url": "http://resteasy.jboss.org/"},     
            {"name":"HATEOAS + Json HAL", "pc":{"r":370,"t":50},"movement":"c", "url": "http://stateless.co/hal_specification.html"}, 
        ]
    },
    { "quadrant": "Rules Engine",
        "left" : 620,
        "top" : (h-270),
        "color" : "#403D21",
        "items" : [ 
            {"name":"JBoss BRMS", "pc":{"r":80,"t":310},"movement":"c", "url": "http://www.jboss.org/products/brms/overview/"}, 
            {"name":"IBM Websphere BRMS", "pc":{"r":150,"t":315},"movement":"c", "url": "http://www-01.ibm.com/software/websphere/products/business-rule-management/"},   
        ]
    },
    { "quadrant": "BPM",
        "left" : 930,
        "top" : (h-180),
        "color" : "#5b5842",
        "items" : [ 
            {"name":"BPMS", "pc":{"r":470,"t":20},"movement":"c", "url": "http://pt.wikipedia.org/wiki/Business_Process_Management_Suite"},   
        ]
    },	
];
