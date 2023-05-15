import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Video from '../Video/Video';

// const videos = [
//     {
//       id: 1,
//       author_name: "Jhankar Mahbub",
//       date: "2022-01-01",
//       title: "How to Make a Perfect Cup of Coffee",
//       video: "https://www.youtube.com/embed/VJGDHGFqzGw"
//     },
//     {
//       id: 2,
//       author_name: "Jane Doe",
//       date: "2022-01-02",
//       title: "10 Easy Ways to Stay Fit at Home",
//       video: "https://www.youtube.com/watch?v=DEF5678"
//     },
//     {
//       id: 3,
//       author_name: "John Smith",
//       date: "2022-01-03",
//       title: "Learn Python in 30 Minutes",
//       video: "https://www.youtube.com/watch?v=GHI9012"
//     },
//     {
//       id: 4,
//       author_name: "Bob Johnson",
//       date: "2022-01-04",
//       title: "Top 5 Must-Visit Destinations in Europe",
//       video: "https://www.youtube.com/watch?v=JKL3456"
//     },
//     {
//       id: 5,
//       author_name: "Sara Lee",
//       date: "2022-01-05",
//       title: "The Ultimate Chocolate Cake Recipe",
//       video: "https://www.youtube.com/watch?v=MNO7890"
//     },
//     {
//       id: 6,
//       author_name: "Jhankar Mahbub",
//       date: "2022-01-06",
//       title: "How to Make Homemade Pizza",
//       video: "https://www.youtube.com/watch?v=PQR2345"
//     },
//     {
//       id: 7,
//       author_name: "Adam Smith",
//       date: "2022-01-07",
//       title: "10 Best Exercises for a Full-Body Workout",
//       video: "https://www.youtube.com/watch?v=STU6789"
//     },
//     {
//       id: 8,
//       author_name: "Jenny Lee",
//       date: "2022-01-08",
//       title: "How to Speak Spanish Like a Native",
//       video: "https://www.youtube.com/watch?v=UVW1234"
//     },
//     {
//       id: 9,
//       author_name: "Alex Johnson",
//       date: "2022-01-09",
//       title: "5 Tips for Better Time Management",
//       video: "https://www.youtube.com/watch?v=XYZ5678"
//     },
//     {
//       id: 10,
//       author_name: "Jhankar Mahbub",
//       date: "2022-01-10",
//       title: "How to Make a Delicious Smoothie",
//       video: "https://www.youtube.com/watch?v=LMN9012"
//     },
//     {
//       id: 11,
//       author_name: "Emily Smith",
//       date: "2022-01-11",
//       title: "The Importance of Self-Care",
//       video: "https://www.youtube.com/watch?v=OPQ3456"
//     },
//     {
//       id: 12,
//       author_name: "Tom Johnson",
//       date: "2022-01-12",
//       title: "10 Tips for Traveling on a Budget",
//       video: "https://www.youtube.com/watch?v=RST6789"
//     },
// ]

const Videos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        fetch("/videos.json")
        .then(res => res.json())
        .then(data => setVideos(data))
    }, [])

    return (
        <Container className='mx-auto'>

<Row>
        <Col></Col>
        <Col xs={7}>

        {
                videos.map((video, i) => <Video key={i} video={video} />)
            }
        </Col>
        <Col></Col>
      </Row>
            
        </Container>
    );
};

export default Videos;