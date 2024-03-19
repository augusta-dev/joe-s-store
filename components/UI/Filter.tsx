import React from 'react'
import Header from './Header'

type Props = {
    onClose: () => void
}

export default function Filter({onClose}:Props) {
  return (
    <Header value={'Filters'}></Header>
  )
}
