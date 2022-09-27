const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const PORT = process.env.PORT || 3000; 

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const homeStartingContent = "This is the Home page. iLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque deserunt, exercitationem reiciendis a accusamus? Non illo minima cum modi rem totam fugit animi dolorum. Totam tempora consectetur nulla expedita ex alias minima nam eaque, consequuntur enim beatae explicabo hic perspiciatis, quae quasi. Consequuntur, aperiam a! Eligendi tenetur molestias, dolorem omnis exercitationem natus ipsa commodi quos explicabo iure impedit hic voluptatibus adipisci, corrupti voluptatem blanditiis voluptate quasi dolore! Ipsum earum maiores voluptas veritatis accusamus delectus voluptatem illum error blanditiis, porro veniam doloribus, repellat quam dolorem quis vel expedita quas perferendis deserunt fugiat vitae quasi totam esse repellendus? Nulla, quos recusandae.";
const aboutContent = "This is the about us page. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "This is the contact us page. Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

//variables | arrays
let posts = [];

app.get("/",function(req,res){
    res.render("home", {
      StartingContentHome: homeStartingContent,
      posts: posts //array posts and posts from forEach in home.ejs accordingly; 
    
    }); //on the root route, the home page is rendered;  
     
});

app.get("/about",function(req,res){
    res.render("about", {StartingContentAbout: aboutContent}); //on the about route, the about page is rendered; 
});

app.get("/contact", function(req,res){
    res.render("contact", {StartingContentContact: contactContent}); 
})

app.get("/compose", (req,res)=> {
    res.render("compose"); 
});


app.post("/compose", (req,res)=> {
  const post = {
    title: req.body.postTitleCompose,
    content: req.body.postMsgCompose
    
  };
  
  posts.push(post);

  res.redirect("/"); 

});

app.get("/posts/:postName",function(req,res){ //route paramaeters, requesting the title from the url; 

  const requestedTitle = _.lowerCase(req.params.postName); 

  posts.forEach(function(post){ // To check a variable against an array, you must loop through the array; 
    const postTitle = _.lowerCase(post.title); // getting the title the user entered in the form that was pushed to the array; 
    if(requestedTitle === postTitle) {
      res.render("post", {
        postTitle: postTitle,
        postContent: post.content 
      }); 
    } else {
      console.log("match NOT found"); 
    }
  });
  
});




app.listen(PORT, function() {
  console.log("Server started on port " + PORT);
});



