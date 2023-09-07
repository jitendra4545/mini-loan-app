import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spacer, Tab, TabIndicator, TabList, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { CgProfile } from 'react-icons/cg'
import { BsCart4 } from 'react-icons/bs'
import { useMediaQuery } from '@chakra-ui/react'


const navItems = [{
    name: "Dashboard",
    link: ""
},
{
    name: "Apply New Loan",
    link: ""
}, {

    name: "Login",
    link: ""

}, {

    name: " Admin",
    link: ""

}
]





export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isLargerThan800] = useMediaQuery('(min-width: 1100px)')

    console.log(isLargerThan800)



    return (
        <Box  position="sticky" top='0' bg='blue' boxShadow={'lg'}>


            {
                isLargerThan800 ? <Flex    >

                    <Center w='20%'>
                        <Image w='100%' src='https://techdome.io/wp-content/uploads/2023/02/logo-light.svg' />
                    </Center>
                    <Spacer/>
                    <Box
                        flex='1'
                        p="3"
                        display={'flex'} justifyContent={'space-around'}
                    >

                        <Box>
                            <Tabs position="relative" variant="unstyled">
                                <TabList color={'white'} >
                                    {
                                        navItems.map((el) => {
                                            return <Tab  _hover={{fontWeight:'bold'}} fontSize={'20px'}>{el.name}</Tab>
                                        })
                                    }

                                </TabList>
                                <TabIndicator
                                    mt="-1.5px"
                                    height="3px"
                                    bg="red.500"
                                    borderRadius="1px"

                                />
                            </Tabs>
                        </Box>
                       
                    </Box>
                </Flex>

                    :

                    <Box display={'flex'} justifyContent={'space-between'} p='15px 35px' >
                        <Box>
                            <Image w='100%' src='https://techdome.io/wp-content/uploads/2023/02/logo-light.svg' />
                        </Box>
                        
                        <Box>
                            <HamburgerIcon ref={btnRef} color='white' onClick={onOpen} fontSize={'25px'} />
                        </Box>
                    </Box>


            }


            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                 

                    <DrawerBody mt={'150px'} mb='150px' display={'grid'}   >

                        {
                            navItems.map((el) => {
                                return <Menu >
                                    <MenuButton as={Button} >
                                        {el.name}
                                    </MenuButton>

                                </Menu>
                            })
                        }


                    </DrawerBody>

                    <DrawerFooter>
               
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


        </Box>
    )
}
