import './App.css';
import Navbar from './components/navbar';
import Inputsearch from './components/inputsearch';
import Searchlist from './components/searchlist';
import React from "react";
import   _ from 'lodash';
import Profile from './components/profile';
import Cards from './components/cards';
import Login from './components/login';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';



let progressInterval = false;


function App() {

  const [tweetSearch, setTweetSearch] = React.useState('');
  const [showProfile, setShowProfile] = React.useState(false);
  const [showTweets,setShowTweets] = React.useState(false);
  const [progresState, setprogresState] = React.useState(0);
  const [barBind, setBarBind] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(true);
  const [tweets, setTweets] = React.useState([]);
  const [username, setUserName] = React.useState('');
 const [password, setPassword] = React.useState('');
  
React.useEffect(() => { 

  const fetchData = async (tweets) => {
  await axios.get('https://alyconr.github.io/tweets.json', tweets, {
    headers: { 'content-type' : 'application/json' } })
  .then(res => {
    setTweets(res.data.tweets);
  })
}
fetchData();
}, [     ]);

  
React.useEffect (() => {
  if (progressInterval) {
    clearInterval(progressInterval);
  }
  progressInterval = setInterval(() => {
    if (progresState < 100) {
      setprogresState(progresState + 2);
    } else {
      clearInterval(progressInterval);
    }
  }, 100);
}, [progresState]);


React.useEffect (() => {
  if (progresState >= 100) {
    clearInterval(progressInterval);
    setTweetSearch('');
  }
}, [progresState]);

function changeBar() {
  setBarBind(!barBind);
}

function  changeTweet (newTweet) {
  setTweetSearch(newTweet);
  setShowProfile(false);
 setShowTweets(false);
  setBarBind(true);
  setShowLogin(false);
}

function changeProfile () {
  setShowProfile(!showProfile);
 setShowTweets(false);
  setTweetSearch('');
  setBarBind(false)
  setShowLogin(false);
}

function  changeThreepics( ) {
 setShowTweets(!showTweets);
  setShowProfile(false);
  setTweetSearch('');
  setBarBind(false);
  setShowLogin(false);
  
}
//axios call to authenticate user


function  handleChangeName  (event) {
setUserName(event.target.value);    
}

function  handleChangePassword (event) {
setPassword(event.target.value);
}

function  handleSubmit  (event) {
event.preventDefault();
const users = {
    username: username,
    password: password
};
const headers = {
    'content-type': 'application/json',
    'Authorization': 'Bearer'   + localStorage.getItem('token')
};

if (username === 'john' && password === 'P4ssW0rd!#') {
    localStorage.setItem('token', 'P4ssW0rd!#');
    setShowLogin('none');

    
axios.post('http://localhost:5000/users', users, {
    headers: headers
})
.then(res => {
    console.log(res.status);
    console.log(res.data);
    setShowTweets(true);
    setShowLogin(false);
 })
.catch(err => {
    console.log(err);
});} 
else {
    alert('Invalid username or password');
    window.location.reload();
  }
}

const delaySearchTweet = _.debounce((tweetSearch) => { changeTweet(tweetSearch)}, 2000); 

const tweetComponents = tweets.map ( (tweet, index) => {
  return (
    
      <Cards  key={index} title={tweet.nickname} description={tweet.post} img={tweet.images} time={tweet.time}  comments={tweet.comments} /> 
         );
});
 
return (
          
      <div className="App">
         <Navbar 
              onLogoClick={(showTweets) =>
                 {changeThreepics (showTweets);}} showTweets={showTweets}

              onClickProfile={(showProfile) =>
               { changeProfile(showProfile); }}  showProfile={showProfile} />

          <Inputsearch onSearch={delaySearchTweet} onChangeBar={
              (barBind) => {changeBar(barBind);}} barBind={barBind} />
                   
            { barBind ? <div style={{ height: 30 }}>
                             <div  className="progress-bar" role="progressbar"
                                style={{ width: `${progresState}%` }}>Searching Tweet: {progresState}%
                            </div>
                       </div> : null   } 

            {/* showProfile  ?  <Profile/> : null */}  
         

          <Routes>
           

            <Route path="/" element=    { showLogin ? <Login 
            onChangeName={handleChangeName}
            onChangePassword={handleChangePassword}
            onClickLogin={handleSubmit}/> : null } />

            <Route path="/postlist" element= {showTweets ? <div className="row row-cols-1 row-cols-md-2 g-4 m-2"> {tweetComponents} </div> : null }  />
 
            <Route path="/profile"  element={  <Profile/> } />
          </Routes>


         
   
    

     {/*<Searchlist  tweetSearch={tweetSearch} /> { showLogin || !showProfile ? <Login  onChangeName={handleChangeName}      onChangePassword={handleChangePassword}onClickLogin={handleSubmit}
      /> : null }  */}
          { showTweets ? <div className="row row-cols-1 row-cols-md-2 g-4 m-2"> {tweetComponents} </div> :  null }  
  

          <Searchlist  tweetSearch={tweetSearch} />   
      
         
     </div>
   );
}





export default App;
