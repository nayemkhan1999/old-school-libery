const cardContainer = document.getElementById("card-container");
const cardDetails = document.getElementById("card-details");
const showCardDetails = document.getElementById("show-cardDetails");

// Function Number.01
const myFunctionOne = async (searchText) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  );
  const data = await response.json();
  const cards = data.posts;

  // Clear all container
  cardContainer.innerHTML = "";
  // For Loop By All Cards
  cards.forEach((card) => {
    // console.log(card);

    const newDiv = document.createElement("div");
    newDiv.classList = "grid grid-cols-1 gap-5";
    newDiv.innerHTML = ` <div
    class="flex lg:gap-8 lg:p-10 lg:w-[772px] lg:h-[270px] border-2 border-blue-200 rounded-2xl"
  >
    <div class="indicator">
      <span
        id="indicator"
        class="indicator-item badge badge-success "
      ></span>
      <div
        class="grid lg:w-20 w-8 lg:h-20 h-8 bg-base-300 place-items-center rounded-full"
      >
        <img class="rounded-full w-20 h-20" src="${card.image}" alt="blank" />
      </div>
    </div>
    <div>
      <span class="font-semibold mr-4"># ${card.category}</span>
      <span class="font-semibold text-sm"
        >Author: ${card.author.name}</span
      >
      <h1 class="lg:text-xl font-bold mt-2">${card.title}</h1>
      <p
        class="border-b-2 border-dashed lg:text-base opacity-70 lg:pb-5 mt-2"
      >
        ${card.description}
      </p>
      <div class="flex justify-between mt-8">
        <div class="lg:flex lg:gap-8">
          <span class="flex gap-2"
            ><img
              src="images/1.png"
              alt=""
            />${card.comment_count}</span
          >
          <span class="flex gap-2"
            ><img src="images/2.png" alt="" />${card.view_count}</span
          >
          <span class="flex gap-2"
            ><img
              src="images/3.png"
              alt=""
            />${card.posted_time}</span
          >
        </div>

        <div
          onclick="myFunctionFive('${card.title}','${card.view_count}')"
          class="flex-1 ml-72 hidden lg:block"
        >
          <span><img src="images/4.png" alt="" /></span>
        </div>
      </div>
    </div>
  </div>`;
    cardContainer.appendChild(newDiv);

    // Active Status On and Off
    const indicator = document.getElementById("indicator");
    if (card.isActive) {
      indicator.classList.add("bg-[#008000]");
    } else {
      indicator.classList.add("bg-[#FF0000]");
    }
  });

  // Loading Spinner Function Call and Remove Loading Spinner
  myFunctionFour(false);
};

// Function Number.02
const myFunctionTwo = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await response.json();
  // For LOOP Second time
  data.forEach((artist) => {
    // console.log(artist);
    const newDiv = document.createElement("div");
    newDiv.classList =
      "grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-5 lg:mt-16 mt-4";
    newDiv.innerHTML = `<div class="card w-72 lg:w-96 bg-base-100 shadow-xl border-2 pb-10">
    <figure class="px-10 pt-10">
      <img
        src="${artist.cover_image}"
        alt="Shoes"
        class="rounded-xl"
      />
    </figure>
    <div class="px-10">
      <span class="flex mt-5"
        ><img src="images/6.png" alt="" />${
          artist.author?.posted_date || "No publish date"
        }</span
      >
      <h1 class="lg:text-lg font-bold mt-4">
        ${artist.title}
      </h1>
      <p class="opacity-70 text-base mt-2">
        ${artist.description}
      </p>
      <div class="flex gap-4 mt-3">
        <img class="w-12 h-12 lg:w-16 lg:h-16 rounded-full" src="${
          artist.profile_image
        }" alt="" />

        <span
          ><p class="font-bold lg:text-xl">${artist.author.name}</p>
          ${artist.author?.designation || "Unknown"}</span
        >
      </div>
    </div>
  </div>`;
    cardDetails.appendChild(newDiv);
  });
};

// Function Number.03
const myFunctionThree = () => {
  const inputText = document.getElementById("input-text");
  const inputValue = inputText.value;
  myFunctionOne(inputValue);
  //Loading Spinner Function Call is True
  myFunctionFour(true);
};

