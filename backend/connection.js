const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { getFirestore, collection, setDoc, getDoc, doc, getDocs, updateDoc, deleteDoc, addDoc, } = require('firebase/firestore')
const { initializeApp } = require('firebase/app');

require('dotenv/config')

// Firebase configuration
const firebaseConfigUsers = {
  apiKey: "AIzaSyDl-kzy7uKdiyF5t3_59Z2S1_UXi8itAk8",
  authDomain: "daiily-usuarios.firebaseapp.com",
  projectId: "daiily-usuarios",
  storageBucket: "daiily-usuarios.appspot.com",
  messagingSenderId: "352236921647",
  appId: "1:352236921647:web:9e55623037acb14b0ef7da"
};

const firebaseConfigVideos = {
  apiKey: "AIzaSyBvYxkQW0IH_2dIqD4bUkxBWS1fA5SNBpk",
  authDomain: "daiily-videos.firebaseapp.com",
  projectId: "daiily-videos",
  storageBucket: "daiily-videos.appspot.com",
  messagingSenderId: "789091225796",
  appId: "1:789091225796:web:b09a920dd9c7b345927991"
};

// Initialize Firebase
const firebaseUsers = initializeApp(firebaseConfigUsers);
const dbUsers = getFirestore(firebaseUsers)
const firebaseVideos = initializeApp(firebaseConfigVideos, 'database2')
const dbVideos = getFirestore(firebaseVideos)

// Initialize server
const appUsers = express()
const appVideos = express()

// CORS options
const corsOptions = {
  "origin": "*",
  "optionSuccessStatus": 200
}

// Server configuration
appUsers.use(express.json())
appUsers.use(cors(corsOptions));
appVideos.use(express.json())
appVideos.use(cors(corsOptions));

// -------------------------------- Users database operations ---------------------------------------
// Insert
appUsers.post('/insert', (req, res) => {
  try {
    const { name, lastname, age, email, password } = req.body

    if (!name || !lastname || !age || !email || !password) {
      res.json({
        'alert': 'Missing data'
      })
      return
    }

    if(!email.length) {
      res.json({
        'alert': 'Missing email'
      })
    } else if (password.length < 8) {
      res.json({
        'alert': 'Password must be at least 8 characters'
      })
    } else {
      const users = collection(dbUsers, "users")

      getDoc(doc(users, email)).then(user => {
        if(user.exists()) {
          res.json({
            'alert': 'User already exists'
          })
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              sendData = {
                name,
                lastname,
                age,
                email,
                password: hash
              }

              setDoc(doc(users, email), sendData).then(() => {
                res.json({
                  'alert': 'Success'
                })
              }).catch((error) => {
                res.json({
                  'alert': error
                })
              })
            })
          })
        }
      })
    }
  } catch (error) {
    console.error('Error saving user:', error)
    res.status(500).json({
      alert: 'Error',
      message: 'An error occurred while saving user'
    })
  }
})

// Login
appUsers.post('/login', (req, res) => {
  try{
    const {email, password} = req.body

    if( !email || !password ) {
      res.json({
        'alert': 'Please enter your data'
      })
    }

    const users = collection(dbUsers, "users")
    getDoc(doc(users, email)).then((user) => {
      if(!user.exists()) {
        res.json({
          'alert': 'User not found'
        })
      } else {
        bcrypt.compare(password, user.data().password, (error, result) => {
          if (result) {
            let data = user.data()
            res.json({
              'alert': 'Success',
              name: data.name,
              lastname: data.lastname
            })
          } else {
            res.json({
              'alert': 'Wrong password'
            })
          }
        })
      }
    })
  } catch (error) {
    console.error('Login failed:', error)
    res.status(500).json({
      alert: 'Error',
      message: 'An error occurred while logging in'
    })
  }
})

// Get user data
appUsers.post('/user', async (req, res) => {
  try {
    const { email } = req.body
    const userRef = doc(collection(dbUsers, 'users'), email)
    const user = await getDoc(userRef)

    if (user.exists()) {
      const userData = user.data()
      res.json({
        alert: 'Success',
        data: userData
      })
    } else {
      res.status(404).json({
        alert: 'Error',
        message: 'User not found'
      })
    }
  } catch (error) {
    console.error('Error retrieving user:', error)
    res.status(500).json({
      alert: 'Retrieve error',
      message: 'An error occurred while retrieving user data'
    })
  }
})

