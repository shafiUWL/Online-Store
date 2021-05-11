import React from 'react'
import {Card, Button, Accordion} from 'react-bootstrap'
import './Compare.css'
import Products from './Products'

/*
Tutorial found on https://www.pluralsight.com/guides/use-bootstrap-accordion-with-react
When a user visits a product's page, they will have the option to click the 'Compare Items'
accordion menu. After they do that they are presented with a list of all the other products.
After they select a product, they are presented with all the details of the product they want
to compare.

TO DO
Either implement a side by side comparison of the products, or just present the details of 
the clicked product, so the user can just scroll up and down in order to compare. (Scenario 2 
will be implemented only if there isn't much space on the screen.)
Have to change theme palette to green

State of the 'Compare component' right now.
As of now, the component is barely functional. It's just an accordion component that displays
a list of mock products. I will continue working on this once the database is set up since
I want to start working on other parts of the website. 
Shouldn't take more than a day to complete it. -Panos
*/

function Compare() {
    return (
        <div className = 'div1'>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="0">
                            Compare Items
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Products/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>              
        </div>
    )
}

export default Compare
