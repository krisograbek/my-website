import { Grid } from '@material-ui/core'
import React from 'react'
import { FaGithub, FaHackerrank, FaKaggle, FaLinkedin, FaMedium, FaReddit, FaStackOverflow } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <Grid container
      spacing={1}
    >
      <Grid item>
        <Link
          className="LinkStyle icon "
          to={{
            pathname: "https://www.linkedin.com/in/kris-ograbek-nlp/"
          }}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size='2em' />
        </Link>
      </Grid>
      <Grid item>
        <Link
          className="LinkStyle icon "
          to={{
            pathname: "https://github.com/krisograbek"
          }}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size='2em' />
        </Link>
      </Grid>
      <Grid item>
        <Link
          className="LinkStyle icon "
          to={{
            pathname: "https://medium.com/@kris-ograbek-nlp"
          }}
          target="_blank"
          rel="noreferrer"
        >
          <FaMedium size='2em' />
        </Link>
      </Grid>
      <Grid item>
        <Link
          className="LinkStyle icon "
          to={{
            pathname: "https://stackoverflow.com/users/15191870/krisograbek"
          }}
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow size='2em' />
        </Link>
      </Grid>
      <Grid item>
        <Link
          className="LinkStyle icon "
          to={{
            pathname: "https://www.reddit.com/user/krispudzian"
          }}
          target="_blank"
          rel="noreferrer"
        >
          <FaReddit size='2em' />
        </Link>
      </Grid>
      <Grid item>
        <Link
          className="LinkStyle icon "
          to={{
            pathname: "https://www.hackerrank.com/krzysztof_ograb1?hr_r=1"
          }}
          target="_blank"
          rel="noreferrer"
        >
          <FaHackerrank size='2em' />
        </Link>
      </Grid>
      <Grid item>
        <Link
          className="LinkStyle icon "
          to={{
            pathname: "https://www.kaggle.com/ograbekk"
          }}
          target="_blank"
          rel="noreferrer"
        >
          <FaKaggle size='2em' />
        </Link>
      </Grid>

    </Grid>
  )
}

export default Footer