// Delete user account
appUsers.post('/delete', async (req, res) => {
  try {
    const {email} = req.body
    const user = doc(dbUsers, 'users', email)

    const userSnapshot = await getDoc(user)
    if (!userSnapshot.exists()) {
      res.status(404).json({
        alert: 'Error',
        message: 'User not found'
      })
      return // Detener la ejecución de la función si el usuario no existe
    }
    await deleteDoc(user)
    res.json({
      'alert': 'User deleted'
    })
  } catch (error) {
    console.error('Error deleting user:', error)
    res.status(500).json({
      alert: 'Delete error',
      message: 'An error occurred while deleting user'
    })
  }
})

// Update user account
appUsers.post('/update', async (req, res) => {
  try {
    const { name, email, lastname, age } = req.body
    const userRef = doc(dbUsers, 'users', email)

    const userSnapshot = await getDoc(userRef)
    if (!userSnapshot.exists()) {
      res.status(404).json({
        alert: 'Error',
        message: 'User not found'
      })
      return; // Detener la ejecución de la función si el usuario no existe
    }

    if(email) {
      const dataUpdate = {
        name, 
        lastname,
        age
      }

      updateDoc(doc(dbUsers, "users", email), dataUpdate).then(() => {
        res.json({
          'alert': 'Success'
        })
      }).catch((error) => {
        res.json({
          'alert': error
        })
      })
    }
  } catch (error) {
    console.error('Error updating user:', error)
    res.status(500).json({
      alert: 'Update error',
      message: 'An error occurred while updating user data'
    })
  }
})

// -------------------------------- Videos database operations ---------------------------------------
// Insert
appVideos.post('/insert', (req, res) => {
  const { title, url, category, details, chanel_name, image, channel_img, duration } = req.body

  if (!title || !url || !category || !details || !chanel_name || !image || !channel_img || !duration) {
    res.json({
      'alert': 'Missing data'
    })
    return
  }

  sendData = {
    title,
    url,
    category,
    details,
    chanel_name,
    image,
    channel_img,
    duration
  }
  
  const videos = collection(dbVideos, "videos")
  addDoc(videos, sendData).then(() => {
    res.json({
      'alert': 'success'
    })
    }).catch((err) => {
      res.json({
        'alert': err
      })
  })
})

// Get all videos
appVideos.get('/videos', async (req, res) => {
  try {
    const videos = collection(dbVideos, "videos")
    const array = await getDocs(videos)
    let returnData = []
    array.forEach(video => {
      const videoData = video.data()
      const videoId = video.id
      const videoWithId = { ...videoData, id: videoId }
      returnData.push(videoWithId)
    }) 
    res.json({
      'alert': 'Success',
      'data': returnData
    })
    return returnData
  } catch (error) {
    console.error('Error retrieving data:', error)
    res.status(500).json({
      alert: 'Error',
      message: 'An error occurred while retrieving videos data'
    })
  }
})

// Get video info
appVideos.post('/info', async (req, res) => {
  try {
    const { id } = req.body
    const videos = collection(dbVideos, "videos")
    const videoRef = doc(videos, id)
    const video = await getDoc(videoRef)

    if (video.exists()) {
      const videoData = video.data()
      res.json({
        alert: 'Success',
        data: videoData
      })
      return videoData
    } else {
      res.status(404).json({
        alert: 'Error',
        message: 'Video not found'
      })
    }
  } catch (error) {
    console.error('Error retrieving video:', error)
    res.status(500).json({
      alert: 'Data error',
      message: 'An error occurred while retrieving video data'
    })
  }
})

// Get the list of videos by category
appVideos.post('/category', async (req, res) => {
  try {
    const { category } = req.body
    const videos = collection(dbVideos, "videos")
    const array = await getDocs(videos)
    let returnData = []
    array.forEach(video => {
      if(video.data().category === category) {
        const videoData = video.data()
        const videoId = video.id
        const videoWithId = { ...videoData, id: videoId }
        returnData.push(videoWithId)
      }
    }) 
    res.json({
      'alert': 'Success',
      'data': returnData
    })
    return returnData
  } catch (error) {
    console.error('Error retrieving data:', error)
    res.status(500).json({
      alert: 'Error',
      message: 'An error occurred while retrieving videos data'
    })
  }
})


// Listening PORT
const PORT = process.env.PORT || 10000
const PUERTO = process.env.PUERTO || 12000

// Start server
appUsers.listen(PORT, () => {
  console.log(`Users listening on port: ${PORT}`)
})

appVideos.listen(PUERTO, () => {
  console.log(`Videos listening on port: ${PUERTO}`)
})