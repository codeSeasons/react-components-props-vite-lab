import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculate the emoji based on reading time
  let emoji = "";
  if (minutes < 30) {
    // Coffee every 5 minutes (round up)
    const coffeesCount = Math.ceil(minutes / 5);
    emoji = "☕️".repeat(coffeesCount);
  } else {
    // Bento box every 10 minutes (round up)
    const foodsCount = Math.ceil(minutes / 10);
    emoji = "🍱".repeat(foodsCount);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {emoji} {minutes} min read
      </p>
    </article>
  );
}

export default Article;
