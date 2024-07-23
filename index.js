require('dotenv').config()
const express=require("express") //require module syntax
const app=express()

const port=4000

const githubData={
    "login": "mohdsuhail624",
    "id": 95992723,
    "node_id": "U_kgDOBbi7kw",
    "avatar_url": "https://avatars.githubusercontent.com/u/95992723?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mohdsuhail624",
    "html_url": "https://github.com/mohdsuhail624",
    "followers_url": "https://api.github.com/users/mohdsuhail624/followers",
    "following_url": "https://api.github.com/users/mohdsuhail624/following{/other_user}",
    "gists_url": "https://api.github.com/users/mohdsuhail624/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mohdsuhail624/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mohdsuhail624/subscriptions",
    "organizations_url": "https://api.github.com/users/mohdsuhail624/orgs",
    "repos_url": "https://api.github.com/users/mohdsuhail624/repos",
    "events_url": "https://api.github.com/users/mohdsuhail624/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mohdsuhail624/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-12-12T04:06:24Z",
    "updated_at": "2024-07-21T03:42:12Z"
  }
app.get("/",(req,res)=>{
    res.send('Hello world')
})
app.get('/twitter',(req,res)=>{
    res.send('hitesh.com')
})
app.get("/login",(req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})
app.get("/youtube",(req,res)=>{
    res.send("<h2>Chai aur code</h2>")

})
app.get("/github",(req,res)=>{
    res.json(githubData)

})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port${process.env.PORT}`);
})