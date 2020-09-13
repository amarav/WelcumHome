// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const BlogPostsAPI = {
    posts: [
      { id: 1, title: "The secret of tasty Briyani", LastUpdated: "SEP 10,2020", source:"/assets/img/blog/briyani.jpg", componentname:"blogSecretofBriyani" },
      { id: 2, title: "The secret of tasty Sambar", LastUpdated: "SEP 10,2020", source:"/assets/img/blog/sambar.jpg" , componentname:"blogSambarSecret"},
      { id: 3, title: "What advise did my elders give me after birth?", LastUpdated: "SEP 10,2020", source:"/assets/img/blog/advise.jpg" , componentname:"blogAdvise"},
      { id: 4, title: "Matt Midfielder", LastUpdated: "SEP 10,2020", source:"/assets/img/blog/briyani.jpg", componentname:"BlogSecretofBriyani" },
      { id: 5, title: "William Winger", LastUpdated: "SEP 10,2020", source:"/assets/img/blog/briyani.jpg", componentname:"BlogSecretofBriyani" },
      { id: 6, title: "Fillipe Forward", LastUpdated: "SEP 10,2020", source:"/assets/img/blog/briyani.jpg", }
    ],
    all: function() { return this.posts},
    get: function(id) {
      const isPost = p => p.id === id
      return this.posts.find(isPost)
    }
  }
  
  export default BlogPostsAPI
  