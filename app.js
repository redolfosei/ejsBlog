//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const PORT = process.env.PORT || 3000; 

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const homeStartingContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque deserunt, exercitationem reiciendis a accusamus? Non illo minima cum modi rem totam fugit animi dolorum. Totam tempora consectetur nulla expedita ex alias minima nam eaque, consequuntur enim beatae explicabo hic perspiciatis, quae quasi. Consequuntur, aperiam a! Eligendi tenetur molestias, dolorem omnis exercitationem natus ipsa commodi quos explicabo iure impedit hic voluptatibus adipisci, corrupti voluptatem blanditiis voluptate quasi dolore! Ipsum earum maiores voluptas veritatis accusamus delectus voluptatem illum error blanditiis, porro veniam doloribus, repellat quam dolorem quis vel expedita quas perferendis deserunt fugiat vitae quasi totam esse repellendus? Nulla, quos recusandae.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";




app.get("/",function(req,res){
    res.render("home", {StartingContent: homeStartingContent}); //on the root route, the home page is rendered; 
});











app.listen(PORT, function() {
  console.log("Server started on port " + PORT);
});
