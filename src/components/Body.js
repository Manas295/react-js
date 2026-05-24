import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText),
  );
  return filterData;
}

const Body = () => {
  //State variable - Super powerful variable which can be used to
  // create dynamic and interactive UI
  /**
   * useState is a hook which is used to create state variable in functional component
   * It returns an array with two elements - the current state value and a
   * function to update that state.
   *
   * Syntax: const [stateVariable, setStateVariable] = useState(initialValue);
   * When you call the setStateVariable function with a new value, React will
   * re-render the component with the updated state, allowing you to create dynamic
   * and interactive user interfaces.
   *
   * In this code snippet, we are creating a state variable called listOfRestaurants
   * and initializing it with an array of restaurant objects.
   * We also have a button that, when clicked, filters the list of restaurants
   * to show only those with an average rating greater than 4 and updates the
   * state with the filtered list. This allows us to dynamically update the UI
   * based on user interaction.
   *
   * Note: When the state variable is updated using the setStateVariable function,
   * React will automatically re-render the component to reflect the changes in the UI.
   * This is a fundamental aspect of how React manages state and updates the user
   * interface efficiently.
   *
   * In the provided code snippet, the useState hook is used to create a state variable
   * called listOfRestaurants, which is initialized with an array of restaurant objects.
   * Each restaurant object contains data such as id, name, cloudinaryImageId, cuisines,
   * costForTwo, deliveryTime, and avgRating.
   *
   * The button with the class filter-btn has an onClick event handler that filters the
   * listOfRestaurants to include only those restaurants with an average rating
   * greater than 4. When the button is clicked, the filtered list is logged to the
   * console, and the state variable listOfRestaurants is updated with the filtered
   * list using the setListOfRestaurants function. This allows the component to
   * re-render and display only the top-rated restaurants based on user interaction.
   * In summary, the useState hook is essential for managing state in functional
   * components, enabling dynamic and interactive UI updates based on user actions
   * or other events.
   */
  //listOfRestaurants starts out equal to resList on the first render.
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  /*
    Lets write above line using array destructuring
    const arr = useState(resList);
    const listOfRestaurants = arr[0];
    const setListOfRestaurants = arr[1];
  */

  const [searchText, setSearchText] = useState("");
  //   [
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.4",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334476",
  //       name: "DOMINO'S PIZZA",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Pizza", "Italian", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334477",
  //       name: "McDonald's",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Fries", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.1",
  //     },
  //   },
  // ]);
  //Normal JS variable
  // let listOfRestaurantsJS = [
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.4",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334476",
  //       name: "DOMINO'S PIZZA",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Pizza", "Italian", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334477",
  //       name: "McDonald's",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Fries", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.1",
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Callback function
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4,
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList); //Updating the state variable with new filtered list
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); //Updating the state variable with new search text
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, listOfRestaurants);
            // update the state - restaurants which we want to render
            setListOfRestaurants(data); //Updating the state variable with new filtered list
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} /> //variable resData should be
          // use with same name as defind in component RestaurantCard where we destructured props
        ))}
      </div>
    </div>
  );
};

export default Body;

// <!--
// This JSX creates a `div` container with class `filter` and a
// `button` inside it. The button uses the class `filter-btn`
// for styling and displays the text `Top Rated Restaurants`.

// The important behavior is attached to the button’s `onClick`
// handler. When the user clicks the button, it runs an arrow
// function that applies `Array.prototype.filter` to `listOfRestaurants`. For each restaurant object `res`, it checks whether `res.data.avgRating > 4`. That means only restaurants with an average rating greater than 4 are kept in the new `filteredList`.

// Finally, the code logs the filtered result to the
// console using `console.log(filteredList)`. In other words,
// clicking the button does not currently update the UI directly;
//  it just computes and prints the list of top-rated restaurants.
// !-- >

/*
 /* 
        Search Container 
        onChange on the input keeps the typed text in sync
        with React state. 
        
        When you type KFC or Meghana foods, the handler runs:
        setSearchText(e.target.value) That stores the current input value in the
        state variable searchText. 
        
        Then when you click Search: 
        the button handler reads searchText 
        it uses that value to filter listOfRestaurants 
        and updates the restaurant list state with setListOfRestaurants(data) 
        So the
        
        flow is: 
        Type text → onChange saves it to searchText 
        Click Search → code
        uses searchText to find matching restaurants 
        UI updates to show the filtered results
      
*/
