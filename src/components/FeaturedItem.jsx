import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function FeaturedItem(props) {
    const {name, description, price, img, nutrition} = props;
    const [showNutrition, setShowNutrition] = useState(false);

    const calories = nutrition?.calories ?? "0";
    const fat = nutrition?.fat ?? "0g";
    const carbohydrates = nutrition?.carbohydrates ?? "0g";
    const protein = nutrition?.protein ?? "0g";

    return <div>
        <Card style={{ width: '600px', margin: 'auto', textAlign: 'center' }}>
        <img
            src = {img}
            alt = {name}
            style = {{width: '600px', height: 'auto', objectFit: 'cover'}}
        />
        <h2>{name}</h2>
        <h3>${price} per unit</h3>
        <p>{description}</p>
        <h4>Nutrition Facts</h4>
        {showNutrition && (
            <Table>
                <thead>
                    <tr>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Carbohydrates</th>
                        <th>Protein</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{calories}</th>
                        <th>{fat}</th>
                        <th>{carbohydrates}</th>
                        <th>{protein}</th>
                    </tr>
                </tbody>
            </Table>
        )}
        <Button
            onClick={() => setShowNutrition(prev => !prev)}
            >
            {showNutrition ? "Hide Nutrition Facts" : "Show Nutrition Facts"}
        </Button>
        </Card>
    </div>
}