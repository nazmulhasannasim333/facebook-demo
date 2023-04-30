import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='text-center mt-5'>
            <Container>
                <h3>Terms and Conditions</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias dolor molestiae! Ratione voluptatum dolore beatae. Reiciendis dolorem eligendi non eaque voluptatibus cum ducimus quam minima perferendis quo corporis, maiores debitis. Enim excepturi debitis ad in quod impedit nulla ratione totam exercitationem porro similique, saepe suscipit minus velit eaque libero nesciunt quis optio illum. Laborum nisi porro, amet officiis tenetur adipisci veritatis dicta recusandae excepturi. Tempore, ab! Vitae ea fugit eum quos at, vero molestias molestiae sunt. Consectetur, dicta libero nesciunt quis optio illum. Laborum nisi porro, amet officiis adas molestiae sunt. Consectetur, dic eveniet accusantium laborum quidem atque blanditiis! Cum iure neque porro excepturi debitis nemo. Alias dolorum corrupti quam nulla ad, saepe expedita.</p>
                <Button variant="outline-primary" size="lg">
        <Link className='text-decoration-none' to="/register">Back to Register</Link>
      </Button>
            </Container>
            
        </div>
    );
};

export default Terms;