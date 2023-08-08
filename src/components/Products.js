import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios'
import {toast} from 'react-toastify'
import useLogout from '../hooks/useLogout';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Rating from '@mui/material/Rating';


function Dashboard() {
    let token = sessionStorage.getItem('token')
    let [data,setData] = useState([])
    let logout = useLogout()
    const cardData = [
        {
            title: "Product 1",
            imageUrl:
           "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
            price: "15",
            description: "The standard Lorem Ipsum passage is",
      
          },
          {
            title: "Product 2",
            imageUrl:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: "25",
            moviedescription: "The standard Lorem Ipsum passage is",
      
            },
      
          {
            title: "Product 3",
            imageUrl:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
              price: "30",
              moviedescription: "The standard Lorem Ipsum passage is ",
      
            },
          {
            title: "Product 4",
            imageUrl:
            "https://minimal-kit-react.vercel.app/assets/images/products/product_24.jpg",
              price: "55",
             moviedescription: "The standard Lorem Ipsum passage is",
      
            },
          {
            title: "Product 5",
            imageUrl:
            " https://minimal-kit-react.vercel.app/assets/images/products/product_21.jpg",
              price: "10",
             moviedescription: "The standard Lorem Ipsum passage is ",
      
            },
          {
            title:"Product 6",
            imageUrl:
            "https://minimal-kit-react.vercel.app/assets/images/products/product_13.jpg",
             moviedescription: "The standard Lorem Ipsum passage is ",
              price: "40",
      
            },
      

    ];
  
    const firstRowCards = cardData.slice(0, 2); 


  return <div className='container-fluid1'>
    <Header/>
    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '40rem' ,height:'40rem'}}>
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.createdAt}</Card.Text>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Card.Text>${card.price}</Card.Text>
            <Button
            variant='contained'
            color='primary'
            type='submit'
            fullWidth
            style={{ marginTop: "10px", width: "100%" , backgroundColor: "orange" }}
          >
            Add cart
          </Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  

  </div>
}

export default Dashboard