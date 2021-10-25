import { Grid } from '@material-ui/core'
import React from 'react'
import { FaGithub, FaHackerrank, FaKaggle, FaLinkedin, FaMedium, FaReddit, FaStackOverflow } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const links = [
  { "link": "https://www.linkedin.com/in/kris-ograbek-nlp/", "icon": FaLinkedin },
  { "link": "https://github.com/krisograbek", "icon": FaGithub },
  { "link": "https://medium.com/@kris-ograbek-nlp", "icon": FaMedium },
  { "link": "https://stackoverflow.com/users/15191870/krisograbek", "icon": FaStackOverflow },
  { "link": "https://www.hackerrank.com/krzysztof_ograb1", "icon": FaHackerrank },
  { "link": "https://www.kaggle.com/ograbekk", "icon": FaKaggle },
  { "link": "https://www.reddit.com/user/krispudzian", "icon": FaReddit },
]

function ContactIcons() {
  return (
    links.map((item, id) => {
      const Icon = item.icon;
      return (
        <Grid item key={id}>
          <Link
            className="LinkStyle icon "
            to={{
              pathname: item.link
            }}
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </Link>
        </Grid>
      )
    })

  )
}

export default ContactIcons