// Function Number .04
const myFunctionFour = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// Function Number .05
const myFunctionFive = (find, find2) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div
  class="flex w-[300px] h-auto border-2 bg-[#ddd] shadow-lg shadow-blue-500/50 rounded-2xl p-4 mt-4"
>
  <h1 class="font-medium">
    ${find}
  </h1>
  <span class="flex items-center gap-2 pr-4"
    ><img src="images/2.png" alt="" />${find2}</span
  >
</div>`;
  showCardDetails.appendChild(newDiv);

  // Count every card details
  const plusBtn = document.getElementById("four").innerText;
  const number = parseInt(plusBtn);
  document.getElementById("four").innerText = number + 1;
};

const myFunctionSix = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts?category"
  );
  const data = await response.json();
  const allData = data.posts;
  allData.forEach((allCard) => {
    // console.log(allCard);
    const newDiv = document.createElement("div");
    newDiv.classList = "grid grid-cols-1 gap-5";
    newDiv.innerHTML = ` <div
    class="flex lg:gap-8 lg:p-10 lg:w-[772px] lg:h-[270px] border-2 border-blue-200 rounded-2xl"
  >
    <div class="indicator">
      <span
        id="indicator"
        class="indicator-item badge badge-success"
      ></span>
      <div
        class="grid lg:w-20 w-8 lg:h-20 h-8 bg-base-300 place-items-center rounded-full"
      >
        <img class="rounded-full" src="${allCard.image}" alt="blank" />
      </div>
    </div>
    <div>
      <span class="font-semibold mr-4"># ${allCard.category}</span>
      <span class="font-semibold text-sm"
        >Author: ${allCard.author.name}</span
      >
      <h1 class="lg:text-xl font-bold mt-2">${allCard.title}</h1>
      <p
        class="border-b-2 border-dashed lg:text-base opacity-70 lg:pb-5 mt-2"
      >
        ${allCard.description}
      </p>
      <div class="flex justify-between mt-8">
        <div class="lg:flex lg:gap-8">
          <span class="flex gap-2"
            ><img
              src="images/1.png"
              alt=""
            />${allCard.comment_count}</span
          >
          <span class="flex gap-2"
            ><img src="images/2.png" alt="" />${allCard.view_count}</span
          >
          <span class="flex gap-2"
            ><img
              src="images/3.png"
              alt=""
            />${allCard.posted_time}</span
          >
        </div>

        <div
          onclick="myFunctionFive('${allCard.title}','${allCard.view_count}')"
          class="flex-1 ml-72 hidden lg:block"
        >
          <span><img src="images/4.png" alt="" /></span>
        </div>
      </div>
    </div>
  </div>`;
    cardContainer.appendChild(newDiv);

    // Active Status On and Off
    const indicator = document.getElementById("indicator");
    if (allCard.isActive) {
      indicator.classList.add("bg-[#008000]");
    } else {
      indicator.classList.add("bg-[#FF0000]");
    }
  });
};

const tooltipFunction = () => {
  // Number01
  const btn = document.getElementById("tooltip-btn");
  const tooltip = document.getElementById("tooltip");

  btn.addEventListener("mouseenter", () => {
    tooltip.classList.remove("hidden");
  });
  btn.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });
  // Number02
  const btn2 = document.getElementById("tooltip-btn2");
  const tooltip2 = document.getElementById("tooltip2");

  btn2.addEventListener("mouseenter", () => {
    tooltip2.classList.remove("hidden");
  });
  btn2.addEventListener("mouseleave", () => {
    tooltip2.classList.add("hidden");
  });
  // Number03
  const btn3 = document.getElementById("tooltip-btn3");
  const tooltip3 = document.getElementById("tooltip3");

  btn3.addEventListener("mouseenter", () => {
    tooltip3.classList.remove("hidden");
  });
  btn3.addEventListener("mouseleave", () => {
    tooltip3.classList.add("hidden");
  });
  // Number04
  const btn4 = document.getElementById("tooltip-btn4");
  const tooltip4 = document.getElementById("tooltip4");

  btn4.addEventListener("mouseenter", () => {
    tooltip4.classList.remove("hidden");
  });
  btn4.addEventListener("mouseleave", () => {
    tooltip4.classList.add("hidden");
  });
};
tooltipFunction();

myFunctionTwo();
myFunctionOne();
myFunctionSix();
