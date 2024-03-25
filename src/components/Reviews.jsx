import reviewData from "../data/reviewData";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Reviews() {
    return (
        <div>
            <h2 className="text-white text-overflow text-center">
                {" "}
                Don't Just Take Our Word for It: Read the customer's Reviews!
            </h2> <br />
            <Row xs={1} md={5} className="g-4 justify-content-center"
            
            >
                {reviewData.map((reviewData, index) => (
                    <Col key={index}>
                        <Card
                            style={{
                                Height: " max-content",
                                width: "fit-content",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src={reviewData.image}
                                style={{ height: "200px" }}
                            />
                            <Card.Body>
                                <Card.Title>{reviewData.name}</Card.Title>
                                <Card.Text>{reviewData.review}</Card.Text>
                                <Card.Text>
                                    Rating: {reviewData.rating} / 5
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>{" "}
            <br />
        </div>
    );
}

export default Reviews;
