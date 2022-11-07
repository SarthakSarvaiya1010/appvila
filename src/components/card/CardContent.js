import React from 'react'
import "./CardContent.css"

import Card from 'react-bootstrap/Card';




function CardContent(props) {
    const { title, icons,text  } = props
  return (
    <div>
        <div  >
        <Card style={{ width: '26rem' }}   className='cardCont' >
        <Card   style={{width: '8rem'}}    className='cardIcon' >
        {icons}
        </Card>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
            </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default CardContent