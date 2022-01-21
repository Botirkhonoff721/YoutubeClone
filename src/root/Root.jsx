import React from 'react'
import Page from '../Components/Page/Page'
import MenuList from '../Context/MenuList'
const Root = () => {
    return (
        <MenuList>
            <Page />
        </MenuList>
    )
}

export default Root
