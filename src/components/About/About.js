import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const About = () => {
    return (
        <div>
            <CardGroup className='m-5'>
            <Card>
                <Card.Body>
                <Card.Title>Nahid Hasan</Card.Title>
                <Card.Text>
                    Bangladesh University of Business and Technology.
                    Intake: 45
                    Section: 2
                    ID: 19203103053
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
        
                <Card.Body>
                <Card.Title>Sarkit</Card.Title>
                <Card.Text>
                    Bangladesh University of Business and Technology.
                    Intake: 45
                    Section: 2
                    ID: 192031030..
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Amdadul Islam</Card.Title>
                <Card.Text>
                    Bangladesh University of Business and Technology.
                    Intake: 45
                    Section: 2
                    ID: 192031030..
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>

                <Card.Body>
                <Card.Title>Mustafizur Anik</Card.Title>
                <Card.Text>
                    Bangladesh University of Business and Technology.
                    Intake: 45
                    Section: 2
                    ID: 192031030..
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
    </CardGroup>
        </div>
    );
};

export default About;