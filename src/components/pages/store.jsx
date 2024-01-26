//TODO: make the page, split into components, and use the following html

import styles from  '/src/styles/store-front.module.css'

import { Outlet } from "react-router-dom";

import StoreHeader from './store-header'
import ScrollNav from '../base/ScrollNav'
const Store = () => {

  return(
  <>
    <StoreHeader />
    <ScrollNav />
    <main>
      <Outlet />
    </main>
    <footer>© 2024 The Odin Project. All rights reserved.</footer>
  </>
  )
}

export default Store;