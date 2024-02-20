const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  console.log("FormData:", formData);
  console.log("Email:", formData.email);
  console.log("Message:", formData.message);

  const response = await fetch("https://server-portfolio-beru.onrender.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    showModal("Message sent successfully!");
    contactForm.reset();
  } else {
    showModal("An error occurred. Please try again later.");
  }
});
//modal

function showModal(message) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalMessage = document.getElementById("modal-message");

  modalMessage.textContent = message;
  modal.style.display = "flex";
  modalContent.classList.add("scale-100");
}

const confirmBtn = document.getElementById("confirm-btn");

confirmBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  modal.style.display = "none";
  modalContent.classList.remove("scale-100");
});

//modal
