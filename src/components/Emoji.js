import React from 'react'
import { emojis } from '../emoji_map'


function Emoji(props) {
  const { name } = props;
  // if there's more than one emoji, create list
  const list_emojis = Array.isArray(name) ? name.map((a) => emojis[a]) : emojis[name];
  return (
    <span style={{ fontSize: "20px" }}>{list_emojis} </span>
  )
}

export default Emoji
