
import Cards from './cards';
import React from "react";
import axios from 'axios';






function Searchlist ({tweetSearch }) {

  const [tweets, setTweets] = React.useState([]);

  React.useEffect(() => {
  const fetchData = async (tweets) => {
  
  await axios.get(`https://alyconr.github.io/tweets.json`, tweets, {
      headers: { 'content-type': 'application/json' }
    })
    .then(res => {
      setTweets(res.data.tweets);
      
    })
  }

  fetchData();
        }, []);
  

  const tweetsComponents = tweets.filter( tweet => {
        
        if (tweetSearch  === '') {
          return false;
        } else if 
        (tweet.post.toLowerCase().includes(tweetSearch.toLowerCase()) || tweet.nickname.toLowerCase().includes(tweetSearch.toLowerCase())) {
          return (tweet);
        }
        return false;
           }).map( ( tweet, index) => {
        return (
         
          <Cards  key={index} title={tweet.nickname} description={tweet.post} img={tweet.images} time={tweet.time}  comments={tweet.comments} /> 
        );
      
      });

 

      return (
          
          
              <div  className="row row-cols-1 row-cols-md-2 g-4 m-2">
              {tweetsComponents}  
              
              </div>
                
         
      );
}

export default Searchlist;