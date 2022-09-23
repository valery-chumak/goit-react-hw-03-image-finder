import React from 'react'
import css from '../../styles/styles.module.css'
export default function ImageGalleryItem({item}) {
  return (
    <li className={ css.ImageGalleryItem }>
        <img className={ css.ImageGalleryItem_image } src="" alt="" />
    </li>
  )
}
