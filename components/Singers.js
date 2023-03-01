import React, { useEffect, useState } from "react";
import Loding from "./Loding";
import "../components/Singers.css";
import SingerCard from "./SingerCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7fc3cf9835mshaf0bc5ef9add64dp18c442jsn6de6aab07b8f",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

// Get references to all of the main images and thumbnail images

// In this example, we first get references to all of the main images and thumbnail images using their classes. We then loop through all of the thumbnail images and add a click event listener to each one. When a thumbnail is clicked, the event listener finds the closest .card element (which contains both the main image and the clicked thumbnail), and then sets the src attribute of the main image to the src attribute of the clicked thumbnail. This updates the main image for the card that the thumbnail belongs to.

function Singers() {
  const [data, setdata] = useState([]);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=singer", options)
      .then((response) => response.json())
      .then((response) => {
        setdata(response.d);
        console.log(response.d);
        setflag(false);
      
      })
      .catch((err) => console.error(err));
    console.log("useeffect");
  }, []);

  useEffect(()=>{
  const thumbnailImages = document.getElementsByClassName("thumbnail");

  // Add a click event listener to each thumbnail image
  for (let i = 0; i < thumbnailImages.length; i++) {
    console.log("enter in for loop");
    thumbnailImages[i].addEventListener("click", function () {
      // Set the main image's source to the clicked thumbnail's source
      console.log("click");
      const mainImage =
        this.closest(".SingerCard").querySelector(".main-image");
      mainImage.src = this.src;
    });
  }

  },[data])

  console.log("render");


  return flag ? (
    <Loding />
  ) : (
    <div className="Singers maxWidth">
      <h1 className="SingersHeading">Shortlist</h1>
      <p className="medium">Details :</p>
      <div className="details_div">
        <div>
          <p className="mediumHeading">Event Date</p>
          <p className="smallHeading"> 2023-02-22</p>
        </div>
        <div>
          <p className="mediumHeading">Location</p>
          <p className="smallHeading"> Delhi, India</p>
        </div>
        <div>
          <p className="mediumHeading">Budget</p>
          <div className="budget_tag">
            <p className="mediumHeading">₹500,000</p>
          </div>
        </div>
      </div>

      <center>
        <h1 className="SingersHeading">Singers</h1>
        <p className="medium">Select an artist that matches your vibe.</p>
      </center>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((ele) => {
          console.log(ele.s);
          return (
            <SingerCard
              key={ele.id}
              name={ele.l}
              number={ele.rank}
              imageURL={ele.i.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Singers;
