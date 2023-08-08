import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios'
import {toast} from 'react-toastify'
import useLogout from '../hooks/useLogout';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "./Header";

function Dashboard() {
    let token = sessionStorage.getItem('token')
    let [data,setData] = useState([])
    let logout = useLogout()
    const cardData = [
      {
        imageUrl:"https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2019/07/16/gmsZy0/t_5d2d57e5ddbab.jpg",
        title: 'UP Movie',
        createdAt: "2023-08-04",
        content: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",


      },
      {
        imageUrl:  "https://webneel.com/daily/sites/default/files/images/daily/01-2016/12-the-angry-birds-poster-animation-movie-list-2016.jpg",
        title: 'The Angry Birds',
        createdAt: "2023-08-04",
        content: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

      },
      {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64kDXm7HQhRT8MAO99n7elsDwp8Y28ITL5w&usqp=CAU",
        title: 'The Lost Village',
        createdAt: "2023-08-04",
        content: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

      },
      {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5I90l8GHAn72VcT2l0RNvs6Sql2VDJb43g&usqp=CAU",
        title: 'Movie',
        createdAt: "2023-08-04",
        content: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

      },
      {
        imageUrl:"https://wallpaper-house.com/data/out/6/wallpaper2you_95768.jpg",
        title: 'Movie',
        createdAt: "2023-08-04",
        content: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

      },
      {
        imageUrl:"https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2019/07/16/gmsZy0/t_5d2d57e5ddbab.jpg",
        title: 'Movie',
        createdAt: "2023-08-04",
        content: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

      },
    ];
  
  return <div className='container-fluid1'>
    <Header/>
        <div style={{ display: 'flex', gap: '50px' }}>
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '40rem' ,height:'33rem'}}>
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.createdAt}</Card.Text>
            <Card.Text>{card.content}</Card.Text>
            <Button
            variant='contained'
            color='primary'
            type='submit'
            fullWidth
            style={{ marginTop: "10px", width: "90%" , backgroundColor: "pink" }}
          >
            Watch
          </Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  

  </div>
}

export default Dashboard