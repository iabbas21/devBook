const adminAuth = (req, res, next) => {
  const token = "xyza"
  const isAdmin = token === "xyz"
  if(!isAdmin) {
    res.status(403).send('You do not have access admin access')
  } else {
    next()
  }
}

const userAuth = (req, res, next) => {
  console.log('User authentication middleware')
  const token = "xyza"
  const isAuthenticated = token === "xyz"
  if(!isAuthenticated) {
    res.status(401).send('Unauthorized access')
  } else {
    next()
  }
}

module.exports = { adminAuth, userAuth }