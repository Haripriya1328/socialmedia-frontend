import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux';

import Navbar from 'scenes/navbar';
import UserWidget from 'scenes/widgets/UserWidget';
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import AdvertWidget from 'scenes/widgets/AdvertWidget'
import FriendListWidget from 'scenes/widgets/FriendListWidget';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const HomePage = () => {
const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
const { _id, profileUrl } = useSelector((state) => state.user);
console.log(_id)
console.log(profileUrl)


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZn5urcK_f5cQdgoV_YGGzSDXlAU1X58w",
  authDomain: "socialmedia-dc79c.firebaseapp.com",
  projectId: "socialmedia-dc79c",
  storageBucket: "socialmedia-dc79c.appspot.com",
  messagingSenderId: "555256404993",
  appId: "1:555256404993:web:739abfeecbb1c4afc1b400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  return (
    <Box>
      <Navbar/>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined }>
          <UserWidget userId={_id} profileUrl={profileUrl} />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined }
          mt={isNonMobileScreens ? undefined : "2rem" }
        >
          <MyPostWidget picturePath={profileUrl} />
          <PostsWidget userId={ _id } isUser={true}/>

        </Box>
        {isNonMobileScreens && (<Box flexBasis="26%">
          <AdvertWidget />
          <Box m="2rem 0" />
          <FriendListWidget userId={_id} isUser={true} />
        </Box>)}

      </Box>
    </Box>
  )
}

export default HomePage;