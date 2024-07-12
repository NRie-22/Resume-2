export const createMarkupReview = reviews => {
  return reviews 
    .map(
      ({ _id, avatar_url, author, review  }) => {
        return (
          `<li class="review-card swiper-slide" id="${_id}">
            <p class="review-card-text">${review}</p>
            <div class="review-card-author">
             <img class="review-card-author-avata" src="${avatar_url}" alt="${author}" alt="review author photo" width="40" height="40" loading="lazy">
              <p class="review-card-author-name">${author}</p>
           </div>
         </li>`
        );
     }
    ).join('');
}
