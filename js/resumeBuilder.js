$("#main").append(["moin"]);
var awesomeThoughts="i am moin and i am AWESOME!"
var funThoughts= awesomeThoughts.replace("AWESOME!","FUN");
$("#main").append(funThoughts);
var formattedName=HTMLheaderName.replace("%data%", "moin");
var role="Web Developer";
var formattedRole=HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills=["aewomeness", "reading", "internet browsing", "JS"]
$("#main").append(skills);
//$("#main").append(skills[0]);
var work={};
work.position="Course Developer";
work.employer="Samvid";
work.years= 0-1;
var education= {};
education["name"]="Mumbai University";
education["years"]="2005 to 2013"
education["city"]="Mumbai";
$("#main").prepend(work["position"]);
$("#main").prepend(education.name);
var bio = {
  "name":"moin",
 "role":"developer",
  "contact":{
  "Phone no.":"8767081018",
 "email":"shaikhmoin250@gmail.com",
  "github":"shaikhmoin250",
  "location":"mumbai"
},
  "Welcome message":"lore apsum etc etc",
  "skills":["reading","writing","internet browsing","gaming"],
"biopic":"images/fry.jpg"
};

//$("header").append(HTMLbioPic);
$("#main").append(JSON.stringify(bio));

var education={
  "schools":[
    {
      "name":"Mumbai university",
      "location":"Mumabi India",
      "degree":"Masters",
      "majors":["CS"],
      "dates":2013,
      "url":"http//example.com"
    },
    {
      "name":"Gujrat university",
      "location":"Gujrat India",
      "degree":"Masters",
      "majors":["CS"],
      "dates":2016,
      "url":"http//example.com"
    }
  ],
"online courses":[{
  "title":"Javascript Syntax",
  "school":"Udacity",
  "dates":"2017",
  "url":"http//udacity.com"
}]
}


var work={
  "jobs":[
    {
      "employeer":"Planet Express",
      "title":"Delivery Boy",
      "dates":"January 3000-failure",
      "description":"lorem epsun dhfjd moebd svey aftde ahsu awfst eddhdh sjeids"
    },
    {
      "employeer":"Panucii,s Pizza",
      "title":"Delivery Boy",
      "dates":"1998 -December 31,1999",
      "description":"lorem epsun dhfjd moebd svey aftde ahsu awfst eddhdh sjeids"
    }
  ]
}
var projects={
  "projects":[
  {
    "title":"Sample Project 1",
    "dates":"2014",
    "Description":"Lorem epsum shsji ahsgg sftqtas.",
    images:[
      "http//husidp.com",
      "http//jdhd.in"
    ]
  }
]
}

if(bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  var  formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}

for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employeer);
  var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedEmployerTitle=formattedEmployer + formattedTitle;
  $(".work-entry:last").append(
  formattedEmployerTitle);
}
